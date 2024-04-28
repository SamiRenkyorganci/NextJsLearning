import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Timer from "../components/Timer";
import About from "../components/About";
import Alarm from "../components/Alarm";

export default function index() {
	const [pomodoro,setpomodoro]=useState(25);
	const [shortBreak,setShortBreak]=useState(5);
	const [longBreak,setLongBreak]=useState(10);
	const [seconds,setSeconds]=useState(0);
	const [ticking,setTicking]=useState(false);
	const [consumedSecond, setConsumedSecond] = useState(0);
	const [stage,setstage]=useState(0);
	const [isTimeUp, setIsTimeUp] = useState(false);

	const alarmRef = useRef();

	const switchStage =(index) => {
		const isYes = consumedSecond && stage !== index ? confirm("Zamanlayıcıyı değiştirmek için emin misin ?  "):false;
		if (isYes) {
			reset();
			setstage(index);
		}else if (!consumedSecond){
			setstage(index);

		}
	}
	const getTickingTime = () => {
		const timeStage = {
			0:pomodoro,
			1:shortBreak,
			2:longBreak
		}
		return timeStage[stage];
	}
	const updateMinute = () => {
		const updateStage = {
			0:setpomodoro,
			1:setShortBreak,
			2:setLongBreak
		}
		return updateStage[stage];
	}
	const reset = () => {
		setConsumedSecond(0);
		setTicking(false);
		setSeconds(0);
		setpomodoro(25);
		setShortBreak(5);
		setLongBreak(10);
	}
	const timeUp = () => {
		reset();
		setIsTimeUp(true);
		alarmRef.current.play();
	}
	const clockTicking  = () => {
		const minutes  = getTickingTime();
		const setMinutes = updateMinute();
		if (minutes === 0 && seconds===0) {
			timeUp();
			
		}else if(seconds === 0){
				setMinutes((minute) => minute-1);
				setSeconds(59);
		}
		else{
			setSeconds((second) => second-1);

		}
	}
const muteAlarm = () => {
	alarmRef.current.pause();
	alarmRef.current.currentTime =0;
}
const startTimer =() => {
	setIsTimeUp(false);
	muteAlarm();
	setTicking((ticking) => !ticking);
}
	useEffect (()=> {
		window.onbeforeunload= () => {
			return consumedSecond ? "Show waring" : null;
		}


		const timer  = setInterval(()=> {
			if(ticking){
				setConsumedSecond((value) => value + 1 );
				clockTicking();
			}
			
		},1000);
		
		return () => {
			clearInterval(timer);
		};
	},[seconds,pomodoro,shortBreak,longBreak,ticking])	
	return (
		<div className="bg-gray-900 min-h-screen font-inter">
			<div className="max-w-2xl min-h-screen  mx-auto">
			<Navigation/>
			<Timer 
			stage={stage} 
			switchStage={switchStage} 
			getTickingTime={getTickingTime}
			seconds={seconds}
			ticking={ticking}
			startTimer={startTimer}
			muteAlarm={muteAlarm}
			isTimeUp={isTimeUp}
			reset={reset}
			/>
			<About/>
			<Alarm ref={alarmRef}/>
			</div>
			
		</div>
	);
}

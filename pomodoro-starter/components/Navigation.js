import React from 'react'
import { GiTomato,GiSettingsKnobs  } from "react-icons/gi";

export default function Navigation() {
  return (
    <nav className='pt-5 text-white flex justify-between w-11/12 mx-auto'>
        <div className='flex items-center gap-1 cursor-pointer'>
            <GiTomato className='text-sm '/>
            <h1>Next Pomodoro</h1>
        </div>
        <GiSettingsKnobs className='text-2xl  cursor-pointer' />
    </nav>
  )
}

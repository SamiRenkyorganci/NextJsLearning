import React from 'react'

export default function About() {
  return (
    <div className='w-11/12 mx-auto mt-36 text-white p-5 '>
        <div className='mt-4'>
            <h1 className='text-cl sm:text-2xl font-medium'> <span className='border-b-4 border-red-400'>Pomodoro</span> Tekniği Nedir?</h1>
            <p className='mt-5 tracking-wide opacity-60 text-lg break-words'>
            Pomodoro Tekniği, Francesco Cirillo tarafından daha verimli bir çalışma ve ders çalışma yöntemi için yaratılmıştır. 
            Teknik, çalışmayı geleneksel olarak 25 dakika uzunluğunda ve kısa aralarla ayrılmış aralıklarla bölmek için bir zamanlayıcı kullanır. 
            Her aralığa, Cirillo'nun üniversite öğrencisiyken kullandığı domates şeklindeki mutfak zamanlayıcısından esinlenerek 
            İtalyanca 'domates' anlamına gelen kelimeden gelen pomodoro adı veriliyor.
            </p>  
            <h1 className='text-cl sm:text-2xl font-medium break-words'> <span className='border-b-4 border-red-400'>Günlük Odak </span> Nedir?</h1>
            <p className='mt-5 tracking-wide opacity-60 text-lg'>
            Günlük odak, bir pomodoro projesidir. Açık kaynaktır ve işte kod. https://github.com/Chensokheng/pomodoro
            </p>
        </div>
    </div>
  )
}

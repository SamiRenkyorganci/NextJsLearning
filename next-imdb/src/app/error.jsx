'use client';
import React from 'react'
import { useEffect } from 'react'
export default function error({error,reset}) {
  useEffect(()=>{
    console.log(error);
  },[error])
    return (
       
      <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-amber-300">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-amber-600 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-amber-300">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <button onClick={() => reset()} className="text-sm font-semibold text-amber-600">
            Try Again<span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </main>
    
  )
}

import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white '>
      <div className='w-full max-w-[800px] mt-[-96px] h-screen mx-auto flex flex-col text-center gap-3 justify-center'>
        <p className='text-emerald-500 md:text-2xl sm:xl font-bold'>Growing with analytics</p>
        <h1 className='font-bold md:text-6xl sm:text-4xl text-2xl '>Grow with data</h1>
        <div className='flex justify-center items-baseline'>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold'>Fast, Flexible , Financing for <span> </span> </p>
            <ReactTyped className='md:text-2xl sm:text-xl text-lg font-bold text-gray-700 pl-2' strings={['BTB','SaaS','BTC']} typeSpeed={120} backSpeed={130} loop/>
        </div>
        <button className='mx-auto md:w-[120px] md:h-[45px] w-[100px] h-[30px] bg-emerald-500 text-black rounded-sm'>Get Started</button>

      </div>
    </div>
  )
}

export default Hero

import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex text-white py-15 px-6 gap-4'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col px-5'>
          <h1 className='md:text-5xl sm:text-3xl text-xl font-bold'>Stay upto date with our products </h1>
          <p className='text-sm text-emerald-500 md:text-xl sm:text-md'>Lorem ipsum dolor sit elit. Similique saepe, ea aperiam ex animi distinctio .</p>
        </div>
      <div className='flex flex-col justify-center px-5'>
        <div className='flex'>
          <input type="text" placeholder='Enter your E-Mail' className='bg-white text-gray-500 md:p-2 p-1 w-[75%] rounded-md'/>
          <button className='bg-emerald-500 text-black w-[75px] rounded-md mx-1'>Subscribe</button>
        </div>
        <p className='text-sm md:text-xl sm:text-md'>Terms and services apply.<span className='text-emerald-500 underline '> Click here for T & S</span></p>
      </div>
      </div>
    </div>
  )
}

export default Newsletter

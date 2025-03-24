import React from 'react'
import { AiFillMoneyCollect } from 'react-icons/ai'

const Services = () => {
  return (
    <div className='w-full px-4 py-10 bg-white '>
      <div className='max-w-[1240px] grid grid-cols-1 md:grid-cols-3  mx-auto gap-3'>
          <div className='w-full my-4 flex flex-col shadow-2xl rounded-2xl hover:scale-105 duration-300'>
            <AiFillMoneyCollect size={55} className=' mx-auto mt-[-20px] bg-white' />
            <h2 className='font-bold text-4xl text-center'>Single Service</h2>
            <p className='font-bold text-2xl text-center mt-4'>199$</p>
            <div className='m-4 font-medium'>
              <p className='border-b border-gray-400 text-center mx-4 mt-8'>Custom plan</p>
              <p className='border-b border-gray-400 text-center mx-4'>Custom plan</p>
              <p className='border-b border-gray-400 text-center mx-4'>Custom plan</p>
              <p className='border-gray-400 text-center mx-4'>Custom plan</p>
            </div>
            <button className='mx-auto my-2 md:w-[120px] md:h-[45px] w-[100px] h-[30px] bg-emerald-500 text-black rounded-sm'>Get Started</button>
          </div>
          
          <div className='w-full my-4 flex flex-col shadow-2xl rounded-2xl hover:scale-105 duration-300 bg-gray-300'>
            <AiFillMoneyCollect size={55} className=' mx-auto mt-[-20px] bg-white' />
            <h2 className='font-bold text-4xl text-center'>Single Service</h2>
            <p className='font-bold text-2xl text-center mt-4'>199$</p>
            <div className='m-4 font-medium'>
              <p className='border-b border-gray-400 text-center mx-4 mt-8'>Custom plan</p>
              <p className='border-b border-gray-400 text-center mx-4'>Custom plan</p>
              <p className='border-b border-gray-400 text-center mx-4'>Custom plan</p>
              <p className='border-gray-400 text-center mx-4'>Custom plan</p>
            </div>
            <button className='mx-auto my-2 md:w-[120px] md:h-[45px] w-[100px] h-[30px] bg-emerald-500 text-black rounded-sm'>Get Started</button>
          </div>
          
          <div className='w-full my-4 flex flex-col shadow-2xl rounded-2xl hover:scale-105 duration-300'>
            <AiFillMoneyCollect size={55} className=' mx-auto mt-[-20px] bg-white' />
            <h2 className='font-bold text-4xl text-center'>Single Service</h2>
            <p className='font-bold text-2xl text-center mt-4'>199$</p>
            <div className='m-4 font-medium'>
              <p className='border-b border-gray-400 text-center mx-4 mt-8'>Custom plan</p>
              <p className='border-b border-gray-400 text-center mx-4'>Custom plan</p>
              <p className='border-b border-gray-400 text-center mx-4'>Custom plan</p>
              <p className='border-gray-400 text-center mx-4'>Custom plan</p>
            </div>
            <button className='mx-auto my-2 md:w-[120px] md:h-[45px] w-[100px] h-[30px] bg-emerald-500 text-black rounded-sm'>Get Started</button>
          </div>
          


      </div>
    </div>
  )
}

export default Services

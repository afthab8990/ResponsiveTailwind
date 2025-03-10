import React from 'react'
import iso from '../assets/iso.png'

const Analytics = () => {
  return (
    <div className='flex justify-center items-center w-full bg-white py-12 px-5'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-0.5 ' >
            <img src={iso} alt="image of pc" className='w-[500px] min-w-[150px] mx-auto py-5' />
            <div className='flex flex-col justify-center'>
                <h1 className='text-emerald-500 font-bold md:text-2xl sm:text-xl'>THIS IS A TEST</h1>
                <h1 className='text-black font-bold md:text-4xl sm:text-2xl '>THIS IS A HEADER COMPONENT</h1>
                <p className='text-green-950  md:text-xl sm:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eum impedit blanditiis assumenda, consequuntur amet iste fuga illum dicta saepe mollitia non alias cum neque eius eaque itaque soluta ab veniam. Dicta aperiam non, repellendus repudiandae atque.vel.</p>
                <button className='bg-black text-emerald-500 font-bold md:w-[120px] md:h-[45px] w-[80px] h-[30px] rounded-sm md:mx-0 mx-auto  '>Enter</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics

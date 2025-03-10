import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <>
    <div className=' flex justify-between text-white items-center h-24 max-w-[1284px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-emerald-500'>REACT.</h1>
      <ul className='flex max-sm:hidden'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block sm:hidden fixed top-0 right-0 m-8 '>
        {!nav ? <AiOutlineClose size={20} className='text-emerald-500'/> : <AiOutlineMenu size={20} className='text-emerald-500'/>}
      </div>
      <div className={!nav ? 'fixed top-0 flex-col justify-center h-full max-sm:w-[50%] w-[30%] border-r border-gray-900 bg-black ease-in-out duration-500 left-0 mx-auto p-4 ' :'fixed left-[-100%] '}>
      <h1 className='w-full text-3xl font-bold text-emerald-500 p-4'>REACT.</h1>

      <ul className=' uppercase'>
        <li className='p-4 border-b-1 border-gray-900'>Home</li>
        <li className='p-4 border-b-1 border-gray-900'>Company</li>
        <li className='p-4 border-b-1 border-gray-900'>Resources</li>
        <li className='p-4 border-b-1 border-gray-900'>About</li>
        <li className='p-4 border-b-1 border-gray-900'>Contact</li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar

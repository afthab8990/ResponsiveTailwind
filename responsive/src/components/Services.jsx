import React from 'react'
import { AiFillMoneyCollect } from 'react-icons/ai'

const Services = () => {
  return (
    <div className='w-full px-4 py-10 bg-white '>
      <div className='max-w-[1240px] grid grid-cols-1 md:grid-cols-3  mx-auto gap-3'>
          <div className='w-20 flex flex-col mx-auto'>
            <AiFillMoneyCollect size={55} />
          </div>
          <div className='w-20 flex flex-col mx-auto'>
            <AiFillMoneyCollect size={55} />            
          </div>
          <div className='w-20 flex flex-col mx-auto'>
            <AiFillMoneyCollect size={55} />
            Hello
          </div>

      </div>
    </div>
  )
}

export default Services

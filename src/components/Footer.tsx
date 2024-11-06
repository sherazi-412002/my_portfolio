import React from 'react'

import { FaRegCopyright } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-bgColor border-t-[1px]  border-t-blue-300 h-auto gap-5 md:gap-0 md:h-76 lg:h-72 flex bottom-0 flex-col justify-between p-4'>



      <div className='flex justify-center text-gray-500 gap-1'>
        <p className='mt-[18px]'><FaRegCopyright /></p>
        <p className='mt-4 text-[14px]'>2024 Syed Shoaib Sherazi | All Right Revesed</p>
      </div>

    </div>
  )
}

export default Footer
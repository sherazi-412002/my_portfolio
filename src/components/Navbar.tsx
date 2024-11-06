'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";



function Navbar() {

  const [isClick,setisClick] = useState(false)

  const toggleNavbar = ():void => {
    setisClick (!isClick)
  }
  return (
    <div>

        <nav className='flex  justify-around md:justify-between items-center w-[100%] left-0 right-0 top-0 h-[15vh] transparent  text-white font-serif fixed'>
            <div className='text-2xl lg:text-4xl ml-1 lg:ml-12 slideRight font-myFont'>SYED SHOAIB SHERAZI</div>
            <div>
                <ul className=' md:flex hidden gap-8 text-xl lg:text-2xl slideTop mr-20'>
                   <Link href={'/'}><li   className='hover:text-fontColors hover:shadow-sm p-2  hover:border-[1px] hover:shadow-fontColors  hover:duration-300 hover:delay-300 font-myFont  font-bold  '>Home</li></Link>
                    <Link href={'/about'}><li  className='hover:text-fontColors hover:shadow-sm p-2  hover:border-[1px] hover:shadow-fontColors hover:duration-300 hover:delay-300 font-myFont font-bold'>About</li></Link>
                    <Link href={'/projects'}><li  className='hover:text-fontColors hover:shadow-sm p-2  hover:border-[1px] hover:shadow-fontColors hover:duration-300 hover:delay-300 font-myFont font-bold'>Projects</li></Link>
                    <Link href={'/contact'}><li className='hover:text-fontColors hover:shadow-sm p-2  hover:border-[1px] hover:shadow-fontColors hover:duration-300 hover:delay-300 font-myFont font-bold'>Contact</li></Link>
                </ul>
            </div>
        

        {/* Navbar for Small devices */}
            <div className='md:hidden flex items-center mr-3'>

            <div className='' onClick={toggleNavbar}>
                {isClick?(<div><RxCross2 size={35} /></div>):(<div><GiHamburgerMenu size={35} /></div>)}
                
            </div >
            </div>
        </nav>

        {isClick &&  (
            <div className='md:hidden top-24 right-0 w-full bg-black fixed'>
            <ul className='flex flex-col  text-center pr-4 gap-3 pb-6 pt-6  bg-black text-white text-2xl hover:duration-300 hover:delay-300'>
                <Link href={'/'}><li className='hover:text-black hover:rounded-lg hover:bg-white hover:p-2 hover:duration-300 hover:delay-300 ' >Home</li></Link>
                <Link href={'/about'}><li className='hover:text-black hover:rounded-lg hover:bg-white hover:p-2 hover:duration-300 hover:delay-300 ' >About</li></Link>
                <Link href={'/projects'}><li className='hover:text-black hover:rounded-lg hover:bg-white hover:p-2  hover:duration-300 hover:delay-300' >Projects</li></Link>
                <Link href={'/contact'}><li className='hover:text-black hover:rounded-lg hover:bg-white hover:p-2  hover:duration-300 hover:delay-300' >Contact</li></Link>
                </ul>
            </div>

            )}

    </div>
  )
}

export default Navbar
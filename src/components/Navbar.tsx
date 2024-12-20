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

        <nav className='flex  justify-around gap-8 md:justify-between items-center w-[100%] left-0 right-0 top-0 h-[12vh] md:h-[15vh] transparent  text-white font-serif fixed'>
            <div className='text-xl lg:text-4xl lg:ml-12 slideRight font-logoFont'>SYED SHOAIB SHERAZI</div>
            <div>
                <ul className=' md:flex hidden gap-8 text-xl lg:text-2xl hover:rounded-full slideTop mr-20'>
                   <Link href={'/'}><li   className='hover:text-fontColors hover:shadow-xl p-2  hover:border-[1px] hover:shadow-fontColors  hover:duration-300 hover:delay-300 font-myFont  font-bold  '>Home</li></Link>
                    <Link href={'/about'}><li  className='hover:text-fontColors hover:shadow-xl p-2  hover:border-[1px] hover:shadow-fontColors hover:duration-300 hover:delay-300 font-myFont font-bold'>About</li></Link>
                    <Link href={'/projects'}><li  className='hover:text-fontColors hover:shadow-xl p-2  hover:border-[1px] hover:shadow-fontColors hover:duration-300 hover:delay-300 font-myFont font-bold'>Projects</li></Link>
                    <Link href={'/contact'}><li className='hover:text-fontColors hover:shadow-xl p-2  hover:border-[1px] hover:shadow-fontColors hover:duration-300 hover:delay-300 font-myFont font-bold'>Contact</li></Link>
                </ul>
            </div>
        

        {/* Navbar for Small devices */}
            <div className='md:hidden flex items-center mr-3'>

            <div onClick={toggleNavbar}>
                {isClick?(<div><RxCross2 color='#0ef' size={35} /></div>):(<div><GiHamburgerMenu size={35} color='#0ef' /></div>)}
                
            </div >
            </div>
        </nav>

        {isClick &&  (
            <div className='md:hidden top-[60px] right-[10%] w-44 p-3 fixed rounded-lg bg-bgColorDrk z-50 '>
            <ul className='flex flex-col  text-center pr-4 gap-3 pb-6 pt-6 text-white text-2xl hover:duration-300 hover:delay-300'>
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
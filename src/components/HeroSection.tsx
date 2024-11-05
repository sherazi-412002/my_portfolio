'use client'
import React from 'react';
import Image from 'next/image'
import profile from '../public/port.jpg';
import { FaGithub } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import Link from 'next/link';
import Typed from 'typed.js';


function HeroSection() {
   
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer","Bakend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
    
      typed.destroy();
    };
  }, []);





  return (
    <div>
        <section className='flex flex-col md:flex-row md:justify-center gap-16  lg:gap-0 font-sans'>

            <div className='flex justify-center flex-col items-center md:items-start space-y-3 w-[90%] md:w-[100%] ml-[10%]'>
                <p className='text-2xl lg:text-3xl slideBtm font-myFont '>Hello, Its Me</p>
                <p className='text-3xl lg:text-5xl  font-bold font-myFont slideRightName'>Syed Shoaib Sherazi</p>
                <p className='text-2xl lg:text-4xl font-bold font-myFont slideBtm '>And I am a <span ref={el} className='text-fontColors'></span></p><br />
                <div className='space-y-6'>
                <div className='flex gap-5'>
                    <button className='p-3 w-36 rounded-full text-bgColor bg-fontColors  text-xl 
                    font-bold font-sans hover:duration-300 hover:delay-150 slideLeft hover:shadow-2xl hover:shadow-fontColors'><Link href={'https://hackathons-gamma.vercel.app/'}>View CV</Link></button>
                    <button className='p-2 w-36 rounded-full text-bgColor bg-fontColors hover:p-1 text-xl 
                    font-bold font-sans hover:duration-300 hover:delay-150 slideLeft hover:shadow-2xl hover:shadow-fontColors'>Contact Info</button>
                </div>
                <div className='flex gap-7 items-center justify-center slideTopBtn'>
                  <Link href={'https://github.com/sherazi-412002'}><FaGithub size={50} color='#0ef' className='border-2 border-fontColors hover:text-bgColor hover:shadow-2xl hover:shadow-fontColors rounded-full p-2'/></Link>
                  <Link href={'https://www.linkedin.com/in/syed-shoaib-sberazi-3638822b4/'}><RiLinkedinFill size={50} color='#0ef' className='border-2 border-fontColors hover:shadow-2xl hover:shadow-fontColors rounded-full p-2' /></Link>
                </div>
                </div>
            </div>

            <div className='w-[80%] ml-[10%] lg:ml-0 lg:mr-[10%]'>
                <Image src={profile} alt='profilePic' height={1000} width={1000} className='h-[350px] w-[350px] shadow-2xl shadow-fontColors  zoomInImg lg:h-[400px] lg:w-[400px] rounded-full mt-5 md:mt-10'/>

            </div>
        </section>


    </div>
  )
}

export default HeroSection
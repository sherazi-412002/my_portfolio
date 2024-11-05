import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-bgColor border-t-[1px]  border-t-blue-300 h-auto gap-5 md:gap-0 md:h-76 lg:h-72 flex bottom-0 flex-col justify-between p-4'>
      <div className='flex flex-col gap-10 md:flex-row justify-between'>
        <div className='mx-5 md:mx-32'>
            <span className='text-3xl text-white flex justify-center '>Links</span><br />
            <ul className='flex justify-between items-center md:items-start flex-col gap-8 mt-7'>
                <Link href={"https://www.linkedin.com/in/syed-shoaib-sberazi-3638822b4/"}>
                <li className='text-white text-2xl flex gap-4 ml-10 md:ml-0'>LinkedIn Id : <GrLinkedin size="34px" color='white'/></li>
                </Link>

                <Link href={"https://github.com/sherazi-412002"}>
                <li className='text-white text-2xl flex gap-4 ml-10 md:ml-0'>GitHub Id : < FaGithub size="34px" color='white'/></li>
                </Link>
            </ul>
        </div>

        <div className='mx-5 md:mx-32'>
             <span className='text-3xl text-white flex justify-center'>Projects</span>
             <Link href={"https://hackathons-cq1n.vercel.app/"}>
             <p className='mt-5 md:mt-8 ml-10 md:ml-0 text-center hover:text-gray-500'>Resume Builder Web Application</p>
             </Link>
             <Link href={"https://assignment-04-and-05.vercel.app/"}>
             <p className='mt-5 md:mt-4 ml-10 md:ml-0 text-center  hover:text-gray-500'>Zoological Blogs Web</p>
             </Link>
             <Link href={"https://first-next-app-from-figma-templet.vercel.app/"}>
             <p className='mt-5 md:mt-4 ml-10 md:ml-0 text-center  hover:text-gray-500'>Architect Website</p>
             </Link>

        </div>

      </div>


      <div className='flex justify-center border-t-2 border-blue-300 right-0 left-0 text-gray-500 gap-1'>
        <p className='mt-5'><FaRegCopyright /></p>
        <p className='mt-4 text-[14px]'>2024 Syed Shoaib Sherazi | All Right Revesed</p>
      </div>

    </div>
  )
}

export default Footer
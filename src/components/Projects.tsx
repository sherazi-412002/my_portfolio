import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import resume from '@/public/resume.webp';
import zoology from '@/public/zoology.webp';
import architect from '@/public/architect.png';
import todo from '@/public/todo.jpeg';
import wordCounter from '@/public/wordsCounter.jpg';
import currencyConvertor from '@/public/currency.jpg';


function Projects() {

  return (

    <div className='font-serif md:border-[1px] rounded-3xl md:border-blue-300 w-screen md:w-[96%] md:ml-[2%] p-2 md:p-0'>

      <p className='flex items-center justify-center text-fontColors mt-3 font-sans font-bold '>Browse My Recent</p>
      <h1 className='flex justify-center mt-2 text-5xl font-bold font-sans'>Projects</h1>

      <div className='flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>

        {/* card01 */}
      
        <div className='border-[2px] hover:border-[4px] border-blue-300 h-[400px] rounded-3xl w-screen md:w-[400px] md:space-y-1 mt-16 lg:space-y-2 flex flex-col 
          justify-around items-center hover:shadow-lg hover:shadow-fontColors '>

          <div> <Image src={resume} alt='resume' width={1000} height={1000} className='w-auto md:w-[380px] rounded-lg h-[250px]'/></div>
            <p className="text-3xl font-sans font-bold">Resume Builder</p>
          
            <div className=' flex gap-6'>

            <button className='p-3 w-36 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
              font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://github.com/sherazi-412002/Hackathons/tree/main/Hackathon-01/milestone04'}>GitHub</Link></button>
            <button className='p-2 w-36 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
                font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://hackathons-1dgw.vercel.app/'}>Live Demo</Link></button>
  
          </div>
        </div>


        {/* card02 */}

        <div className='border-[2px] hover:border-[4px] border-blue-300 h-[400px] rounded-3xl w-screen md:w-[400px]  md:space-y-1 mt-16 lg:space-y-2 flex flex-col 
          justify-around items-center hover:shadow-lg hover:shadow-fontColors '>
  
          <div> <Image src={zoology} alt='resume' width={1000} height={1000} className='w-auto md:w-[380px] rounded-lg h-[250px]'/></div>
            <p className="text-3xl font-sans font-bold">Zoological Blogs Website</p>
          
            <div className=' flex gap-6'>

            <button className='p-3 w-36 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
              font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://github.com/sherazi-412002/assignment_04-and-05'}>GitHub</Link></button>
            <button className='p-2 w-36 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
                font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://assignment-04-and-05.vercel.app/'}>Live Demo</Link></button>

          </div>  
        </div>


        {/* card03 */}


       <div className='border-[2px] hover:border-[4px] border-blue-300 h-[400px] rounded-3xl w-screen md:w-[400px]  md:space-y-1 mt-16 lg:space-y-2 flex flex-col 
          justify-around items-center hover:shadow-lg hover:shadow-fontColors '>

          <div> <Image src={architect} alt='resume' width={1000} height={1000} className='w-auto md:w-[380px] rounded-lg h-[250px]'/></div>
            <p className="text-3xl font-sans font-bold">Architect Website</p>
          
            <div className=' flex gap-6'>
            <button className='p-3 w-36 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
              font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://github.com/sherazi-412002/first_next_app_from_figma_templet'}>GitHub</Link></button>
            <button className='p-2 w-36 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
                font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://first-next-app-from-figma-templet.vercel.app/'}>Live Demo</Link></button>
          
          </div>  
       </div>

       {/* card04 */}

       <div className='border-[2px] hover:border-[4px] border-blue-300 mb-10 h-[400px] rounded-3xl w-screen md:w-[400px]  md:space-y-1 mt-16 lg:space-y-2 flex flex-col 
        justify-around items-center hover:shadow-lg hover:shadow-fontColors '>
  
          <div> <Image src={wordCounter} alt='resume' width={1000} height={1000} className='w-auto md:w-[380px] rounded-lg h-[250px]'/></div>
            <p className="text-3xl font-sans font-bold">Word Counter</p>
          
            <div className=' flex gap-6'>

            <button className='p-3 w-72 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
              font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://github.com/sherazi-412002/word-counter'}>GitHub</Link></button>
            
          </div>  
       </div>

        {/* card05 */}

       <div className='border-[2px] hover:border-[4px] border-blue-300 mb-10 h-[400px] rounded-3xl w-screen md:w-[400px]  md:space-y-1 mt-16 lg:space-y-2 flex flex-col 
          justify-around items-center hover:shadow-lg hover:shadow-fontColors '>

          <div> <Image src={currencyConvertor} alt='resume' width={1000} height={1000} className='w-auto md:w-[380px] rounded-lg h-[250px]'/></div>
            <p className="text-3xl font-sans font-bold">Currency Convertor</p>
          
            <div className=' flex gap-6'>

            <button className='p-3 w-72 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
              font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://github.com/sherazi-412002/currency-convertor'}>GitHub</Link></button>
         
          </div>  
       </div>

         {/* card06 */}

       <div className='border-[2px] hover:border-[4px] border-blue-300 mb-10 h-[400px] rounded-3xl w-screen md:w-[400px]  md:space-y-1 mt-16 lg:space-y-2 flex flex-col 
          justify-around items-center hover:shadow-lg hover:shadow-fontColors '>

          <div> <Image src={todo} alt='resume' width={1000} height={1000} className=' w-auto md:w-[380px] rounded-lg h-[250px]'/></div>
            <p className="text-3xl font-sans font-bold">Todo App</p>
          
            <div className=' flex gap-6'>

            <button className='p-3 w-72 rounded-full hover:bg-fontColors hover:text-bgColor text-xl border-fontColors border-[1px] 
              font-bold font-sans hover:duration-300 hover:delay-150'><Link href={'https://github.com/sherazi-412002/updated-todo'}>GitHub</Link></button>
      
          </div>  
       </div>        
      </div>

    </div>
  )
}

export default Projects
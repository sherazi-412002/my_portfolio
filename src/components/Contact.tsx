'use client';

import React, { FormEvent, useState } from "react";
import Swal from 'sweetalert2';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";


function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "97e80800-f155-4512-86b8-c34911652ab9",
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }),
          });
    
          const result = await response.json();
    
          if (result.success) {
            Swal.fire({
              title: "Success!",
              text: "Message Sent Succesesfully!",
              icon: "success"
            });
          } else {
            console.error("Error:", result);
          }
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
    
      return (
        <div className="font-serif md:border-[1px] md:border-blue-300 w-auto md:w-[96%] md:ml-[2%] mt-6 rounded-3xl p-4 md:p-0">

            
            <p className='flex items-center justify-center text-fontColors mt-3 font-sans font-bold'>Get In Touch</p>
            <h2 className='flex justify-center mt-2 text-6xl font-bold font-sans'>Contact Me</h2>

            
             <div className="flex md:justify-around flex-col md:flex-row w-auto lg:w-[90%] md:ml-[5%]">
                
                <div className='border-[2px] hover:border-[4px] border-blue-300 h-[500px] rounded-3xl w-auto md:w-[340px] lg:w-[400px] p-4 md:space-y-1 mt-16 lg:space-y-2 flex flex-col 
                  justify-around items-center hover:shadow-lg hover:shadow-fontColors '>

                    <div className="flex flex-col justify-center items-center hover:opacity-50"><Link href={'mailto:syedshoaibsherazi412002@gmail.com'}> <MdEmail size={40}/> </Link>
                    <p className=" text-[14px] md:text-[20px]">syedshoaibsherazi412002@gmail.com</p></div>
                    <div className="flex flex-col justify-center items-center hover:opacity-50"><Link href={'https://www.linkedin.com/in/syed-shoaib-sberazi/'}> <FaLinkedin size={40}/> </Link>
                    <p className="text-xl">LinkedIn Id</p></div>
                    <div className="flex flex-col justify-center items-center hover:opacity-50"><Link href={'https://www.linkedin.com/in/syed-shoaib-sberazi-3638822b4/'}> < FaGithub size={40}/> </Link>
                    <p className="text-xl">Github Id</p></div>


                </div>
                
              
    
                <form onSubmit={handleSubmit} className=' w-auto md:w-80 lg:w-[400px] p-7 rounded-3xl mt-16 hover:shadow-lg hover:shadow-fontColors border-[2px] hover:border-[4px] border-blue-300 '>
                    <h2 className='text-4xl text-center font-bold'>Contact Form</h2>
                    <div className='mt-20px'>
                    <label>Full Name</label>
                    <input type='text'name='name'  value={formData.name} onChange={handleInputChange} className='w-[100%] h-12
                    border-blue-300 border-[4px] rounded-md outline-none p-4 text-[16px] mt-2 text-bgColor' placeholder='Enter Your Name' required />
                    </div>
    
                    <div className='mt-20px'>
                    <label>Email Adress</label>
                    <input type='email' name='email' value={formData.email} onChange={handleInputChange} className='w-[100%] h-12 
                     border-blue-300 border-[4px] rounded-md outline-none p-4 text-[16px] mt-2 text-bgColor' placeholder='Enter Your Email' required />
                    </div>
    
                    <div className='input-box'>
                    <label>Your Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} className='w-[100%] border-blue-300 
                      border-[4px] h-[120px]  resize-none rounded-md outline-none p-4 text-[16px] mt-2 text-bgColor' placeholder='Enter Your Message' required></textarea>
                    </div>
    
                    <button type='submit' className='w-[100%] h-14 hover:bg-fontColors transition text-fontColors hover:text-bgColor font-bold border-[2px] border-blue-300 hover:shadow-md
                      hover:shadow-fontColors mt-6' >Send Message</button>

                </form>

             </div>
             <br />
        </div>
      )
     
}

export default Contact
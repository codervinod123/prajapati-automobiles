import React from 'react'
import { IoHome } from "react-icons/io5";
import { LuLandmark } from "react-icons/lu";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div className='xl:grid xl:grid-cols-2 xl:gap-x-2 lg:grid lg:grid-cols-2 lg:gap-x-2  md:grid md:grid-cols-2 md:gap-y-4 sm:flex sm:flex-col sm:gap-y-4 flex flex-col gap-y-4 my-8 mx-auto w-full max-w-[1080px] min-h-[400px]'>
         
          <div className='px-2 py-4 bg-slate-400'>
              <h1 className='text-xl font-semibold text-gray-700 pb-6'>Contact Us</h1>
              <h1 className='text-xl font-semibold text-gray-700 pb-6 uppercase'>Prajapati Automobiles</h1>

              <div className='max-w-[60%] flex flex-col gap-y-4'>
                 <div className='flex items-center gap-x-4'>
                    <span><IoHome size={"1.2rem"} /></span>
                    <p>Prajapati Automobiles, Ganpati tower</p>
                 </div>
                 <div className='flex items-center gap-x-4'>
                   <span><LuLandmark size={"1.2rem"}/></span>
                   <p className='inline'>Near Bank of Maharashtra, dattani park, thakur Village, kandivali East Mumbai 400101 Maharashtra</p>
                 </div>

                 <div className='flex items-center gap-x-4'>
                  <span> <FaSquarePhone size={"1.2rem"} /></span>
                   <p>9919444771</p>
                 </div>

                 <div className='flex items-center gap-x-4'>
                    <span><MdEmail size={"1.2rem"}/></span>
                    <p>vinodpr737947@gmail.com</p>
                 </div>

                 
              </div>

          </div>

          <div className='px-2 py-4 bg-slate-400'>
               <ContactForm/>
          </div>

    </div>
  )
}

export default ContactUs

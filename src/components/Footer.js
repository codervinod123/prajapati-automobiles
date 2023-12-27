import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import Logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <div className='bg-gray-300 py-8'>
    <div className='w-full max-w-[1080px] grid grid-cols-3 mx-auto '>
          
          <div className='px-2 w-full'>
              <h1 className='font-bold text-gray-700 pb-6'>KEEP IN TOUCH</h1>
              <div className=''> 
                  <ul className='flex gap-x-6'>
                      <li>
                        <IoLogoFacebook size={"1.5rem"} className='text-gray-700'/>
                      </li>
                      <li>
                         <RiTwitterXFill size={"1.5rem"}  className='text-gray-700'/>
                      </li>
                      <li>
                         <BiLogoLinkedinSquare size={"1.5rem"}  className='text-gray-700'/>
                      </li>
                      <li>
                         <RiInstagramFill size={"1.5rem"}  className='text-gray-700'/>
                      </li>
                  </ul>
              </div>
              <div className='py-6'>
                   <img className='w-[165px]' src={Logo}  alt="logo" />
              </div>
              <div className='bg-gray-600 h-[6px] w-[48%]'></div>
          </div>

          <div className='px-2 w-full'>
              <h1 className='font-bold text-gray-700 pb-6'>USEFUL LINKS</h1>
              <div className=''> 
                   <ul className='text-gray-600 '>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Finance Service</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Buy Cars</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Sell Cars</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Contacts</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Happy Customers</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Reviews</li>
                   </ul>
              </div>
          </div>

          <div className='px-2 w-full'>
              <h1 className='font-bold text-gray-700 pb-6'>OUR SERVICES</h1>
              <div className=''> 
                   <ul className='text-gray-600 '>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Finance Service</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Buy Cars</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Sell Cars</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Contacts</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Happy Customers</li>
                      <li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Reviews</li>
                   </ul>
              </div>
          </div>
          
         
          </div>
    </div>
  )
}

export default Footer

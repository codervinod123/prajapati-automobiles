import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import Logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-slate-400 py-8  max-w-[1080px] mx-auto rounded'>
    <div className='w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 mx-auto '>
          
          <div className='px-2 w-full flex flex-col'>
              <h1 className='font-bold text-gray-900 pb-6'>KEEP IN TOUCH</h1>
              <div className=''> 
                  <ul className='flex gap-x-6'>
                      <li>
                      <a target="_blank" href="https://www.facebook.com/prajapatiautomobiles?mibextid=ZbWKwL">
                        <IoLogoFacebook size={"1.5rem"} className='text-gray-700'/>
                      </a>
                      </li>
                      <li>
                      <a target="_blank" href="https://www.linkedin.com/company/prajapati-automobiles/">
                         <RiTwitterXFill size={"1.5rem"}  className='text-gray-700'/>
                      </a>
                      </li>
                      <li>
                      <a target="_blank" href="https://www.linkedin.com/company/prajapati-automobiles/">
                         <BiLogoLinkedinSquare size={"1.5rem"}  className='text-gray-700'/>
                         </a>
                      </li>
                      <li>
                      <a target="_blank" href="https://www.instagram.com/prajapati_automobiles?igshid=MmIzYWVlNDQ5Yg%3D%3D">
                         <RiInstagramFill size={"1.5rem"}  className='text-gray-700'/>
                        </a>
                      </li>
                  </ul>
              </div>
              <div className='py-6'>
                   <Link to="/">
                     <img className='w-[165px]' src={Logo}  alt="logo" />
                   </Link>
              </div>
          </div>

          <div className='px-2 w-full flex flex-col justify-center'>
              <h1 className='font-bold text-gray-900 py-6'>OUR SERVICES</h1>
              <div className=''> 
              <ul className='text-gray-900 '>
                      <Link to="/finance"><li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Finance Service</li></Link>
                      <Link to="/stocks"><li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Buy Cars</li></Link>
                      <Link to="/sellcars"><li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Sell Cars</li></Link>
                   </ul>
              </div>
          </div>

          <div className='px-2 w-full flex flex-col justify-center'>
              <h1 className='font-bold text-gray-900 py-6'>USEFUL LINKS</h1>
              <div className=''> 
                   <ul className='text-gray-900 '>
                      
                      <Link to="/contact"><li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Contacts</li></Link>
                      <Link to="/about"><li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>About Us</li></Link>
                      <Link to="/happy-customers"><li className='cursor-pointer hover:text-gray-900 transition-all duration-300 w-fit'>Reviews</li></Link>
                   </ul>
              </div>
          </div>
          
         
          </div>
    </div>
  )
}

export default Footer

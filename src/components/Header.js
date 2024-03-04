import React, { useState,useEffect } from 'react'
import logo from "../assets/logo.jpg"
// import { PiUserCircleThin } from "react-icons/pi"
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { themeToggler } from '../store/themeSlice'
import { useDispatch } from 'react-redux'
import {BsMoonFill} from "react-icons/bs"
import {CiSun} from "react-icons/ci"

const Header = () => {

     const [theme,setTheme]=useState(true);
    // redux configuration
   
    const dispatch=useDispatch();
    const handleClick=()=>{
          dispatch(themeToggler());
    }


    const themeMode=useSelector((store)=>store.themeSlice.isLightTheme);

    useEffect(()=>{
      setTheme(themeMode);
    },[themeMode])

  return (
    <nav>
      <div className={`flex justify-between items-center px-4 py-2 h-[4.7rem] shadow-lg  ${theme?"bg-white":"bg-gray-900"} transition-all duration-500`}>

        <div className='flex items-center justify-between w-[40%]'>
         <Link to="/">
           <div className='cursor-pointer'>
             <img width={"300px"} src={logo} alt="logo" title='logo' />
            </div>
         </Link>
        </div>



        <div className='flex justify-between items-center gap-6'>

          <div className=''>
            <ul className={`flex gap-6 font-bold ${theme?"text-gray-600":"text-gray-200"}`}>
              <li className='relative group text-black cursor-pointer py-7 transition-all duration-500'>
                 <Link to="/stocks">Buy Car</Link>
                 <div class="absolute w-full h-1 bottom-2 bg-[#f15701] hidden transition-all duration-500 group-hover:block"></div>            
              </li>

              <li className='relative group text-black cursor-pointer py-7 transition-all duration-500'>
                <Link to="/sellcars">Sell Cars</Link>
                 <div class="absolute w-full h-1 bottom-2 bg-[#f15701] hidden transition-all duration-500 group-hover:block"></div>            
              </li>

              <li className='relative group text-black cursor-pointer py-7 transition-all duration-500'>
                <Link to="/contact">Contact Us</Link>
                 <div class="absolute w-full h-1 bottom-2 bg-[#f15701] hidden transition-all duration-500 group-hover:block"></div>            
              </li>
        
             
              <li className='relative group text-black cursor-pointer py-7 transition-all duration-500'>
                 <Link to="/happy-customers">Reviews</Link>
                 <div class="absolute w-full h-1 bottom-2 bg-[#f15701] hidden transition-all duration-500 group-hover:block "></div>            
              </li>

              <li className='relative group text-black cursor-pointer py-7 transition-all duration-500'>
                 <Link to="/gallery">Images</Link>
                 <div class="absolute w-full h-1 bottom-2 bg-[#f15701] hidden transition-all duration-500 group-hover:block "></div>            
              </li>
      

             
            </ul>
          </div>


          <div onClick={()=>handleClick()} className='p-2 pl-2 cursor-pointer hover:bg-gray-200 rounded-full'>
                 {
                  theme?
                 <BsMoonFill
                    size="1.5rem"
                    className='text-black'
                 />
                 : 
                 <CiSun
                  size="1.5rem"
                  className='text-yellow-600'
                 />
                 
               
                 }
              </div>

        </div>


      </div>
    </nav>
  )
}

export default Header

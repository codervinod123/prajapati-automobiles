import React, { useState,useEffect } from 'react'
import logo from "../assets/logo.jpg"
import { PiUserCircleThin } from "react-icons/pi"
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
          <div className='cursor-pointer'>
            <img width={"300px"} src={logo} alt="logo" title='logo' />
          </div>

          
          
        

          {/* <div className=''>
            <input
              type="text"
              placeholder='Search Cars'
              className='border-2 border-gray-300 rounded-full px-4 py-1 focus:outline-none'
            />
          </div> */}
        </div>



        <div className='flex justify-between items-center gap-6'>

          <div className=''>
            <ul className={`flex gap-6 font-bold ${theme?"text-gray-600":"text-gray-200"}`}>
              <li>Buy Car</li>
              <li>Sell Car</li>
              <li>
                Finance
                {/* <Link to="/finance">Finance</Link> */}
              </li>
              <li>Stocks</li>
              <li>Contact us</li>
              <li>Happy Customers</li>
           
              
              
            </ul>
          </div>

          {/* <div className=''>
            <PiUserCircleThin
              size={"2rem"}
              className={`${theme?"text-gray-600":"text-gray-200"}`}
            />
          </div> */}


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

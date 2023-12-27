import React from 'react'
import logo from "../assets/logo.jpg"
import { PiUserCircleThin } from "react-icons/pi"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav>
      <div className='flex justify-between items-center bg-white px-4 py-2 h-[4.7rem] shadow-lg'>

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
            <ul className='flex gap-6 font-bold text-gray-600'>
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

          <div className=''>
            <PiUserCircleThin
              size={"2rem"}
            />
          </div>

        </div>


      </div>
    </nav>
  )
}

export default Header

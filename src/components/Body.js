import React from 'react'
import MainContainer from './Stocks'
import { Outlet } from 'react-router-dom'
import Home from './Home'

const Body = () => {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default Body

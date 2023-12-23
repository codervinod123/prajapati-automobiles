import React from 'react'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default Body

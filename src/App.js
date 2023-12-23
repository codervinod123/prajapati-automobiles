import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import About from './components/About'



const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/stocks",
          element:<MainContainer/>
        },
        {
          path:"/about",
          element:<About/>
        }
      ]
  }
])

const App = () => {
  return (
    <div>
      <Header />
       <RouterProvider router={appRouter}/>
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainContainer from './components/Stocks'
import About from './components/About'
import Buycars from './components/Buycars'
import Sellcars from './components/Sellcars'
import Finance from './components/Finance'
import CustomerReview from './components/CustomerReview'
import Home from './components/Home'
import Stocks from './components/Stocks'
import ContactUs from './components/ContactUs'



const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/stocks",
          element:<Stocks/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/buycars",
          element:<Buycars/>
        },
        {
          path:"/sellcars",
          element:<Sellcars/>
        },
        {
          path:"/finance",
          element:<Finance/>
        },
        {
          path:"/contact",
          element:<ContactUs/>
        },
        {
          path:"/happy-customers",
          element:<CustomerReview/>
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

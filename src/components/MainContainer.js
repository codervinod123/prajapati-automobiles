import React, { useEffect } from 'react'
import { CAR_API } from '../utils/config'
import Cardcontainer from './Cardcontainer';

const MainContainer = () => {

  

  return (
    <div className="w-full max-w-[1080px] mx-auto py-4">
         <div>
            <Cardcontainer/>
         </div>
    </div>
  )
}

export default MainContainer

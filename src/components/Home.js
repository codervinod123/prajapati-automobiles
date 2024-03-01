import React from 'react'
import { GrNext } from "react-icons/gr";
import useCarData from '../customhooks/useCarData';
import { Link } from 'react-router-dom';

const Home = () => {
  const carData=useCarData();
  return (
    <div className='w-full max-w-[1080px] mx-auto py-6'>
        <div>
           <img src="https://marutisuzukitruevaluecdn2.azureedge.net/-/media/feature/truevalue/carouselgallery/homebanner/homesellpocbanner_eng_web.webp?modified=20240220091437" alt="" />
        </div>
        <div className='h-[200px] flex justify-center items-center'>
          <button> <GrNext size={"1.2rem"} className='font-bold'/> </button>
           <div className='w-[100%] h-[90%] flex gap-x-6 '>
              {
                carData.map((data)=>{
                  return(
                   <Link key={carData.id} to={`/vehicle-details/${data.id}`}>
                   <div className='border-[1px] border-gray-400 rounded-md flex flex-col items-center justify-between py-4 cursor-pointer'>
                        <div>
                          <img className='' src={data.without_bg_image.file.absurl} alt={data.variant} />
                        </div>
                        <p className=''>
                          <span>{data.variant}</span>
                        </p>

                    </div>
                   </Link>
                  )
                })
              }
           </div>
           <button className='rotate-180'> <GrNext size={"1.2rem"}/> </button>
        </div>
    </div>
  )
}

export default Home

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
        <div className='h-[200px] flex justify-center items-center py-8'>
          <button> <GrNext  size={"1.2rem"} className='rotate-180'/> </button>
           <div className='w-[100%] h-[90%] flex gap-x-6 justify-center'>
              {
                carData.map((data)=>{
                  return(
                   <Link key={carData.id} to={`/vehicle-details/${data.id}`}>
                   <div className='border-[1px] border-gray-400 rounded-md flex flex-col items-center justify-between py-4 cursor-pointer'>
                        <div>
                          <img width={"150px"} className='' src={data.without_bg_image.file.absurl} alt={data.variant} />
                        </div>
                        <p className='text-orange-600 font-semibold'>
                          <span>{data.variant}</span>
                        </p>

                    </div>
                   </Link>
                  )
                })
              }
           </div>
           <button > <GrNext size={"1.2rem"}/> </button>
        </div>

        <div className='bg-gray-400 py-4 rounded'>
            <h1 className="flex justify-center uppercase text-[22px] font-bold text-gray-900">Welcome to prajapati automobiles</h1>
            <div className='flex justify-center gap-x-8 py-8'>
                <p className='max-w-[40%] text-gray-900 text-[18px]'>Welcome to Prajapati Automobiles, your trusted destination for quality, reliability, and unparalleled customer service in the realm of pre-owned automobiles in India. Established with a passion for connecting discerning buyers with exceptional vehicles, we take pride in being your go-to used car dealership.</p>
                <img width={"300px"} src="https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/42355/xuv700-exterior-front-view-2.jpeg?isig=0&q=80" alt="owner_image" />
            </div>
        </div>

    </div>
  )
}

export default Home

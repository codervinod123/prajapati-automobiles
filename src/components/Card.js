import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";

const Card = ({ data }) => {

  

  return  (
     <div className='shadow-sm rounded-t-md cursor-pointer'>
        <div className=''>
          <img className='bg-gray-400 rounded-t-md' src={data.without_bg_image.file.absurl} alt="" />
        </div>

        <div className='flex flex-col gap-2 px-2 pt-2'>
          <div className='font-bold text-[16px] text-purple-950 gap-1 flex items-center justify-between'>
            <h3 className='flex space-x-2'>
              <span>{data.make_year}</span>
              <span>{data.make}</span>
              <span>{data.variant}</span>
            </h3>
            <FaRegHeart size={"1.5rem"} className='font-bold'/>
          </div>

          <p className='text-[12px]  text-purple-950 flex gap-1'>
            <span className='uppercase'>{ }</span>
            <span className='uppercase'>{data.fuel_type}</span>
            <span className='uppercase'>{data.transmission}</span>
          </p>

          <h3 className='flex justify-between font-bold text-[16px]  text-purple-950'>
            <span>{data.price / 100000} Lakh</span>
            <span className='text-[12px] flex items-center'><LiaRupeeSignSolid/>From {data.emi}/Month</span>
          </h3>

          <div className='h-[1px] bg-gray-400 w-full'></div>

          <h4 className='flex text-[14px] items-center  text-purple-950'><span><CiHeart size={"1.2rem"} /></span>{data.shortlist_count} Shortlisted this car</h4>

        </div>
         
    </div>
  )
}

export default Card;
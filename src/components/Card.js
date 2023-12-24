import React from 'react'
import { CiHeart } from "react-icons/ci";

const Card = ({ data }) => {

  console.log(data);

  return (
    data && <div className='h-[250px] min-h-[200px]  border border-green-400'>
      <div className='px-2 shadow-sm'>
        <div>
          <img src={data.without_bg_image.file.absurl} alt="" />
        </div>

        <div className='flex flex-col gap-2'>
          <div className='font-bold text-[16px] text-blue-900 gap-1 flex items-center justify-between'>
            <h3>
              <span>{data.make_year}</span>
              <span>{data.make}</span>
              <span>{data.model}</span>
            </h3>
            <CiHeart size={"1.7rem"} className='font-bold'/>
          </div>

          <p className='text-[12px] text-blue-900 flex gap-1'>
            <span className='uppercase'>{ }</span>
            <span className='uppercase'>{data.fuel_type}</span>
            <span className='uppercase'>{data.transmission}</span>
          </p>

          <h3 className='flex justify-between font-bold text-[16px] text-blue-900'>
            <span>{data.price / 100000} Lakh</span>
            <span className='text-[12px]'>From {data.emi}/Month</span>
          </h3>
        </div>
         
        

      </div>
    </div>
  )
}

export default Card;
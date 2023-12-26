import React from "react"
import "./global.css";

const Shimmer=()=>{

     const shimmerarray=Array.from({length:36});
    
return(
    <div className='flex flex-wrap gap-8 m-4 justify-center bg-white'>
     {
        shimmerarray.map((data,index)=>{
            return(
                 <div key={index} className="w-full grid grid-cols-3 gap-x-4 gap-y-8">
                    <div className='skeleton h-32 rounded'> </div>
                 </div>
            )
        })
     }
    </div>
)
}


export default Shimmer;
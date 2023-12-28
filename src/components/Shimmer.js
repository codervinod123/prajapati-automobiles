import React from "react"
import "./global.css";

const Shimmer=()=>{

     const shimmerarray=Array.from({length:36});
    
return(
    <div className='w-full grid grid-cols-3 gap-x-4 gap-y-8 '>
     {
        shimmerarray.map((data,index)=>{
            return(
                 <div key={index} className="w-full">
                    <div className='skeleton h-64 rounded'> </div>
                 </div>
            )
        })
     }
    </div>
)
}


export default Shimmer;
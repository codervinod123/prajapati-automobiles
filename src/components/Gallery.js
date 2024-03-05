import React from 'react'

const Gallery = () => {
  const emptyArray=Array.from({length:30});
  console.log(emptyArray);
  return (
    <div className='w-full max-w-[1080px] mx-auto py-6'>
        <div className='flex flex-wrap gap-8'>
        {
           emptyArray.map((item,index)=>{
             return(
              <>
                <div className='h-[100px] w-[120px] bg-gray-400 rounded'>
                    {/* <img src="" alt=""/> */}
                 </div>
              </>
             )
           })
         }
        </div>
    </div>
  )
}

export default Gallery
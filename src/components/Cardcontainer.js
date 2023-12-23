import React,{useEffect,useState} from 'react'
import { CAR_API } from '../utils/config';
import Card from './Card';

const Cardcontainer = () => {

    const [carData,setCarData]=useState([]);

    useEffect(()=>{
        getApiData();
   },[])
 
   const getApiData=async()=>{
         try {
            const data=await fetch(CAR_API);
            const json=await data.json();
            setCarData(json.results);
         } catch (error) {
            console.log("There is some problem in API calling",error);
            return;
         } 
   }

  return (
              <div className='w-full grid grid-cols-3 gap-4'>
                 <Card data={carData[0]}/>
             </div>
  )
}

export default Cardcontainer
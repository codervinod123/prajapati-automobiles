import React,{useEffect,useState} from 'react'
import { CAR_API } from '../utils/config';
import Card from './Card';
import Shimmer from './Shimmer';
// import { useSelector } from 'react-redux';

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

//    redux toggler
   


       return carData.length===0 ? <Shimmer/> :(
              <div className={`w-full xl:grid xl:grid-cols-3 xl:gap-x-4 lg:grid lg:grid-cols-3 lg:gap-x-4 md:grid md:grid-cols-2 md:gap-x-4 sm:grid sm:grid-cols-1 sm:gap-x-4 sm:mx-4 gap-y-8`}>
                 {
                    carData.map((carData)=>{
                        return(
                               <Card key={carData.id} data={carData}/>
                        )
                    })
                 }
             </div>
         )
}

export default Cardcontainer

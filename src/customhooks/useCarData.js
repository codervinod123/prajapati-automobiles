import { useState,useEffect } from "react";
import { CAR_API } from "../utils/config";
const useCarData=()=>{
    
    const [carData,setCarData]=useState([]);

    useEffect(()=>{
        getApiData();
   },[])

 
   const getApiData=async()=>{
         try {
            const data=await fetch(CAR_API);
            const json=await data.json();
            setCarData(json.results.slice(6,12));
         } catch (error) {
            console.log("There is some problem in API calling",error);
            return;
         } 
   }
   return carData;
}

export default useCarData;
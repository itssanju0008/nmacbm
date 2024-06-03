"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SpecialistSchedule from "./component/SpecialistSchedule";
import "./schedule.css";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";


const EventsSpecials = () => {
const [data,setData]=useState(null);
useEffect(()=>{
  const getAllData=async()=>{
    try {
      const res=await authApi.get(`visiting-specialists`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
  getAllData()
},[])

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Visiting Specialist Schedule",
    
  };

  return (
    
  <>

    {/* banner */}

    <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />

    {/* banner */}
     

      <section className="side-space py-6">
         <div className="row">
          {data?.map((row,index)=>
           <SpecialistSchedule key={index} row={row} />
        )}
           
         </div>
      </section>

    </>
  )
}

export default EventsSpecials

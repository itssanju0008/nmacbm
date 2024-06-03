"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import './download.css';
import DownLoadCard from "./component/DownloadCard";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";


const EventsSpecials = () => {
  const [allDown,setAllDown]=useState([]);
  const [filter,setFilter]=useState(null);
  const getAllDown=async()=>{
    try {
      const res=await authApi.get(`downloads`);
      const data=res?.data
      setAllDown(data);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getAllDown();
  },[]);

   const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "DOWNLOADS",
  };

  return (
    <>
    {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
    
     {/* banner */}

      <section className="side-space py-6">
         <div className="row px-0">
            <div className="col-md-12">
                <div className="download ">
                    <h3>FOR YOUR READING PLEASURE</h3>
                    <p>We have created these sales aids just for you to read and download to your mobile devices. You can review them before you visit us or while you wait in our reception area to learn about our other services. You can also print them if you choose. Have suggestions for other sales aids you would like, email us. We will be updating this page over time.</p>
                </div>
            </div>

            <div className="">
              {allDown?.map((row,index)=><DownLoadCard row={row} index={index} key={index}  />)}
            </div>
             
         </div>
      </section>

    </>
  )
}

export default EventsSpecials

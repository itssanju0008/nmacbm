"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EventFillter from "./component/EventFillter"
import Events from "./component/Events";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";


const contentData = [
  { type: 'image', thumbnailUrl: '/all/event.jpg', title: 'Event Title 1' },
  { type: 'video', thumbnailUrl: '/all/event.jpg', videoUrl: 'https://www.youtube.com/embed/video1', title: 'Event Title 2' },
  { type: 'image', thumbnailUrl: '/all/event.jpg', title: 'Event Title 3' },
  { type: 'video', thumbnailUrl: '/all/event.jpg', videoUrl: 'https://www.youtube.com/embed/video2', title: 'Event Title 4' },
  { type: 'image', thumbnailUrl: '/all/event.jpg', title: 'Event Title 5' },
  { type: 'video', thumbnailUrl: '/all/event.jpg', videoUrl: 'https://www.youtube.com/embed/video1', title: 'Event Title 6' },
  { type: 'image', thumbnailUrl: '/all/event.jpg', title: 'Event Title 7' },
  { type: 'video', thumbnailUrl: '/all/event.jpg', videoUrl: 'https://www.youtube.com/embed/video2', title: 'Event Title 8' },
 
  
];

const EventsSpecials = () => {
  const [data,setData]=useState([]);
  const getData=async()=>{
    try {
      const res=await authApi.get(`whats-new`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
useEffect(()=>{
  getData();
},[])
   const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "What's New",
    
  };

  return (
    
  <>

    {/* banner */}

    <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />

    {/* banner */}
 
      <section className="side-space py-6">
        {/* fillter */}
        {/* <EventFillter /> */}
        {/* fillter */}
        <div className="all-common-heading">
          <h3>{`What's New`} </h3>
          <div className="line"></div>
        </div>

        <div className="row mt-4">
          <Events contents={data} />
        </div>
      </section>
    </>
  );
};

export default EventsSpecials;

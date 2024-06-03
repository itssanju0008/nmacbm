"use client";
import React, { useState } from "react";
import Image from "next/image";
import NewsLetterDetails from "./component/NewsLetterDetails";
import './newsletterdetails.css';
import NewsLetterFillter from "../news-letter/component/NewsLetterFillter";
import BannerSection from "../shared/BreadCrum";


const NewsLetterDetail = () => {
  const [filter,setFilter]=useState(null);
  const contentData = [
    { type: 'image', thumbnailUrl: '/all/event.jpg', title:'January 2023 - Medical Newsletter'},
    { type: 'image', thumbnailUrl: '/all/news-2.jpg', title:'Feburary 2023 - Medical Newsletter' },
    { type: 'image', thumbnailUrl: '/all/news-1.jpg', title:'March 2023 - Medical Newsletter'},
    { type: 'image', thumbnailUrl: '/all/news-2.jpg', title:'April 2023 - Medical Newsletter' },
  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "January 2023 - Medical Newsletter ",
    description:`"Stay inspired with our Free newsletters- 
    be the first to hear about deals, news and medical advice."`
  };

  return (
    <>
     {/* banner */}
      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>
     {/* banner */}
  
    

      <section className="side-space py-6">
         {/* filletr */}
          {/* <NewsLetterFillter/> */}
         {/* fillter */}

         <div className="all-common-heading">
          <h3>January 2023 - Medical Newsletter </h3>
          <div className="line"></div>
        </div>
         <div className="row mt-4">
            <NewsLetterDetails contents={contentData} />
         </div>
      </section>

    </>
  )
}

export default NewsLetterDetail;

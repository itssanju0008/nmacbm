"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NewsLetter from "./component/NewsLetter";
import "./newsletter.css";
import NewsLetterFillter from "./component/NewsLetterFillter";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";


const NewsLetters = () => {
  const [allItems, setAllItems] = useState([]);
  const [filter, setFilter] = useState(null);

  const getAllServices = async () => {
    try {
      const res = await authApi?.get(`news-letter`, { params: filter });
      const data = res?.data;
      setAllItems(data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllServices();
  }, [filter]);

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "NEWSLETTERS",
    description: `"Stay inspired with our Free newsletters- 
    be the first to hear about deals, news and medical advice."`,
  };

  return (
    <>
      {/* banner */}
      <BannerSection
        imageUrl={bannerData.imageUrl}
        title={bannerData.title}
        description={bannerData.description}
      />
      {/* banner */}
      <section className="side-space py-6">
        {/* filter */}
        <NewsLetterFillter filter={filter} setFilter={setFilter} />
        {/* filter */}
        <div className="all-common-heading">
          <h3>Newsletter </h3>
          <div className="line"></div>
        </div>
        <div className="row mt-4">
          <NewsLetter contents={allItems} />
        </div>
        
      </section>
    </>
  );
};

export default NewsLetters;

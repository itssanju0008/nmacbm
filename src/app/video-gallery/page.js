"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import VideoCard from "./component/VideoGallery";
import ServicewiseFillter from "./component/ServicewiseFillter";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";

const VideoGallery = () => {
  const [allServices, setAllServices] = useState([]);
  const [filter, setFilter] = useState(null);
  const [videos, setVideos] = useState([]);

  const getAllVideos = async () => {
    try {
      const res = await authApi.get(`video-gallery`, { params: filter });
      setVideos(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllVideos();
  }, [filter]);



  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Video Gallery",
    description: `"Lights, camera , action - As an industry leader, read all
    about how we are transforming lives in Barmuda"`,
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
        {/* fillter */}
        <ServicewiseFillter filter={filter} setFilter={setFilter} />
        {/* fillter */}

        <div className="all-common-heading">
          <h3>Video Gallery </h3>
          <div className="line"></div>
        </div>

        <div className="media-row mt-4">
          {videos?.map((mediaData, index) => (
            <VideoCard key={index} mediaData={mediaData} />
          ))}
        </div>
      </section>
    </>
  );
};

export default VideoGallery;

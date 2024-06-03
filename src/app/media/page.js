"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MediaCard from "./component/MediaCard";
import MediaFillter from "./component/MediaFillter";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";

const Media = () => {
  const [allServices, setAllServices] = useState([]);
  const [filter, setFilter] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [medias, setMedias] = useState([]);
  const getAllServices = async () => {
    try {
      const res = await authApi.get(`services`);
      const data = res?.data;
      setAllServices(
        data?.map((ele) => ({
          label: ele?.name,
          value: ele?.id,
          slug: ele?.slug,
        }))
      );
    } catch (error) {}
  };
  useEffect(() => {
    getAllServices();
  }, []);

  const getAllMedias = async () => {
    try {
      const res = await authApi.get(`media`,{params:filter});
      setMedias(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllMedias();
  }, [filter]);
  
  const mediaDataList = [
    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
      date: "02 / 02 / 2023",
    },

    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
      date: "02 / 02 / 2023",
    },

    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
      date: "02 / 02 / 2023",
    },

    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
      date: "02 / 02 / 2023",
    },

    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
      date: "02 / 02 / 2023",
    },
    // Add more objects as needed
  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "IN THE MEDIA",
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
        {/* filter */}
        <MediaFillter
          allServices={allServices}
          filter={filter}
          setFilter={setFilter}
        />
        {/* filter */}
        <div className="all-common-heading">
          <h3>Media </h3>
          <div className="line"></div>
        </div>

        <div className="media-row mt-4">
          {medias?.map(
            (Data, index) =>
              Data?.image && <MediaCard key={index} mediaData={Data} />
          )}
        </div>
      </section>
    </>
  );
};

export default Media;

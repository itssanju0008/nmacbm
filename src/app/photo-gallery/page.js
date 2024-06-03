"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GalleryCard from "./component/GalleryCard";
import ServicewiseFillter from "./component/ServicewiseFillter";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";

const PhotoGallery = () => {
  const [allServices, setAllServices] = useState([]);
  const [filter, setFilter] = useState(null);
  const [photoGallery, setPhotoGallery] = useState([]);
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

  const getPhotoGallery = async () => {
    try {
      const res = await authApi.get(`photo-gallery`,{params:filter});
      setPhotoGallery(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getPhotoGallery();
  }, [filter]);

  const GalleryList = [
    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
    },

    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
    },

    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
    },

    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
    },

    {
      imageUrl: "/all/blog-1.jpg",
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
    },
    // Add more objects as needed
  ];
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Photo Gallery",
    description: `"Lights, camera , action - As an industry leader, read all
    about how we are transforming  lives in Barmuda"`,
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
          <h3>Photo Gallery </h3>
          <div className="line"></div>
        </div>

        <div className="media-row mt-4">
          {photoGallery?.map(
            (Data, index) =>
              Data?.image && <GalleryCard key={index} mediaData={Data} />
          )}
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;

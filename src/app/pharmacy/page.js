'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./pharmacy.css";
import ImageCard from "../shared/ImageCard";
import { FaMapMarkerAlt } from "react-icons/fa";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";


const Pharmacy = () => {
  const [data,setData]=useState(null);
  const getData=async()=>{
    try {
      const res=await authApi.get(`service/pharmacy`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData();
  },[])
  const PharmacyData = [
    {
      id: 1,
      imgUrl: "/service-img/pharmacy-1.jpg",
    },
    {
      id: 2,
      imgUrl: "/service-img/pharmacy-2.jpg",
    },
   
  ];

  
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Pharmacy",
    description:`"Market Leader In Medical Aesthetics1 If You Are Interested
    In The Latest Technological Services, Certified Staff At
    Affordable Prices, This Is The Place For Your!
    To Look Your Best, You Need The Best!"`

  };

  return (
    <>

     {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>

     {/* banner */}


      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>Pharmacy</h3>
              <div className="line"></div>
            </div>

               <div className="video-row">
                  {data?.photo_gallery?.map((imageData) => (
                    <ImageCard
                      key={imageData.id}
                      imageData={imageData}
                    />
                  ))}
                </div>

            <div className="mt-5 spamedica-info">
              <p className="">
                Northshore Pharmacy Ltd is one of Bermuda&#39;s newest
                pharmacies recently opened by the husband and wife team of
                Jonathan and Jennie Lightbourne.
              </p>
              <p>
                Having recently returned to the island after a 13 year course of
                study and work experience, Jonathan&#39;s preparation in the
                field of Business Process Management and Jennie&#39;s training
                as a Specialist Pharmacist in Medicines Information has
                qualified this couple to effectively serve the Bermuda
                community.
              </p>
              <p>
                Come in and talk to us. We will consult with you about your
                healthcare and medicine related needs.
              </p>
            </div>

            <div className="all-common-heading mb-4 mt-4">
              <h3>Pharmacy Contact Info</h3>
              <div className="line"></div>
            </div>

            <div className="mt-4 list-bg">
              <ul className="icn-list-lg">
                <li>
                  <FaMapMarkerAlt className="map-icon me-3" />
                  7 Northshore Road Devonshire DV01
                </li>
                <li> 296-3240 t ,  296-3243 f </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pharmacy;

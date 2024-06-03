"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ServiceSidebar from "./component/ServiceSidebar";
import VideoCard from "../shared/VideoCard";
import PainManagementCertificate from "./component/PainManagementCertificate";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";


const PainManagement = () => {
  const [data,setData]=useState(null);
  const getData=async()=>{
    try {
      const res=await authApi.get(`service/pain-management`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData();
  },[])
  // for video

  const PainManagementVideo = [
    {
      id: 1,
      title: "PRP ( Platlet Rich Plasma ) Animation",
      videoUrl: "https://www.youtube.com/embed/XQDmuC30_Ac?si=tJafy8V1TtDq-OTh",
      isYouTube: true,
    },
    {
      id: 2,
      title: "NMAC Introducing the DermaFrac Skin Treatments",
      videoUrl: "https://www.youtube.com/embed/VgOuja75uPg?si=_T84IqIPtCLtbh9m",
      isYouTube: true,
    },

  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Pain Management",
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
              <h3>Aesthetics & Anti-Ageing Treatments </h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div>
              <div className="img-border">
                <Image
                  src="/service-img/Pain-Management.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>
            </div>

            <div className="mt-4 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>NMAC Videos </h3>
                <div className="line"></div>
              </div>
              
              <div className="video-3-row">
                  {data?.video_gallery?.map((patientdata) => (
                    <VideoCard key={patientdata.id} patientdata={patientdata} />
                  ))}
                </div>
               
            </div>
            
            <div className="mt-4 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3> Certificates </h3>
                <div className="line"></div>
              </div>
              <PainManagementCertificate />
            </div>


          </div>
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 order-1 order-md-2">
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default PainManagement;

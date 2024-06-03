'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./spamedica_aesthetics.css";
import ImageGalleryCard from "./laser/component/ImageCard";
import VideoCard from "../shared/VideoCard";
import ServiceSidebar from "../shared/ServiceSidebar";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";
import ImageCard from "../shared/ImageCard";



const SpamedicaAesthetics = () => {
  const [data,setData]=useState(null);
  const getData=async()=>{
    try {
      const res=await authApi.get(`service/aesthetics-anti-ageing-treatments`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData();
  },[])
  // for video

  const NmacData = [
    {
      id: 1,
      title: "See How It All Works & All You Can Access!",
      videoUrl: "https://www.youtube.com/embed/qRE27K9PhsA?si=mTZhXfRxjLnBYOJL",
      isYouTube: true,
    },
    {
      id: 2,
      title: "This Is How You Log In & Book Appointments",
      videoUrl: "https://www.youtube.com/embed/qRE27K9PhsA?si=mTZhXfRxjLnBYOJL",
      isYouTube: true,
    },

    {
      id: 3,
      title: "See How It All Works & All You Can Access!",
      videoUrl: "https://www.youtube.com/embed/qRE27K9PhsA?si=mTZhXfRxjLnBYOJL",
      isYouTube: true,
    },
  ];

  //  for gallery
  const certificates = [
    {
      id: 1,
      title: "",
      image: "https://nmac.bm/images/cert-1.png",
    },

    {
      id: 2,
      title: "",
      image: "https://nmac.bm/images/cert-2.png",
    },


  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Spamedica Aesthetics",
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
              <div className="spamedica-info">
                <div className="video-3-row">
                  {data?.result_gallery?.map((imageData) => (
                    <ImageGalleryCard
                      key={imageData.id}
                      imageData={imageData}
                    />
                  ))}
                   {data?.photo_gallery?.map((imageData) => (
                    <ImageGalleryCard
                      key={imageData.id}
                      imageData={imageData}
                    />
                  ))}
                </div>

                {/* view more */}
                <div className="text-end mt-4">
                  {/* Use the correct Link component syntax */}
                  <Link href="/photo-gallery" className="btn btn-skyblue-fill">
                    View More &nbsp;{" "}
                    <FaLongArrowAltRight className="video-right-icon" />
                  </Link>
                </div>
              </div>

              <div className="spamedica-info">
                <p className="mt-4">
                  NMAC is proud to offer a wide range of Aesthetic Services to
                  Bermuda including Microdermabrasion, Hair Restoration, Botox,
                  Vein Treatments (Sclerotheraphy), and Ultrasound Slimming. Be
                  sure to try our Laser Lipo FDA approved treatments for body
                  contouring and circumferential inch loss. Laser Lipo is the
                  latest in laser lipolysis, offering you a way to achieve inch
                  loss and body contouring with no pain, no needles and no down
                  time. In addition we also offer radio frequency skin
                  tightening, which offers amazing results with no surgery. Dr
                  Kyjuan Brown has further enhanced his Practice with the
                  addition of many new services including Chemical Peels, Laser
                  Hair, Spot & Tattoo Removal, and Dermafrac Treatments.
                </p>
              </div>

              <div className="video-section mt-4">
                <div className="all-common-heading mb-4">
                  <h3>NMAC Videos </h3>
                  <div className="line"></div>
                </div>
                <div className="video-3-row">
                  {data?.video_gallery?.map((patientdata) => (
                    <VideoCard key={patientdata.id} mediaData={patientdata} />
                  ))}
                </div>
                {/* view more */}
                <div className="text-end mt-4">
                  <Link href="/video-gallery" className="btn btn-skyblue-fill">
                    View More &nbsp;{" "}
                    <FaLongArrowAltRight className="video-right-icon" />
                  </Link>
                </div>{" "}
              </div>
              <div className="video-section mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Certificates </h3>
                  <div className="line"></div>
                </div>
                <div className="video-3-row">
                  {certificates?.map((imageData,index) => (
                    <div className="media-card"  key={index}>
                    <div className="">
            
                      <Image
                        src={imageData?.image} 
                     
                        width={100}
                        height={100}
                        style={{ width: "100%" }}  />
            
                    </div>
            
                    
                  </div>
                  ))}
                </div>
                {/* view more */}
               
              </div>
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

export default SpamedicaAesthetics;

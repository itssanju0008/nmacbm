'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import './hairrestoration.css';
import ServiceSidebar from "./component/ServiceSidebar";
import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";
import ImageCard from "./component/ImageCard";
import VideoCard from "../shared/VideoCard";

const HairRestoration = () => {
  const [data,setData]=useState(null);
  const getData=async()=>{
    try {
      const res=await authApi.get(`service/hair-restoration`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData();
  },[])
  // video data
  const NmacData = [
    {
      id: 1,
      title: "See How It All Works & All You Can Access!",
      videoUrl: "https://www.youtube.com/embed/L3HqwpSqnSY?si=sjVPIV8iSU-7ErPg",
      isYouTube: true,
    },
    {
      id: 2,
      title: "This Is How You Log In & Book Appointments",
      videoUrl: "https://www.youtube.com/embed/L3HqwpSqnSY?si=sjVPIV8iSU-7ErPg",
      isYouTube: true,
    },

    
  ];

  // image gallery

  const PatientData = [
    {
      id: 1,
      title: 'Medical Hair Restoration',
      imgUrl: "/service-img/spamedica-1.jpg",
    },
    {
      id: 2,
      title: 'Medical Hair Restoration',
      imgUrl: "/service-img/spamedica-2.jpg",
    },
    {
      id: 3,
      title: 'Medical Hair Restoration',
      imgUrl: "/service-img/spamedica-3.jpg",
    },
    {
      id: 4,
      title: 'Medical Hair Restoration',
      imgUrl: "/service-img/spamedica-3.jpg",
    },
    {
      id: 5,
      title: 'Medical Hair Restoration',
      imgUrl: "/service-img/spamedica-3.jpg",
    },
    {
      id: 6,
      title: 'Medical Hair Restoration',

      imgUrl: "/service-img/spamedica-3.jpg",
    },
  ];
  

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Hair Restoration",
    description:`"Market Leader In Medical Aesthetics1 If You Are Interested In
    The Latest Technological Services, Certified Staff At Affordable Prices, This Is The Place For Your! <br/>
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
                    <h3>Hair Restoration
 </h3>
                    <div className="line"></div>
               </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
              <div>
              <div className="spamedica-info">
              <div className="video-3-row">
                  {data?.result_gallery?.map((imageData) => (
                    <ImageCard
                      key={imageData.id}
                      imageData={imageData}

                    />
                  ))}
                </div>
                 {/* view more */}
                 <div className="text-end mt-4">
                  <Link href="/photo-gallery" className="btn btn-skyblue-fill">
                    View More &nbsp;
                    <FaLongArrowAltRight className="video-right-icon" />
                  </Link>
                </div>
                </div>
                <div className="mt-5">
                   <p className="">
                   Dr. Kyjuan H. Brown successfully completed the Bauman Certified HairCoachMD™ Training Program, which educates medical professionals on how to detect and monitor male and female pattern hair loss, perform hair re-growth treatments, as well as provide patients with actionable information and effective preventative treatment options.
</p>
<p>
Since early detection is key to stopping male and female pattern hair loss in its tracks, doctors are often the first line of defense for many men and women. NorthShore Medical & Aestetics Center (NMAC)is proud to announce it is the first medical practice in Bermuda to complete a national training program for early hair loss detection and preventative treatment counseling. Dr. Brown, Medical Director of NMAC recently traveled to Boca Raton, Florida to complete the Bauman Certified HairCoachMD Training Program, led by renowned hair loss pioneer Doctor Alan J. Bauman.
</p>
<p>
&quot;The certification program provided me the information and proven treatment protocols needed to better serve my patients,&quot; said Dr. K. H. Brown. While it may seem obvious to some people how to detect hair loss, you actually have to spot it well before it becomes visible to the naked eye. What patients don&#39;t know is when hair loss becomes visible you would have already lost 50% of your hair volume, making it harder to reverse the process. My staff and I personally underwent training with a new scientific tool called HairCheck that will allow us to track our patients&#39; hair growth and spot problems well before they become noticeable. We also received in-depth information on the latest medical treatments for hair loss, which we&#39;ll now be able to share with both new and existing patients in Bermuda.&quot;
                    </p>
                </div>

                <div className="mt-5">
                <div className="all-common-heading mb-4">
                    <h3>Dr. Brown and Dr. Bauman

 </h3>
                    <div className="line"></div>
               </div>
                <Image src={'/service-img/drbrownwithbuman.png'} alt="Service Image" className="img-style img-fluid" width={600} height={350}  style={{width:'100%',}}/>

                </div>

                <div className="mt-5">
                   <div className="all-common-heading mb-4">
                     <h3>NMAC Videos </h3>
                   <div className="line"></div>
               </div>
                <div className="video-3-row">
                  {data?.video_gallery?.map((patientdata) => (
                    <VideoCard key={patientdata.id} mediaData={patientdata} />
                  ))}
                </div>
               
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 order-1 order-md-2">
               <ServiceSidebar/>
            </div>
        </div>
      </section>
    </>
  );
};

export default HairRestoration;

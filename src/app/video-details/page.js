"use client";
import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import VideoCard from "../video-gallery/component/VideoGallery";
import BannerSection from "../shared/BreadCrum";


const VideoGalleryList = [
    {
      title: "Media Title 1",
      date: "2024-02-05",
      videoUrl: "https://www.youtube.com/embed/aABzrElSNQE?si=MKgvaVj3Ih8Q5YpO",
    },
    {
      title: "Media Title 2",
      date: "2024-02-06",
      videoUrl: "https://www.youtube.com/embed/aABzrElSNQE?si=MKgvaVj3Ih8Q5YpO",
    },

    {
      title: "Media Title 2",
      date: "2024-02-06",
      videoUrl: "https://www.youtube.com/embed/aABzrElSNQE?si=MKgvaVj3Ih8Q5YpO",
    },
    {
      title: "Media Title 2",
      date: "2024-02-06",
      videoUrl: "https://www.youtube.com/embed/aABzrElSNQE?si=MKgvaVj3Ih8Q5YpO",
    },

    // Add more media items as needed
  ];


const VideoDetails = () => {

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Video",
    description:`"Lights, camera , action - As an industry leader, read all
    about how we are transforming lives in Barmuda"`
  };

  return (
    
  <>

    {/* banner */}

    <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>

    {/* banner */}

    

      <section className="side-space py-6">        
        <div className="col-lg-10 m-auto all-common-heading">
          <h3 className="m-auto">Dr. Kyjuan Brown & Dr Amani Flood Explain Covid-19 Long Haul </h3>
          <div className="line" style={{top:'-30px'}}></div>
        </div>

        <div className="row mt-4 mx-0">
           <div className="col-lg-10 col-md-12 m-auto px-0">
           <div className="video-info page-info">
                <iframe
                    width="100%"
                    height="600"
                    src="https://www.youtube.com/embed/aABzrElSNQE?si=MKgvaVj3Ih8Q5YpO"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="img-border"
                ></iframe>

                <div>
                    <div className="post-date">
                      <p className="mb-0"> <FaCalendarAlt className="me-2"/>  07-07-2023 , 14:10:45 </p>
                     
                    </div>
                    <div className="video-details mt-4">
                        <h3 className="sub-common-title">Covid-19 Long Haul Series 1: Dr. Kyjuan Brown & Dr Amani Flood Discuss </h3>

                        <p>Praesent tincidunt ac nulla vel imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis vestibulum enim sit amet cursus. Etiam non nisl ante. Nam dignissim auctor arcu, a maximus erat consequat non. Nunc in egestas sapien, quis fermentum arcu. Nulla tempor dapibus dui et varius. Curabitur dictum interdum condimentum. Nunc sed dui at libero convallis aliquet.

</p>
                    
                    {/* more video */}

                      <div className="video-row mt-4">
                        {VideoGalleryList.map((mediaData, index) => (
                            <VideoCard key={index} mediaData={mediaData} />
                        ))}
                        </div>

                    </div>
                </div>
           </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default VideoDetails;

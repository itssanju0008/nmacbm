'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import VideoCard from '@/app/shared/VideoCard'


const Video = ({data}) => {

  const nextTestSlideVideo = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideTo(swiper.activeIndex + 1, 5000, false);
  };

  const prevTestSlideVideo = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideTo(swiper.activeIndex - 1, 5000, false);
  };

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

    {
        id: 4,
        title: "See How It All Works & All You Can Access!",
        videoUrl: "https://www.youtube.com/embed/qRE27K9PhsA?si=mTZhXfRxjLnBYOJL",
        isYouTube: true,
      },

      {
        id: 5,
        title: "See How It All Works & All You Can Access!",
        videoUrl: "https://www.youtube.com/embed/qRE27K9PhsA?si=mTZhXfRxjLnBYOJL",
        isYouTube: true,
      },

      {
        id: 6,
        title: "See How It All Works & All You Can Access!",
        videoUrl: "https://www.youtube.com/embed/qRE27K9PhsA?si=mTZhXfRxjLnBYOJL",
        isYouTube: true,
      },
  ];
  return (
    <>
      <section className='side-space padding-info pb-0'>
            <div className='col-lg-12 mb-5'>
              <h3 class="service-Common-heading">Video  </h3>
            </div>
            <div className='video-container'>
            <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  
                  navigation={{
                    prevEl: ".swip-video-prev",
                    nextEl: ".swip-video-next",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    300: {
                      slidesPerView: 1.1,
                    },
                    576: {
                      slidesPerView: 1.7,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2.8,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1366: {
                      slidesPerView: 3,
                    },

                    1440: {
                      slidesPerView: 4,
                    },
                  }}
                >
               {data?.video_gallery?.map((patientdata) => (

                  <SwiperSlide key={patientdata.id}>
                    <VideoCard  mediaData={patientdata} />
                    </SwiperSlide>
                 ))}

               <div className="swiper-team-arrow">
                    <div
                      className="swiper-button-prev1 swip-video-prev"
                      onClick={prevTestSlideVideo}
                    >
                      <FaChevronLeft className="testi-icon" />
                    </div>
                    <div
                      className="swiper-button-next1 swip-video-next"
                      onClick={nextTestSlideVideo}
                    >
                      <FaChevronRight className="testi-icon" />
                    </div>
                  </div>
                 </Swiper>
            </div>
      </section>
    </>
  )
}

export default Video

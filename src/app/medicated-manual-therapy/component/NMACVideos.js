"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NmacData = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/XQDmuC30_Ac?si=tJafy8V1TtDq-OTh",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/VgOuja75uPg?si=_T84IqIPtCLtbh9m",
  },
 
];

const NMACVideos = () => {

    const nextTestSlide1= () => {
        const swiper = document.querySelector(".mySwiper1").swiper;
        swiper.slideTo(swiper.activeIndex + 1, 1000, false);
      };
    
      const prevTestSlide1 = () => {
        const swiper = document.querySelector(".mySwiper1").swiper;
        swiper.slideTo(swiper.activeIndex - 1, 1000, false);
      };
    
  return (
    <>
      <div>
        <Swiper
          spaceBetween={16}
            slidesPerView={1}
            navigation={{
                    prevEl: ".swiper-cutmize-prev1",
                    nextEl: ".swiper-cutmize-next1",
                  }}
            modules={[Navigation]}
            slidesPerGroup={1}
            className="mySwiper1"
            breakpoints={{
              300: {
                slidesPerView: 1.2,
              },
              576: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.4,
              },
              992: {
                slidesPerView: 2,
              },
             
              1300: {
                slidesPerView: 2,
              },
            }}
        >
          {NmacData.map((patientdata) => (
            <SwiperSlide key={patientdata.id}>
              <div className="text-center m-auto">
                <iframe
                  title={`${patientdata.id}`}
                  width="100%"
                  height="350"
                  src={patientdata.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="img-style"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}

            <div className="swiper-cutmize-arrow">
                <div
                    className="swiper-cutmize-prev1 swiper-custome-icon"
                    onClick={prevTestSlide1}
                >
                    <FaChevronLeft className="testi-icon" />
                </div>
                <div
                    className="swiper-cutmize-next1 swiper-custome-icon"
                    onClick={nextTestSlide1}
                >
                    <FaChevronRight className="testi-icon" />
                </div>
            </div>
        </Swiper>
      </div>
    </>
  );
};

export default NMACVideos;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";


const PatientData = [
  {
    id: 1,
    imgUrl: "/service-img/spamedica-1.jpg",
  },
  {
    id: 2,
    imgUrl: "/service-img/spamedica-2.jpg",
  },
  {
    id: 3,
    imgUrl: "/service-img/spamedica-3.jpg",
  },
 
];

const SpamedicaImage = () => {

    const nextTestSlide = () => {
        const swiper = document.querySelector(".mySwiper").swiper;
        swiper.slideTo(swiper.activeIndex + 1, 1000, false);
      };
    
      const prevTestSlide = () => {
        const swiper = document.querySelector(".mySwiper").swiper;
        swiper.slideTo(swiper.activeIndex - 1, 1000, false);
      };
    
  return (
    <>
      <div>
        <Swiper
          spaceBetween={15}
            slidesPerView={1}
            navigation={{
                    prevEl: ".swiper-cutmize-prev",
                    nextEl: ".swiper-cutmize-next",
                  }}
            modules={[Navigation]}
            slidesPerGroup={1}
            className="mySwiper"
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
          {PatientData.map((patientdata) => (
            <SwiperSlide key={patientdata.id}>
              <div className="text-center m-auto">
               <Image src={patientdata.imgUrl} alt="Service Image" className="img-style" width={600} height={350} style={{width:'100%',objectFit:'cover'}}/>
              </div>
            </SwiperSlide>
          ))}

            <div className="swiper-cutmize-arrow align-content-center">
                <div
                    className="swiper-cutmize-prev swiper-custome-icon"
                    onClick={prevTestSlide}
                >
                    <FaChevronLeft className="testi-icon" />
                </div>
                <div
                    className="swiper-cutmize-next swiper-custome-icon"
                    onClick={nextTestSlide}
                >
                    <FaChevronRight className="testi-icon" />
                </div>
            </div>
        </Swiper>
      </div>
    </>
  );
};

export default SpamedicaImage;

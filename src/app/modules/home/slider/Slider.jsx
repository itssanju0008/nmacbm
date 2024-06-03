'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderImg from "/public/slider/slider.jpg";
import SliderImg1 from "/public/slider/slider-1.jpg";
import LogoImg from  "/public/all/slider-logo.png";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import "./slider.css";
import "./lineanimation.css";
import Image from "next/image";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import RightStickIcon from "./component/RightStickIcon";

const nextSlide = () => {
  const swiper = document.querySelector(".mySwiper").swiper;
  swiper.slideTo(swiper.activeIndex + 1, 5000, false);
};

const prevSlide = () => {
  const swiper = document.querySelector(".mySwiper").swiper;
  swiper.slideTo(swiper.activeIndex - 1, 5000, false);
};



const Slider = () => {
  return (
    <>
      <RightStickIcon/>

       <section>
        <div className="position-relative">
           <div className="line_wrap line_white">
               <div className="line_item"></div>
               <div className="line_item"></div>
               <div className="line_item"></div>
               <div className="line_item"></div>
               <div className="line_item"></div>
            </div>
        <Swiper
        slidesPerView={1.25}
        spaceBetween={0}
        pagination={{
          type: "progressbar",
        }}
        navigation={{
          nextEl: ".mySwiper-button-next",
          prevEl: ".mySwiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1, 
            spaceBetween: 0,
          },
     
          900: {
            slidesPerView: 1.15, 
            spaceBetween: 0,
          },

          1200: {
            slidesPerView: 1.25, 
            spaceBetween: 0,
          },
         
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="after_slider">
            <Image src={SliderImg} className="img-fluid" alt="slider" />
            <div className="slider-content">
              <p>
                Northshore Medical is multidisciplinary practice that integrates
                a full spectrum of healthcare and wellness programs to the
                people of Bermuda.
              </p>
              <div className="slider-list mt-3  mt-lg-3 mt-xl-4">
                <h3>Family Medicine , Dermatology Cardiology , Rheumatology Hematology , Oncology</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="after_slider">
            <Image src={SliderImg1} className="img-fluid" alt="slider" />
            
            <div className="slider-content-1">
              <p>
                Northshore Medical is multidisciplinary practice that integrates
                a full spectrum of healthcare and wellness programs to the
                people of Bermuda.
              </p>
              <div className="slider-list mt-3  mt-lg-4 mt-xl-4">
              <h3 className="text-right">Family Medicine , Dermatology Cardiology , Rheumatology Hematology , Oncology</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-custom-arrow">
       <div className="swiper-arrow-postion">
        <div className="mySwiper-button-next swipe-btn" onClick={nextSlide}>
          <p className="arrow-text mb-0"> MEDICAL </p> 
          <BiSolidRightArrow  className="arrow-icon move-icon"/> 
          </div>
          <div className="mySwiper-button-prev swipe-btn" onClick={prevSlide}>
            <BiSolidLeftArrow  className="arrow-icon move-icon"/>
            <p className="arrow-text mb-0">AESTHETIC & SPA <br/> SERVICES</p>
          </div>
       </div>
      </div>
       <div className="">
          <div className="slider-logo">
            <Image src={LogoImg} alt="logo" className="img-fluid" />
          </div>
       </div>
        </div>
      </section>
    </>
  )
}

export default Slider

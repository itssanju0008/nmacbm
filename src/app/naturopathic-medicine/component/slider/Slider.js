'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Image from 'next/image';
import "../../../modules/home/banner/banner.css"
import "./slider.css"


const Slider = () => {



  const slides = [
    { id: 1, imageUrl: '/all/naturopathic-medicine-banner.jpg', alt: 'Banner 1' },
    // Add more slides as needed
  ];

  return (
   <section>
        <div>
                <Swiper
                spaceBetween={30}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
                >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className='after_banner after_slider'>
                            <Image src={slide.imageUrl} alt={slide.alt} width={100} height={100} style={{width:'100%', height:'auto'}} />
                            <div className="naturopathic-slider-content">
                              <h2> NATUROPATHIC MEDICINE </h2>
                              <div className="slider-list mt-3  mt-lg-3 mt-xl-4">
                              <p>Naturopathic physicians treat the underlying causes of illness rather than just the symptoms of disease</p>
                              </div>

                              <div className='mt-4 text-center m-auto'>
                               <a className='btn btn-signup' href='https://healow.com/apps/practice/northshore-medical-and-aesthetic-center-us-devonshire-19498?v=2&locale=en' target='_blank'  > BOOK A CONSULTATION </a>
                              </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
              </Swiper>
        </div>
   </section>
  );
};

export default Slider;

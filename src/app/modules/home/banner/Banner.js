
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Image from 'next/image';
import "./banner.css";

const BannerSlider = () => {



  const slides = [
    { id: 1, imageUrl: '/all/banner.jpg', alt: 'Banner 1' },
    { id: 2, imageUrl: '/all/banner.jpg', alt: 'Banner 2' },
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
                        <div className='after_banner'>
                            <Image src={slide.imageUrl} alt={slide.alt} width={100} height={100} style={{width:'100%', height:'auto'}} />
                        </div>
                    </SwiperSlide>
                ))}

                
                </Swiper>
        </div>
   </section>
  );
};

export default BannerSlider;

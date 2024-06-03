'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const NmacMedia = ({ data }) => {
  const nextTestSlide = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideTo(swiper.activeIndex + 1, 1000, false);
  };

  const prevTestSlide = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideTo(swiper.activeIndex - 1, 1000, false);
  };

  return (
    <div>
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-cutmize-prev",
          nextEl: ".swiper-cutmize-next",
        }}
        modules={[Pagination, Navigation]}
        slidesPerGroup={1}
        className="mySwiper"
        pagination={{ clickable: true }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
          1300: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="text-center m-auto img-border">
              <Image
                src={item.imgUrl}
                alt={`Service Image ${item.id}`}
                width={600}
                height={330}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

  
    </div>
  );
};

export default NmacMedia;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/your-video-id-1",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/your-video-id-2",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/your-video-id-3",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/your-video-id-4",
  },
];

const VideoTestimoinal = () => {
  const nextTestSlide = () => {
    const swiper = document.querySelector(".mySwiper1").swiper;
    swiper.slideTo(swiper.activeIndex + 1, 1000, false);
  };

  const prevTestSlide = () => {
    const swiper = document.querySelector(".mySwiper1").swiper;
    swiper.slideTo(swiper.activeIndex - 1, 1000, false);
  };

  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: ".swiper-prev2",
            nextEl: ".swiper-next2",
          }}
          Pagination={true}
          modules={[Pagination, Navigation]}
          className="mySwiper1"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center m-auto">
                <iframe
                  title={`Testimonial ${testimonial.id}`}
                  width="100%"
                  height="350"
                  src={testimonial.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-testimonial-arrow1">
            <div className="swiper-prev2 me-2" onClick={prevTestSlide}>
              <FaChevronLeft className="testi-icon" />
            </div>
            <div className="swiper-next2 ms-2" onClick={nextTestSlide}>
              <FaChevronRight className="testi-icon" />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default VideoTestimoinal;

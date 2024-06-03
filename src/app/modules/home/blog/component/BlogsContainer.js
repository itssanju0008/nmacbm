"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogCard from "./BlogCard";
import "../blog.css";


const BlogsContainer = ({blogs}) => {

  const nextTestSlide = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideTo(swiper.activeIndex + 1, 5000, false);
  };

  const prevTestSlide = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideTo(swiper.activeIndex - 1, 5000, false);
  };


  return (
    <>
      <section className="py-6">
        <div className="side-space">
          <div className="blog-container mb-3 mb-xl-0">
            <div class="">
              <h3 class="mb-4 team-heading">Related Blogs</h3>
            </div>

            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: ".swiper-button-prev1",
                nextEl: ".swiper-button-next1",
              }}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                300: {
                  slidesPerView: 1.2,
                },
                576: {
                  slidesPerView: 1.5,
                },
                700: {
                  slidesPerView: 1.4,
                },
                768: {
                  slidesPerView: 2.5,
                },
                992: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1366: {
                  slidesPerView: 3,
                },
              }}
            >
              {/* Use map to generate SwiperSlides for each team member */}
              {blogs?.map((blogData, index) => (
                <SwiperSlide key={index}>
                  <BlogCard blogData={blogData} />
                </SwiperSlide>
              ))}

              <div className="swiper-team-arrow">
                <div className="swiper-button-prev1" onClick={prevTestSlide}>
                  <FaChevronLeft className="testi-icon" />
                </div>
                <div className="swiper-button-next1" onClick={nextTestSlide}>
                  <FaChevronRight className="testi-icon" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsContainer;

'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../../modules/home/blog/blog.css";
import BlogCard from "@/app/modules/home/blog/component/BlogCard";

const Blog = () => {
  const nextTestSlide = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideTo(swiper.activeIndex + 1, 5000, false);
  };

  const prevTestSlide = () => {
    const swiper = document.querySelector(".mySwiper").swiper;
    swiper.slideTo(swiper.activeIndex - 1, 5000, false);
  };

  const blogDataArray = [
    {
      title: "Five Tips For Staying Hydrated & Healthy",
      imageSrc: "/all/nmac-online-course-square.jpg",
      content:
        "Staying Hydrated is one of the keys to staying healthy. Without adequate hydration our bodes will struggle with general upkeep of the body systems.",
      
    },

    {
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      imageSrc: "/all/nmac-online-course-square.jpg",
      content:
        "Velit laoreet id rhoncus est pellentesque donec ultrices tincidunt.",
      
    },

    {
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      imageSrc: "/all/nmac-online-course-square.jpg",
      content:
        "Velit laoreet id rhoncus est pellentesque donec ultrices tincidunt.",
      
    },

    {
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      imageSrc: "/all/nmac-online-course-square.jpg",
      content:
        "Velit laoreet id rhoncus est pellentesque donec ultrices tincidunt.",
      
    },

    {
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      imageSrc: "/all/nmac-online-course-square.jpg",
      content:
        "Velit laoreet id rhoncus est pellentesque donec ultrices tincidunt.",
      
    },

    {
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      imageSrc: "/all/nmac-online-course-square.jpg",
      content:
        "Velit laoreet id rhoncus est pellentesque donec ultrices tincidunt.",
      
    },
    // Add more blog entries as needed
  ];

  return (
    <>
      <section className="padding-info">
        <div className="side-space">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="">
                 <div class="">
                    <h3 class="mb-4 service-Common-heading">Blog</h3>
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
                      slidesPerView: 1.1,
                    },
                    576: {
                      slidesPerView: 1.6,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2.8,
                    },
                    1024: {
                      slidesPerView: 3.5,
                    },
                    1366: {
                      slidesPerView: 4,
                    },

                    1440: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {blogDataArray.map((blogData, index) => (
                    <SwiperSlide key={index}>
                      <BlogCard blogData={blogData} />
                    </SwiperSlide>
                  ))}

                  <div className="swiper-team-arrow">
                    <div
                      className="swiper-button-prev1"
                      onClick={prevTestSlide}
                    >
                      <FaChevronLeft className="testi-icon" />
                    </div>
                    <div
                      className="swiper-button-next1"
                      onClick={nextTestSlide}
                    >
                      <FaChevronRight className="testi-icon" />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

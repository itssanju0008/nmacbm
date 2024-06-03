'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogCard from "./component/BlogCard";
import "./blog.css";
import InstagramPost from "./component/InstagramPost";
import FacebookPost from "./component/FacebookPost";
import authApi from "@/Api/authApi";

const Blog = () => {
const [blogs,setBlogs]=useState([]);
const getAllBlogs=async()=>{
  try {
    const res=await authApi.get(`blogs`);
    setBlogs(res?.data)
  } catch (error) {
    
  }
}
useEffect(()=>{
  getAllBlogs();
},[])
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
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      imageSrc: "/all/blog-1.jpg",
      content:
        "Velit laoreet id rhoncus est pellentesque donec ultrices tincidunt.",
      
    },

    {
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      imageSrc: "/all/blog-1.jpg",
      content:
        "Velit laoreet id rhoncus est pellentesque donec ultrices tincidunt.",
      
    },

    {
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      imageSrc: "/all/blog-1.jpg",
      content:
        "Velit laoreet id rhoncus est pellentesque donec ultrices tincidunt.",
      
    },
    // Add more blog entries as needed
  ];

  return (
    <>
      <section className="py-6">
        <div className="side-space">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3 mb-lg-0">
              <div className="blog-container mb-3 mb-xl-0">
                
                 <div class="">
                    <h3 class="mb-4 team-heading">Blog</h3>
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

            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="blog-container mb-3 mb-md-0">
                  <div class="">
                    <h3 class="mb-4 team-heading">Find Us On Facebook 
</h3>
                  </div>
                  <FacebookPost/>
              </div>
            </div>

            <div className="col-xl-3  col-lg-6 col-md-6 col-sm-12">
              <div className="blog-container">
                 <div class="">
                    <h3 class="mb-4 team-heading">Find Us On  Instagram
</h3>
                  </div>

                  <InstagramPost/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import "./testimonial.css";
import authApi from "@/Api/authApi";


const Testimonial = () => {
  const [data,setData]=useState([]);
  const getData=async()=>{
    try {
      const res=await authApi.get(`get-testimonial`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
useEffect(()=>{
  getData();
},[])
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
      <section className="bg-dusky pt-6">
        <div className="side-space">
          <div className="col-lg-11 col-md-12 m-auto">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="testimonial-deatils mb-4">
                  <p>What People Says</p>
                  <h3 className="testi-heading">Patient Testimonials</h3>
                </div>
                <div className="reviews-carousel">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={40}
                  navigation={{
                    prevEl: ".swiper-button-prev1",
                    nextEl: ".swiper-button-next1",
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  
                  {data?.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="text-center m-auto">
                        <div className="testimonial-content float-end ">
                          <div className="d-flex gap-2 justify-content-start justify-content-lg-end mb-3">
                            {Array.from({ length: testimonial?.rating }).map(
                              (_, index) => (
                                <span key={index}>
                                  <FaStar className="text-skyblue" />
                                </span>
                              )
                            )}
                          </div>
                          <p className="line-clamp">{testimonial?.description}</p>
                          <div className="d-flex justify-content-start justify-content-lg-end mt-4">
                            <div>
                              <p className="">
                                - {testimonial?.name},{" "}
                                <span className="text-skyblue designation">
                                  {testimonial.designation}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="swiper-testimonial-arrow">
                    <div
                      className="swiper-button-prev1"
                      onClick={prevTestSlide}
                    >
                      <FaChevronLeft className="testi-icon-blue" />
                    </div>
                    <div
                      className="swiper-button-next1"
                      onClick={nextTestSlide}
                    >
                      <FaChevronRight className="testi-icon-blue" />
                    </div>
                  </div>
                </Swiper>
              </div>
              </div>
              <div className="col-lg-5 col-md-12 position-relative">
                <div className="ps-5 position-absolute bottom-0 testi-img">
                  <Image
                    src={"/all/testimonials.png"}
                    width={635}
                    height={460}
                   className="img-fluid"
                    alt="testimonials"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
};

export default Testimonial;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import "../../../modules/home/testimonials/testimonial.css";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    content: "Dr. Katherine Dale is totally what I'm hearing here on this interview with Ms Thang. I am having wonderful results with her treatment. She is an excellent Naturopathic care provider.",
    author: "Pamela Martin",
  },

  {
    id: 2,
    rating: 5,
    content: "Went to her [Dr Dale] regarding my bag and leg. Progress already after 2 visits. Definitely has been worth it.",
    author: "Patient",
  },

  {
    id: 3,
    rating: 3,
    content: "La dr.ssa Fabiani è molto preparata e attenta alle varie problematiche. Ascolta accuratamente il paziente e per me, ormai da 20 anni, ha sempre trovato la giusta cura. La consiglio vivamente!",
    author: "Wilmer Stevenson",
  },
];

const Testimonial = () => {
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
              <div className="col-lg-12 col-md-12">
                <div className="testimonial-deatils mb-4 text-center">
                  <p className="text-center">THEY LOVE US & KNOW NATUROPATHIC MEDICINE WORKS </p>
                  <h3 className="testi-heading text-center">Testimonials</h3>
                </div>
                <div className="reviews-carousel">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={40}
                  navigation={{
                    prevEl: ".swiper-button-prev1",
                    nextEl: ".swiper-button-next1",
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    300: {
                      slidesPerView: 1,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1.3,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                  
                  }}
                >
                  
                  {testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="text-center m-auto">
                        <div className="testimonial-content">
                          <div className="d-flex gap-2 justify-content-center justify-content-lg-center mb-3">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, index) => (
                                <span key={index}>
                                  <FaStar className="text-skyblue" />
                                </span>
                              )
                            )}
                          </div>
                          <p className="text-center">{testimonial.content}</p>
                          <div className="d-flex justify-content-center justify-content-md-center mt-4">
                            <div>
                              <p className="">
                                - {testimonial.author},{" "}
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
                  <div className="swiper-testimonial-arrow justify-content-end justify-content-md-center">
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
           
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
};

export default Testimonial;

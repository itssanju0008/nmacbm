"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TeamCards from "./TeamCards";
import "../team.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGEURL } from "@/Api/apiConfig";

const TeamContainer = ({ doctors }) => {
  const [doctor, setDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReadMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
          <div>
            <h3 className="team-heading">Team</h3>
          </div>
          <div className="mt-5">
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
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
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2.5,
                },
                992: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1366: {
                  slidesPerView: 5,
                },
              }}
            >
              {doctors?.map((member) => (
                <SwiperSlide key={member.id}>
                  <TeamCards
                    member={member}
                    setDoctor={setDoctor}
                    handleReadMoreClick={handleReadMoreClick}
                  />
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
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="text-end">
                <button
                  type="button"
                  className="close text-end"
                  data-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="doctor-info">
                  <div className="row">
                    <div className="col-xxl-3 col-lg-4 col-md-12 col-sm-12">
                      <div className="dr-profile">
                        <Image
                          src={
                            doctor?.image
                              ? `${IMAGEURL}${doctor?.image}`
                              : "/all/dummy.jpg"
                          }
                          alt="Doctor"
                          width={300}
                          height={300}
                          className="img-fluid doct-img"
                          style={{ width: "100%", borderRadius: "0 10px 10px" }}
                        />

                        <div className=" mt-3">
                          <h3 className="dr-name">
                            {doctor?.first_name} {doctor?.last_name}
                          </h3>
                          <p className="item-designation">
                            {doctor?.qualification}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-9 col-lg-8 col-md-12 col-sm-12">
                      <div
                        className="doctor-details"
                        dangerouslySetInnerHTML={{
                          __html: doctor?.profile_data,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamContainer;

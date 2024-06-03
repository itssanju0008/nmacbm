"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";




const PainManagementCertificate = () => {


  return (
    <>
      <div>

          <div className="row mt-4">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="img-border img-zoom">
                    <Image
                      src="./service-img/cert-1.png"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="img-border img-zoom">
                    <Image
                      src="./service-img/cert-2.png"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>

              </div>
      </div>
    </>
  );
};

export default PainManagementCertificate;

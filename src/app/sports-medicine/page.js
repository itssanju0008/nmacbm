"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./sports_medicine.css";
import { IoMdCheckmark } from "react-icons/io";
import BannerSection from "../shared/BreadCrum";
import NutritionTeamCard from "./component/NutritionTeamCard";
import authApi from "@/Api/authApi";
import TeamContainer from "../modules/home/team/component/TeamContainer";

const SportsMedicine = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    try {
      const res = await authApi.get(`service/naturopathic-medicine`);
      setData(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  }, []);
  const [doctors, setDoctors] = useState([
    {
      name: "Dr. Jocelyn Nzabalinda",
      position: "Physiotherapist",
      image: "/team/Jocelyn-small.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Dr. Katherine Dale",
      position: "Naturopathic Doctor, Special Interest in Sports Medicine ",
      image: "/team/Dr-Katherine-Dale.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "  Dr. Fermin Gonzalez",
      position: "Consultant Rheumatologist & Internist ",
      image: "/team/Fermin.jpeg",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ]);
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "SPORTS MEDICINE",
  };

  return (
    <>
      {/* banner */}

      {/* <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title}  /> */}

      {/* banner */}

      <section className="position-relative">
        <div className="after_slider breadcrum-banner">
          <Image
            src={"/slider/slider.jpg"}
            alt="banner"
            width={1920}
            height={500}
            className="img-responsive"
          />

          <div className="breadcrum-title text-center">
            <h3>SPORTS MEDICINE </h3>
          </div>
        </div>
      </section>

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>Sports Medicine </h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="salonb-info">
              <p>
                Sports medicine specialists at NMAC provide a coordinated team
                approach to the evaluation, diagnosis and treatment of injuries
                sustained by amateur, recreational, and professional athletes in
                Bermuda. Sports Medicine’s multidisciplinary team will work
                together to help you return to your sport or return to be active
                in your everyday life for former athletes. With our preventive
                care for current athletes, we want to ensure you can stay fully
                active in your sport at peak performance, so we also
                incorporatea holistic sports medicine program through wellness,
                fitness and performance-enhancement consultations. Sports teams,
                ask us how we can help you.
              </p>

              <div className="row mt-4">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="img-border img-zoom mb-3 mb-lg-0">
                    <Image
                      src="/service-img/Sports-Medicine.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="img-border img-zoom mb-3 mb-lg-0">
                    <Image
                      src="/service-img/Sports-Medicine1.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="img-border img-zoom mb-3 mb-lg-0">
                    <Image
                      src="/service-img/Sports-Medicine2.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="img-border img-zoom mb-3 mb-lg-0">
                    <Image
                      src="/service-img/Sports-Medicine3.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="all-common-heading mb-4">
                <h3>Our Mission</h3>
                <div className="line"></div>
              </div>
              <p>
                To be the sports medicine provider of choice in Bermuda and a
                nationally recognized leader in sports and musculoskeletal
                health.
              </p>
              <p>
                To offer comprehensive, multidisciplinary interventions which
                meet the full range of musculoskeletal-related health and
                medical needs of the population of Bermuda.
              </p>
            </div>

            <div className="mt-4">
              <div className="all-common-heading mb-3">
                <h3>Our Services : </h3>
                <div className="line"></div>
              </div>

              <div className="patient-info salonb-info">
                <h3 className="">
                  Specializing in Musculoskeletal and Sports Medicine{" "}
                </h3>
                <ul className="patient-info-list mt-2">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Physiotherapy
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Injury Rehabilitation
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Conditioning and Performance
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Nutrition and Supplements
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Degenerative Diseases
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Health Monitoring
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Extensive Sports Injury and Musculoskeletal Rehabilitation
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <div className="all-common-heading mb-3">
                <h3>Therapies We Offer </h3>
                <div className="line"></div>
              </div>
              <div className="patient-info ">
                <ul className="patient-info-list">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Pharamacological
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Regenerative Medicine including Plasma Rich Platelet (PRP)
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <div className="all-common-heading mb-3">
                <h3>Injection therapies</h3>
                <div className="line"></div>
              </div>
              <div className="patient-info ">
                <ul className="patient-info-list ">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Cryotherapy
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Low Level Laser Therapy (LLLT)
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Pain Management
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    PRP Injections protein rich plasma
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Cortisone injections
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Prolo therapy
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Hyaluronic acid
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Extra corporal shockwave therapy
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              {data?.doctors?.length > 0 && (
                <TeamContainer doctors={data?.doctors} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SportsMedicine;

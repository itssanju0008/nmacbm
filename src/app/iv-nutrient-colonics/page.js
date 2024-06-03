"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import "./iv_nutrient.css";
import VideoCard from "../shared/VideoCard";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";

const IvNutrient = () => {
  const [data,setData]=useState([]);
const getAllData=async()=>{
  try {
    const res=await authApi.get(`service/iv-nutrient-infusions-colonics`);
    setData(res?.data)
  } catch (error) {
    
  }
}
useEffect(()=>{
  getAllData();
},[])
  const IvNutrientData = [
    {
      id: 1,
      title: "IV Myers Cocktail Dr Brown ",
      videoUrl: "https://www.youtube.com/embed/alpBhktSmBI?si=5DstaRdRVg0Bf6p7",
      isYouTube: true,
    },
    {
      id: 2,
      title: "IV Myers Cocktail Dr Brown ",

      videoUrl: "https://www.youtube.com/embed/iH50TtMzUS8?si=ocqYF7Sa5zCaBAUS",
      isYouTube: true,
    },
    {
      id: 3,
      title: "IV Myers Cocktail Dr Brown ",

      videoUrl: "https://www.youtube.com/embed/8W0gTIx_Opk?si=jkbhr1cqKnKLHQep",
      isYouTube: true,
    },
    {
      id: 4,
      title: "IV Myers Cocktail Dr Brown ",

      videoUrl: "https://www.youtube.com/embed/8W0gTIx_Opk?si=jkbhr1cqKnKLHQep",
      isYouTube: true,
    },
    {
      id: 5,
      title: "IV Myers Cocktail Dr Brown ",

      videoUrl: "https://www.youtube.com/embed/8W0gTIx_Opk?si=jkbhr1cqKnKLHQep",
      isYouTube: true,
    },
    {
      id: 6,
      title: "IV Myers Cocktail Dr Brown ",

      videoUrl: "https://www.youtube.com/embed/8W0gTIx_Opk?si=jkbhr1cqKnKLHQep",
      isYouTube: true,
    },
    {
      id: 7,
      title: "IV Myers Cocktail Dr Brown ",

      videoUrl: "https://www.youtube.com/embed/8W0gTIx_Opk?si=jkbhr1cqKnKLHQep",
      isYouTube: true,
    },
    {
      id: 8,
      title: "IV Myers Cocktail Dr Brown ",

      videoUrl: "https://www.youtube.com/embed/8W0gTIx_Opk?si=jkbhr1cqKnKLHQep",
      isYouTube: true,
    },
  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "IV NUTRIENT INFUSIONS & COLONICS",

  };

  return (
    <>

     {/* banner */}
      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
     {/* banner */}
   

      <section className="side-space py-6">
        <div className="row">
          <div className="text-start text-sm-end mb-3 mb-md-0">
            <Link
              className="btn bg-skyblue  px-5"
              href="https://booking.appointy.com/NMACBDA"
              target="_blank"
            >
              {" "}
              Book Today{" "}
            </Link>
          </div>
          <div className="all-common-heading mb-4 ">
            <h3> Myers Cocktail </h3>
            <div className="line"></div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="iv_nutrient">
              <p>
                Myers Cocktail is an infusion of multiple vitamins and minerals,
                including B vitamins, vitamin C, calcium and magnesium. This
                nutrient cocktail is injected into the body via IV. This
                cocktail was named for the late John Myers, M.D. who designed it
                to reduce the symptoms of a host of medical ailments. He used it
                to treat symptoms of chronic conditions such as Asthma,
                Fibromyalgia, chronic fatigue, and migraines. Other conditions
                that have responded positively to the Myers&apos; cocktail
                treatment include muscle spasms, pain, allergies, depression,
                and sinus and respiratory tract infections.
              </p>
              <p>
                <b>Other Benefits: </b>
              </p>
              <div className="patient-info">
                <ul className="patient-info-list mt-3">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Restores the body
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Provide higher doses of vitamins with better absorption
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Helps with nutrient deficiency
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Immune boosting
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Take it to help once you start to experience flu-like
                    symptoms
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Many patients have immediate results (results may vary for
                    every patient)
                  </li>
                </ul>
              </div>
              <p className="my-3">
                {" "}
                We recommend clients get this cocktail monthly or quarterly to
                help!
              </p>
              <div className="img-border">
                <Image
                  src="/service-img/cocktail.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>
            </div>

            <div className="mt-5">
              <div>
                <div className="all-common-heading mb-4">
                  <h3> Other Drip Cocktail</h3>
                  <div className="line"></div>
                </div>

                <div className="img-border">
                  <Image
                    src="/service-img/iv-nutrients-menu.png"
                    className="img-fluid"
                    width={400}
                    height={600}
                    style={{ height: "auto", width: "100%" }}
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 iv_nutrient">
              <div>
                <div className="all-common-heading mb-4">
                  <h3> Hydrotheraphy</h3>
                  <div className="line"></div>
                </div>

                <p>
                  Colon hydrotherapy, is a procedure done by a practitioner, who
                  streams gallons of water into your body through a tube
                  inserted into your rectum. Though research is lacking,
                  there&apos;s nothing to support a colonic&apos;s effectiveness
                  as a way of promoting better health.
                </p>

                <div className="img-border">
                  <Image
                    src="/service-img/hydrotherapy.jpg"
                    className="img-fluid"
                    width={400}
                    height={600}
                    style={{ height: "auto", width: "100%" }}
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="all-common-heading mb-4">
                <h3>Myers Cocktail Videos And Colon Hydrotheraphy Videos</h3>
                <div className="line"></div>
              </div>
              <div className="video-row">
                {data?.video_gallery?.map((patientdata) => (
                  <VideoCard key={patientdata.id} mediaData={patientdata} />
                ))}
              </div>
              {/* view more */}
              <div className="text-end mt-4">
                <Link href="/video-gallery" className="btn btn-skyblue-fill">
                  View More &nbsp;{" "}
                  <FaLongArrowAltRight className="video-right-icon" />
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IvNutrient;

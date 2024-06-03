"use client";
import Image from "next/image";
import "./about.css";
import AboutInfo from "./component/AboutInfo";
import BannerSection from "../shared/BreadCrum";
import { useEffect, useState } from "react";
import authApi from "@/Api/authApi";

const AboutUs = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await authApi.get(`about-us`);
      setData(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "NORTHSHORE & MEDICAL AESTHETICS CENTER",
    description: `"Providing compassionate and efficient care  to patients is at the core of all our efforts"`,
  };

  return (
    <>
      {/* banner */}

      <BannerSection
        imageUrl={bannerData.imageUrl}
        title={bannerData.title}
        description={bannerData.description}
      />

      {/* banner */}

      <section className="side-space">
        <AboutInfo data={data} />
      </section>
    </>
  );
};

export default AboutUs;

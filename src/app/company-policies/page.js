'use client'
import Image from "next/image";
import "./company_policies.css"
import CompnayPolice from "./component/CompnayPolice";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";
import { useEffect, useState } from "react";

const CompnayPolicies = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await authApi.get(`company-policy`);
      setData(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Company Policies",
    description:`"Providing compassionate and efficient care  to patients is at the core of all our efforts"`
  };

  return (
    <>
       {/* banner */}

       <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description} />

       {/* banner */}

       <section className="side-space">
          <CompnayPolice data={data} />
       </section>
    </>
  )
}

export default CompnayPolicies;

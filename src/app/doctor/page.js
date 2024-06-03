"use client";
import React, { useEffect, useState } from "react";
import "./doctor.css";
import DoctorCard from "./components/DoctorCard";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const getAllDoctors = async () => {
    try {
      const res = await authApi.get(`doctors`);
      setDoctors(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllDoctors();
  }, []);
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "DOCTORS",
  };
  return (
    <>
      {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />

      {/* banner */}

      <section className="side-space py-6">
        <div>
          <div className="all-common-heading mb-4">
            <h3>Physicians & Providers</h3>
            <div className="line"></div>
          </div>
          <div className="doctor-list">
            {doctors?.map(
              (row, index) =>
                row?.work_area == "Physicians & Providers" && (
                  <div className="" key={row?.id}>
                    <DoctorCard doctor={row} />
                  </div>
                )
            )}
          </div>
        </div>

        <div className="mt-4">
          <div className="all-common-heading mb-4">
            <h3>Laboratory</h3>
            <div className="line"></div>
          </div>
          <div className="doctor-list">
            {doctors?.map(
              (row, index) =>
                row?.work_area == "Laboratory" && (
                  <div className="" key={row?.id}>
                    <DoctorCard doctor={row} />
                  </div>
                )
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="all-common-heading mb-4">
            <h3>Administration</h3>
            <div className="line"></div>
          </div>
          <div className="doctor-list">
            {doctors?.map(
              (row, index) =>
                row?.work_area == "Administration" && (
                  <div className="" key={row?.id}>
                    <DoctorCard doctor={row} />
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctor;

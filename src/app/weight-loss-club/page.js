"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './weight-loss.css';
import Weightloss from "./component/WeightLoss";
import BLeanWeightLossClub from "./component/BLeanWeightLossClub";
import HCGJumpStartProgram from "./component/HCGJumpStartProgram";
import MedicalWeightLossProgram from "./component/MedicalWeightLossProgram";
import AccessGym from "./component/AccessGym";
import BannerSection from "../shared/BreadCrum";


const WeightLoss = () => {
  const [activeTab, setActiveTab] = useState("weightloss");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Weight Loss ",
    
  };

  return (
    
  <>

    {/* banner */}

    <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />

    {/* banner */}
   

      <section className="side-space py-6">
        <div className="">
          <ul className="nav nav-pills" role="tablist">

            <li className="nav-item service-nav-item">
             <Link
                className={`nav-link btn-book px-2 ${activeTab === "weightloss" ? "active" : ""}`}
                onClick={() => handleTabChange("weightloss")}
                href="#weightloss"
              >
                Weight Loss
              </Link>
            </li>
            <li className="nav-item service-nav-item">
              <Link
                className={`nav-link btn-book px-2 ${activeTab === "b-lean-weightloss" ? "active" : ""}`}
                onClick={() => handleTabChange("b-lean-weightloss")}
                href="#b-lean-weightloss"
              >
                B-Lean Weight Loss Club
              </Link>
            </li>
            <li className="nav-item service-nav-item">
              <Link
                className={`nav-link btn-book ${activeTab === "hcg" ? "active" : ""}`}
                onClick={() => handleTabChange("hcg")}
                href="#hcg"
              >
               HCG Jump Start Program
              </Link>
            </li>
            <li className="nav-item service-nav-item">
              <Link
                className={`nav-link btn-book ${activeTab === "medical" ? "active" : ""}`}
                onClick={() => handleTabChange("medical")}
                href="#medical"
              >
               Medical Weight Loss Program
              </Link>
            </li>

            <li className="nav-item service-nav-item">
              <Link
                className={`nav-link btn-book ${activeTab === "gym" ? "active" : ""}`}
                onClick={() => handleTabChange("gym")}
                href="#gym"
              >
               Access Gym
              </Link>
            </li>
          </ul>

          {/* Tab panes */}
          <div className="tab-content mt-5">

          <div
              id="weightloss"
              className={`tab-pane ${
                activeTab === "weightloss" ? "active" : ""
              }`}
            >

                <div className="">
                    <Weightloss/>
                </div>
              
            </div>
            <div
              id="b-lean-weightloss"
              className={`tab-pane ${
                activeTab === "b-lean-weightloss" ? "active" : ""
              }`}
            >
              <div>
                 <BLeanWeightLossClub/>
              </div>
             
            </div>
            <div
              id="hcg"
              className={`tab-pane ${
                activeTab === "hcg" ? "active" : "fade"
              }`}
            >
              <div>
                 <HCGJumpStartProgram/>
              </div>
            </div>
            <div
              id="medical"
              className={`tab-pane ${
                activeTab === "medical" ? "active" : "fade"
              }`}
            >
              <div>
                <MedicalWeightLossProgram/>
              </div>

            </div>

            <div
              id="gym"
              className={`tab-pane ${
                activeTab === "gym" ? "active" : "fade"
              }`}
            >
              <div>
                 <AccessGym/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeightLoss;

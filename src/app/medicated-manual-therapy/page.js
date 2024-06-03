"use client";
import React from "react";
import Image from "next/image";
import ServiceSidebar from "./component/ServiceSidebar";
import NMACVideos from "./component/NMACVideos";
import PainManagementCertificate from "./component/PainManagementCertificate";
import BannerSection from "../shared/BreadCrum";



const MedicatedManualTherapy = () => {

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: " Medicated Manual Therapy",
    description:`"Market Leader In Medical Aesthetics1 If You Are Interested
    In The Latest Technological Services, Certified Staff At
    Affordable Prices, This Is The Place For Your! <br />
    To Look Your Best, You Need The Best!"`

  };

  return (
    <>

     {/* banner */}
      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>
     {/* banner */}


      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>Medicated Manual Therapy

</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-lg-9 col-md-7 col-sm-12">
             <div className="spamedica-info">
              
              <p>Manual therapy, or manipulative therapy, is a physical treatment used to treat musculoskeletal pain and disability; it most commonly includes kneading and manipulation of muscles, joint mobilization and joint manipulation.

Dr. Morris uses her hands along with a special mixture of oils and liniments to relax pain-causing areas of the body.

Manual therapy can be helpful for the treatment of joints that lack adequate mobility and range of motion. This can cause discomfort, pain, and a dysfunction in function, posture, and movement. Manual therapy can help restore mobility to stiff joints and reduce muscle tension in order to allow you to regain their normal movement and function without pain. There is available evidence on the effectiveness of spinal manipulation and mobilisation for low back pain, cervicogenic headache, neck pain, thoracic pain, and for several extremity joint conditions. Massage has also been shown to be effective in adults with chronic low back and neck pain.</p>
            </div>

            <div className="mt-5">
              <div className="all-common-heading mb-4">
                <h3>NMAC Videos </h3>
                <div className="line"></div>
              </div>
              <NMACVideos />
            </div>
            
            <div className="mt-5">
              <div className="all-common-heading mb-4">
                <h3> Certificates </h3>
                <div className="line"></div>
              </div>
              <PainManagementCertificate />
            </div>


          </div>
          <div className="col-lg-3 col-md-5 col-sm-12">
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicatedManualTherapy;

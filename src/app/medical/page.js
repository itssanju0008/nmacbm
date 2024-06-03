import React from "react";
import Image from "next/image";
import "./medical.css";
import MedicalCard from "./component/MedicalCard";

import BannerSection from "../shared/BreadCrum";


const Medical = () => {
  const medicalSpecialties = [
    {
      title: "Family Medicine",
      services: [
        "Annual Physicals",
        "Blood Test Results",
        "Allergy Testing Consultations",
        "Specialist Referrals",
        "General Medical Visits",
      ],
    },

    {
      title: "Dermatology",
      services: [
        "Treatment of Eczema and various skin conditions ",
        "Acne Treatment",
        "Scar Treatment",
        "Keloid Treatment",
        "Aesthetic Consultations",
      ],
    },

    {
      title: "Cardiology",
      services: [
        "Cardiology Consultations with Dr. Ofer Sagiv",
        "Vascular Ultrasounds",
        "Holter Monitoring",
        "Blood Pressure Monitoring",
      ],
    },

    {
      title: "Rheumatology",
      services: ["Rheumatology Consultations with Dr. Viviane Bunin"],
    },

    {
      title: "Hematology/Oncology ",
      services: [
        "Telemedicine Hematology & Oncology Consultations with Dr. Amit Mehta ",
      ],
    },
  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "MEDICAL",
    description:`"To get the right care , you need the right doctor- you have
    come to the right place."`

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
              <h3>MEDICAL </h3>
              <div className="line"></div>
            </div>
            <div className="medical-portal">
              <p>
                Northshore Medical is multidisciplinary practice that integrates
                a full spectrum of healthcare and wellness programs to the
                people of Bermuda. If you want certified and caring doctors and
                staff, coupled with affordable prices, high-quality healthcare
                and a relaxing facility with ample parking then you have come to
                the right place. Our staff believes in continuous education and
                are dedicated to always providing you with the latest medical
                education and technology. We are committed to excellence in
                healthcare!
              </p>
              <div className="row mt-5 justify-content-center">
                {medicalSpecialties.map((specialty, index) => (
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12" key={index}>
                    <MedicalCard data={specialty} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Medical;

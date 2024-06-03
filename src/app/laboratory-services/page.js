"use client";
import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import "./laboratory_services.css";
import BannerSection from "../shared/BreadCrum";


const LaboratoryServices = () => {

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Laboratory Services",

  };

  return (
    <>

     {/* banner */}
      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
     {/* banner */}

    

      <section className="side-space py-6">
        <div>
          <div className="all-common-heading mb-4">
            <h3>WE OFFER FULL LABORATORY SERVICES
</h3>
            <div className="line"></div>
          </div>

          <div className="iv_nutrient">
            <p>
            We are committed to accurately and efficiently providing test results for our patients. We know you have many options, but if you are
             looking for a full laboratory service for your convenience, you have come to the right place. Testing includes but are not limited to:
            </p>

            <ul className="patient-info-list">
              <li>
                <IoMdCheckmark className="me-3 link-text arrow-size" />
                Blood testing
              </li>
              <li>
                <IoMdCheckmark className="me-3 link-text arrow-size" />
                Food and Environmental allergy testing
              </li>
              <li>
                <IoMdCheckmark className="me-3 link-text arrow-size" />
                Hormone testing
              </li>

              <li>
                <IoMdCheckmark className="me-3 link-text arrow-size" />
                Urine testing
              </li>
              <li>
                <IoMdCheckmark className="me-3 link-text arrow-size" />
                Saliva testing
              </li>
           
            </ul>

          
          </div>

          <div className="mt-3 mt-md-5">
            <div className="all-common-heading mb-4">
              <h3>
              NORTHSHORE LAB EXPRESS
              </h3>
              <div className="line"></div>
            </div>

            <div className="labpratory-image row my-3">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="rounded mb-3 mb-md-0" style={{width:'100%',border: '8px solid #e0ecf8'}}>
                        <Image src={'/service-img/laboratory.jpg'} alt="iamge" width={600} height={300} className="img-fluid" style={{width:'100%'}}/>

                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="rounded" style={{width:'100%',border: '8px solid #e0ecf8'}}>
                        <Image src={'/service-img/laboratory-requisitions.jpg'} alt="iamge" width={600} height={300} className="img-fluid" style={{width:'100%'}}/>

                    </div>
                </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="all-common-heading mb-4">
              <h3>
              WE ARE A CERTIFIED LAB

              </h3>
              <div className="line"></div>
            </div>

            <div className="labpratory-image my-3">
               <div className="col-lg-6 col-md-12">
                  <Image src={'/service-img/laboratory-accreditation.jpg'} alt="iamge" width={600} height={300} className="img-fluid" style={{width:'100%'}}/>
               </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default LaboratoryServices

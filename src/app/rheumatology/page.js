import React from "react";
import Image from "next/image";
import "./rheumatology.css";
import { IoMdCheckmark } from "react-icons/io";
import BannerSection from "../shared/BreadCrum";


const Rheumatology = () => {

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Rheumatology",
   
  };

  return (
    <>

     {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />

     {/* banner */}
     

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>Rheumatology</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="salonb-info">
              <p>
                Rheumatology is a{" "}
                <b>
                  {" "}
                  branch of medicine devoted to the diagnosis and therapy of
                  rheumatic diseases
                </b>
                . Rheumatologists deal mainly with immune-mediated disorders of
                the musculoskeletal system, soft tissues, autoimmune diseases,
                vasculitides, and inherited connective tissue disorders.
              </p>

              <div className="col-lg-12 col-md-12 col-sm-12 mt-3 mb-3">
                <div className="img-border img-zoom">
                  <Image
                    src="/service-img/rheumatology-dr.gif"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    alt="image"
                  />
                </div>
              </div>

              <p>
                Our Rheumatologists at NMAC work in a team environment to
                provide{" "}
                <b>
                  {" "}
                  diagnosis and treatments for autoimmune and inflammatory
                  diseases{" "}
                </b>{" "}
                that primarily affect the body&apos;s musculoskeletal system —
                joints, muscles, tendons, ligaments. These conditions are known
                collectively as systemic rheumatic diseases.
              </p>
              <p className="text-skyblue">
                <b>Have your Referrals sent to NMAC!</b>
              </p>
            </div>
            <div className="mt-4">
              <div className="all-common-heading mb-3">
                <h3>Some Procedures</h3>
                <div className="line"></div>
              </div>

              <div className="patient-info salonb-info">
                <ul className="patient-info-list mt-2">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Lumbar punctures
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Bursal injections
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Joint injections
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Joint aspiration
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <div className="all-common-heading mb-3">
                <h3>Our Team : </h3>
                <div className="line"></div>
              </div>

              <div className="img-border img-zoom">
                <Image
                  src="/service-img/dr_fermin.jpg"
                  width={300}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                  alt="image"
                />
              </div>

              <div>
                <h3 className="my-4 sub-common-title">
                  About Dr. Fermin Gonzalez, MD
                </h3>

                <div className="salonb-info">
                  <p>
                    Dr. Fermin Gonzalez is from in Venezuela, South America. Dr.
                    Gonzalez obtained his Bachelor of Medicine, Bachelor of
                    Surgery(MBBS)in 2002 from the University of Carabobo,
                    Venezuela. In 2007, Dr. Fermin pursued a specialty degree in
                    Internal Medicine at the University of Carabobo Medical
                    School. Then obtained a specialization Rheumatology in 2013
                    from the National Centre of Rheumatic Disease based in the
                    Caracas University Hospital, Central University of
                    Venezuela, which is the national centre for referrals for
                    those with rheumatic diseases. Dr. Gonzalez gained
                    international experience while working in Nigeria, Africa
                    for 1 year and the Republic of Maldives for the last 3
                    years.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-3">
                  <h3>
                    {" "}
                    Dr. Gonzalez will see patients regarding a wide range of
                    medical conditions, including but not limited to
                  </h3>
                  <div className="line"></div>
                </div>

                <div className="patient-info d-block d-md-flex gap-5">
                  <ul className="patient-info-list mt-2">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Rheumatoid Arthritis
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Psoriatic Arthritis
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Scleroderma
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Ankylosing Spondylitis
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Periodic Fever Syndromes
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Vasculitis
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Myositis
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Gout
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Osteoarthritis
                    </li>
                  </ul>

                  <ul className="patient-info-list mt-2 ms-0 ms-md-5">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Sjogren’s Syndrome
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Sarcoidosis
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Lyme disease
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Osteomyelitis
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Back pain
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Serum sickness
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Reactive arthritis
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Kawasaki disease
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Reflex sympathetic dystrophy
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="all-common-heading mb-3">
                <h3>Management of childhood rheumatic diseases:</h3>
                <div className="line"></div>
              </div>
              <div className="patient-info ">
                <ul className="patient-info-list">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Juvenile idiopathic arthritis
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Systemic sclerosis
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Morphea
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    juvenile dermatomyositis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rheumatology;

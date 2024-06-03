'use client'
import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import "../../modules/home/team/team.css";
import "../../doctor/doctor.css"
import { IoIosArrowRoundForward, IoMdCheckmark } from "react-icons/io";

const NutritionTeamCard = ({ doctor, onReadMoreClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleReadMoreClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="our-team mb-3">
        <div className="pic">
          <Image
            src={doctor.image}
            alt={`team Member - ${doctor.name}`}
            height={300}
            width={300}
            className="img-fluid"
          />
          <ul className="social">
            <li>
              <Link href={doctor.social.facebook}>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href={doctor.social.instagram}>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href={doctor.social.linkedin}>
                <CiLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div className="team-content">
          <h3 className="title">{doctor.name}</h3>
          <span className="post">{doctor.position}</span>
          <Link href="#" className="read-more mt-2" onClick={handleReadMoreClick}>
            Read More <IoIosArrowRoundForward />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="text-end">
                <button
                  type="button"
                  className="close text-end"
                  data-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="doctor-info">
                  <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-12">
                     <div className="dr-profile"> 
                     <Image
                        src={"/all/team.jpg"}
                        alt="Doctor"
                        width={300}
                        height={300}
                        className="img-fluid doct-img"
                        style={{ width: "100%", borderRadius: "0 10px 10px" }}
                      />
                      <div className=" mt-3">
                        <h3 className="dr-name">Dr. Kyjuan H Brown</h3>
                        <p className="item-designation">
                          MD, MH, DPD, CCFP General Practice with Special
                          Interest in Dermatology{" "}
                        </p>
                      </div>
                     </div>
                    </div>

                    <div className="col-lg-9 col-md-7 col-sm-12">
                      <div className="doctor-details">
                        {/* <h3>About Us</h3> */}
                        
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a</p>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a</p>

                           
                        <div className={`accordion-item mt-4 ${activeIndex === 1 ? "active" : ""}`}>
                          <h4 className="doctor-sub-title accordion-header" onClick={() => toggleAccordion(1)}>
                            Main Area of Practice - General Practice ( Special
                            Interest in the following )-
                          </h4>

                          <ul class="circle-list mt-3 accordion-content" >
                            <li>
                              <IoMdCheckmark className="icon" />

                              <i>Family Medicine</i>
                            </li>
                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>Dermatology </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>Aesthetic Medicine </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>Medical Weight Loss</i>
                            </li>
                          </ul>
                        </div>

                        <div className={`accordion-item mt-4 ${activeIndex === 2 ? "active" : ""}`}>

                        <h4 className="doctor-sub-title accordion-header" onClick={() => toggleAccordion(2)}>
Education</h4>

<ul class="circle-list mt-3 accordion-content" >
                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <i className="d-flex align-items-center">
                                  <span className="badge bg-skyblue me-1">
                                    {" "}
                                    2012-2013{" "}
                                  </span>{" "}
                                  - University of Cardiff, Wales, United Kingdom
                                </i>
                              </div>
                              <span>- Diploma in Dermatology</span>
                            </li>
                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <i className="d-flex align-items-center">
                                  <span className="badge bg-skyblue me-1">
                                    {" "}
                                    2002-2007{" "}
                                  </span>{" "}
                                  - St. Georges University School of Medicine,
                                  Grenada, West Indies{" "}
                                </i>
                              </div>

                              <span className="d-flex align-items-center">
                                - Doctor of Medicine - May 18th, 2007, GPA 3.2
                              </span>
                            </li>

                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <i className="d-flex align-items-center">
                                  <span className="badge bg-skyblue me-1">
                                    {" "}
                                    2002-2004{" "}
                                  </span>{" "}
                                  - Global Institute for Alternative Medicine{" "}
                                </i>
                              </div>

                              <span className="d-flex align-items-center">
                                - Master Herbalist
                              </span>
                            </li>
                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <i className="d-flex align-items-center">
                                  <span className="badge bg-skyblue me-1">
                                    {" "}
                                    2002-2004{" "}
                                  </span>{" "}
                                  - Morris Brown College, Atlanta, GA{" "}
                                </i>
                              </div>

                              <span className="d-flex align-items-center">
                                - Bachelor of Science in Biology Pre-medicine,
                                GPA 3.5
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className={`accordion-item mt-4 ${activeIndex === 3 ? "active" : ""}`}>

                        <h4 className="doctor-sub-title accordion-header" onClick={() => toggleAccordion(3)}>
                            Professional Memberships -
                          </h4>

                          <ul class="circle-list mt-3 accordion-content" >
                            <li>
                              <IoMdCheckmark className="icon" />

                              <i>
                                Caribbean College Of Family Practitioners (CCFP)
                                Issued:{" "}
                              </i>
                              <br />
                              <span>April 14, 2010 Membership #00822</span>
                            </li>
                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>American Academy of Family Medicine Issued:</i>
                              <br />
                              <span>2010 Membership # 9021723</span>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Caribbean Dermatology Association, Associate
                                Member{" "}
                              </i>
                              <br />
                              <span>
                                American Cosmetic Cellular Medicine Association
                              </span>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Board Certified in Aesthetics Medicine Issued:
                                August 21, 2014{" "}
                              </i>
                              <br />
                              <span>
                                Membership# 315812 America Academy of Procedural
                                Medicine
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className={`accordion-item mt-4 ${activeIndex === 4 ? "active" : ""}`}>

                        <h4 className="doctor-sub-title accordion-header" onClick={() => toggleAccordion(4)}>

                            Professional Certifications -
                          </h4>

                          <ul class="circle-list mt-3 accordion-content" >

                            <li>
                              <IoMdCheckmark className="icon" />

                              <i>
                                Certified in O-Shot & P Shot, American Cosmetic
                                Cellular Medicine Association
                              </i>
                            </li>
                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Vampire Facelift & Facial, American
                                Cosmetic Cellular Medicine Association
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Mesotheraphy, Empire Medical
                                Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Botox & Dermal Fillers, Empire
                                Medical Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Cosmetic Sclerotheraphy, Empire
                                Medical Trainingg
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Lasers Treatment for Primary Care
                                Physicians, Empire Medical Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Medical Weight Loss, Empire Medical
                                Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Facial Aesthetic Medicine, Empire
                                Medical Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Basic Cardiac Exercise Stress
                                Testing , National Procedural Institute
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified Associate Business Manager by the
                                American Association of Professionals In
                                Business Management (CABM)
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified Hair Coach, Bauman Medical Training
                                Group
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Advance Acne Therapies, Empire
                                Medical Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Platelet Rich Plasma Injections,
                                Empire Medical Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Joint / Extremity / Non Spinal
                                Joint Injections, Empire Medical Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Advance Smoking Cessation Therapy,
                                Empire Medical Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Medical Hair Loss Therapies, Empire
                                Medical Training
                              </i>
                            </li>

                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                Certified in Sexual Dysfunction Training for Men
                                and Women, Empire Medical Training
                              </i>
                            </li>
                          </ul>
                        </div>

                        <div className={`accordion-item mt-4 ${activeIndex === 5 ? "active" : ""}`}>

                        <h4 className="doctor-sub-title accordion-header" onClick={() => toggleAccordion(5)}>
                            Professional Presentations -
                          </h4>

                          <ul class="circle-list mt-3 accordion-content" >

                            <li>
                              <IoMdCheckmark className="icon" />

                              <i>
                                24th 2015 Caribbean Dermatology Conference,
                                Barbados; “Doctor, I Now Have Hair!”
                                Presentation of Clinical experience in regards
                                to medical hair restoration, which combined PRP,
                                Laser Therapies and Topical Medications.; Dr.
                                Kyjuan H Brown
                              </i>
                            </li>
                            <li>
                              <IoMdCheckmark className="icon" />
                              <i>
                                25th 2016 Caribbean Dermatology Conference,
                                Jamaica; “Unconventional Application of Lasers
                                in Clinical Practice.” Use of laser therapy for
                                the treatment of Eczema, Acne, Keloids and
                                Pilonidal Cysts.; Dr. Kyjuan H Brown{" "}
                              </i>
                            </li>
                          </ul>
                        </div>

                        <div className={`accordion-item mt-4 ${activeIndex === 6 ? "active" : ""}`}>

                        <h4 className="doctor-sub-title accordion-header" onClick={() => toggleAccordion(6)}>
                            Professional Awards & Recognitions
                          </h4>

                          <ul class="circle-list mt-3 accordion-content" >
                            <li>
                              <IoMdCheckmark className="icon" />

                              <i>
                                {" "}
                                2015 Recipient of the Professor Hywel Williams
                                Research Prize, for the most outstanding
                                research paper with the greatest relevance to
                                the Caribbean; Awarded by the Caribbean
                                Dermatology Association for “Doctor, I Now Have
                                Hair!” presentation
                              </i>
                            </li>
                          </ul>
                        </div>

                        <div className={`accordion-item mt-4 ${activeIndex === 7 ? "active" : ""}`}>
                        <h4 className="doctor-sub-title accordion-header" onClick={() => toggleAccordion(7)}>

                            Professional Boards and Committees
                          </h4>

                          <ul class="circle-list mt-3 accordion-content" >
                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <span className="badge bg-skyblue me-1">
                                  {" "}
                                  January 2012 to 2014
                                </span>
                              </div>
                              <span>
                                - Member of the CedarBridge Academy Board of
                                Governors, with responsibility for Alumni
                                Affairs & Media Relations
                              </span>
                            </li>

                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <span className="badge bg-skyblue me-1">
                                  {" "}
                                  January 2012 to 2013
                                </span>
                              </div>
                              <span>
                                - Medical Member of the NHP Financial &
                                Reimbursement Committee{" "}
                              </span>
                            </li>

                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <span className="badge bg-skyblue me-1">
                                  {" "}
                                  January 2011 to 2013
                                </span>
                              </div>
                              <span>
                                - Chairperson of the Transport Control
                                Department Medical Appeal Committee{" "}
                              </span>
                            </li>

                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <span className="badge bg-skyblue me-1">
                                  {" "}
                                  January 2011 to 2013
                                </span>
                              </div>
                              <span>
                                - Member of the Education Appeals Committee
                              </span>
                            </li>

                            <li className="ps-0">
                              <div className="mb-2">
                                {" "}
                                <span className="badge bg-skyblue me-1">
                                  {" "}
                                  January 2010 to December 2010
                                </span>
                              </div>
                              <span>
                                - Member of the Transport Control Department
                                Medical Appeals Committee
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NutritionTeamCard;

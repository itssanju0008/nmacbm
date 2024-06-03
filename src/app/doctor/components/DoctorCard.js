"use client";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import "../../modules/home/team/team.css";
import { IMAGEURL } from "@/Api/apiConfig";


const StaffCards = ({doctor}) => {
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
            src={doctor?.image?`${IMAGEURL}${doctor?.image}`:"/all/dummy.jpg"}
            alt="team Member"
            height={300}
            width={300}
            className="img-fluid"
          />

          <ul className="social">
            <li>
              <Link href={doctor?.facebook_link??"#"} target="_blank" >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href={doctor?.instagram_link??"#"} target="_blank">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href={doctor?.linkedin_link??"#"} target="_blank">
                <CiLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div className="team-content">
          <h3 className="title">{doctor?.first_name}{" "}{doctor?.last_name}</h3>
          <span className="post line-clamp-1">
          {doctor?.qualification}
          </span>
         {doctor?.profile_data && <Link
            href="#"
            className="read-more mt-2"
            onClick={handleReadMoreClick}
          >
            Read More <IoIosArrowRoundForward />
          </Link>}
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
                    <div className="col-xxl-3 col-lg-4 col-md-12 col-sm-12">
                     <div className="dr-profile"> 
                     <Image
                        src={doctor?.image?`${IMAGEURL}${doctor?.image}`:"/all/dummy.jpg"}
                        alt="Doctor"
                        width={300}
                        height={300}
                        className="img-fluid doct-img"
                        style={{ width: "100%", borderRadius: "0 10px 10px" }}
                      />

                      <div className=" mt-3">
                        <h3 className="dr-name">{doctor?.first_name}{" "}{doctor?.last_name}</h3>
                        <p className="item-designation">
                        {doctor?.qualification}
                        </p>
                      </div>
                     </div>
                    </div>

                    <div className="col-xxl-9 col-lg-8 col-md-12 col-sm-12">
                    <div className="doctor-details" dangerouslySetInnerHTML={{__html:doctor?.profile_data}}>
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

export default StaffCards;

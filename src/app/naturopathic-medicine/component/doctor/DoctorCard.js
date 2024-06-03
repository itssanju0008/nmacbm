'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import "../../../doctor/doctor.css";
import "../../../modules/home/team/team.css"


const DoctorCard = ({ doctor }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
            alt="team Member"
            height={300}
            width={300}
            className="img-fluid"
          />
          
          <ul className="social">
            <li>
              <Link href="#">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <CiLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div className="team-content">
          <h3 className="title">{doctor.name}</h3>
          <span className="post">{doctor.title}</span>
          {doctor?.profile_data &&     <Link href="#"
            className="read-more mt-2"
            onClick={toggleModal}
          >
            Read More <IoIosArrowRoundForward />
          </Link>}
        </div>
      </div>

      <div className={`modal ${modalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: modalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{doctor.name}</h5>
              <button type="button" className="close" onClick={handleCloseModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="doctor-details">
                <p>{doctor.bio}</p>
                {doctor.specializations && (
                  <div className={`accordion-item mt-4 ${activeIndex === 1 ? "active" : ""}`}>
                    <h4 className="doctor-sub-title accordion-header" onClick={() => toggleAccordion(1)}>
                   
                     Main Area of Practice - General Practice ( Special
                        Interest in the following )
                      
                    </h4>
                    <ul className="circle-list mt-3 accordion-content">
                      {doctor.specializations.map((specialization, index) => (
                        <li key={index}>
                          <IoMdCheckmark className="icon" />
                          <i>{specialization}</i>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./patientportal.css";
import Link from "next/link";
import VideoCard from "../shared/VideoCard";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";
import BlogsContainer from "../modules/home/blog/component/BlogsContainer";
import TeamContainer from "../modules/home/team/component/TeamContainer";

const PatientPortal = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    try {
      const res = await authApi.get(`service/patient-portal`);
      setData(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  }, []);

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Patient Portal ",
  };

  return (
    <>
      {/* banner */}
      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
      {/* banner */}

      <section className="side-space py-6">
        <div className="patient-portal">
          <div className="row">
            <div className="col-lg-12">
              <div className="all-common-heading mb-4">
                <h3>Book Your Appointments Easily Online! </h3>
                <div className="line"></div>
              </div>

              <div className="d-blok d-lg-flex gap-lg-4 mt-3 mt-lg-0">
                <div className="patient-info w-100">
                  <ul className="patient-info-list">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Book Appointments 24/7
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Book for most service providers
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Allows for same-day appointments when available
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Works for new or existing customers
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Works for Insurance or cash patients/clients
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      To cancel or reschedule appointments, access the full
                      Patient Portal.
                    </li>
                  </ul>
                </div>

                <div className="w-100 mt-4 mt-mt-0">
                  <div className="text-center">
                    <Image
                      src={"/all/healow.png"}
                      alt="Healow"
                      width={200}
                      height={80}
                      style={{ height: "auto", objectFi: "contain" }}
                    />
                  </div>
                  <div className="patient-info-link mt-4 justify-content-center">
                    <Link
                      target="_blank"
                      className="btn btn-appoinment "
                      href="https://healow.com/apps/practice/northshore-medical-and-aesthetic-center-us-devonshire-19498?v=2&locale=en&fbclid=IwAR0K2d6xsiPSpi_h-roZbXDdSgpKJcpUtGV1_uN0yBgZqRlN-5Dyh8A8-uE"
                    >
                      BOOK <br /> TODAY!
                    </Link>

                    <Link
                      target="_blank"
                      className="btn btn-appoinment "
                      href="https://mycw123.ecwcloud.com/portal17090/jsp/100mp/login_otp.jsp"
                    >
                      Sign In to <br /> Patient Portal
                    </Link>

                    <Link
                      target="_blank"
                      className="btn btn-appoinment"
                      href="https://www.youtube.com/watch?v=d-SXWCoPvSw"
                    >
                      LEARN HOW TO BOOK HERE
                    </Link>
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="second-row-patient-info">
                <h4>
                  Contact Our Office For Your Patient Portal Access Today! We
                  Will Give You Your Username And Password To Get You Started
                </h4>

                <p className="mb-2">
                  <b>CALL 293-5476 OR EMAIL info@nmac.bm</b>
                </p>

                <div>
                  <h3> BOOK YOUR APPOINTMENTS EASILY ONLINE </h3>
                  <p>
                    Get Convenient 24x7 access from the comfort and privacy of
                    your own home or office
                  </p>
                  <div className="gap-2  flex-wrap flex-md-nowrap d-flex">
                    <span className="badge rounded-pill bg-success">
                      Patient Portal is a Secure,
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Convenient, and Easy way to
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Access your Health Information
                    </span>
                  </div>

                  <div className="patient-info">
                    <ul className="patient-info-list mt-3">
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        Manage and Book Appointments
                      </li>
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        Access your Lab Results
                      </li>
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        View your Medications and Request Refills
                      </li>
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        Communicate with your Doctor
                      </li>
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        View your Medical Records
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="all-common-heading mb-4 mt-4">
                <h3>This Is How Easy It Works! </h3>
                <div className="line"></div>
              </div>

              {/* video component */}

              <div className="video-section">
                <div className="video-row">
                  {data?.video_gallery?.map((patientdata) => (
                    <VideoCard key={patientdata.id} mediaData={patientdata} />
                  ))}
                </div>

                {/* view more */}
                <div className="text-end mt-4">
                  <Link href="/video-gallery" className="btn btn-skyblue-fill">
                    View More &nbsp;{" "}
                    <FaLongArrowAltRight className="video-right-icon" />
                  </Link>
                </div>
              </div>
              <div>
                <BlogsContainer blogs={data?.blogs} />
              </div>
              <TeamContainer
                doctors={[
                  {
                    id: 17,
                    first_name: "Camille L",
                    last_name: ". Trott",
                    unique_code: "DR-CAMIemzg",
                    gender: "female",
                    phone: null,
                    email: null,
                    qualification:
                      "Chief Strategy and Business Development Officer",
                    profile_data: null,
                    image:
                      "upload/doctor/doa8sPYur2SNQXq71xxc18gOOQ10DO07nrT57ZF5.jpg",
                    summary: null,
                    area_of_practice: null,
                    education: null,
                    membership: null,
                    certification: null,
                    presentation: null,
                    awards_recoginitions: null,
                    boards_committee: null,
                    work_area: "Administration",
                    facebook_link: null,
                    instagram_link: null,
                    linkedin_link: null,
                    twitter_link: null,
                    special_interest: null,
                    status: 1,
                    created_at: "2024-05-03T07:53:47.000000Z",
                    updated_at: "2024-05-03T12:37:04.000000Z",
                    deleted_at: null,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientPortal;

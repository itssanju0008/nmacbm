import React from "react";
import Image from "next/image";
import Form from "./component/Form";
import "./contactus.css";
import { FaMapMarkerAlt, FaRegDotCircle } from "react-icons/fa";
import Link from "next/link";
import BannerSection from "../shared/BreadCrum";

const ContactUs = () => {
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Contact Us ",
  };

  return (
    <>
      {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
      
      {/* banner */}

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="contact-box">
              <div className="contact-details">
                <div className="all-common-heading mb-3">
                  <h3> Contact Us </h3>
                  <div className="line"></div>
                </div>

                <div className="contact-info">
                  <h4>NORTHSHORE Medical & Aesthetics Center</h4>

                  <div className="shortcode_vc_clmn_inner">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="title-wrap">
                          <h5 className="c_custom_heading pt-0 my-3 my-md-0">
                            Physical Address :
                          </h5>
                          <div className="h-decor"></div>
                        </div>
                        <ul className="icn-list-lg mt-4">
                          <li>
                            <FaMapMarkerAlt className="map-icon me-3" />
                            7 North Shore Road Devonshire DV01 <br /> Bermuda
                          </li>
                          <li>Next To Empire Grocery. </li>
                        </ul>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="title-wrap">
                          <h5 className="c_custom_heading pt-0 my-3 my-md-0">
                            Mailing Address :
                          </h5>
                          <div className="h-decor"></div>
                        </div>
                        <ul className="icn-list-lg mt-4">
                          <li>
                            <FaMapMarkerAlt className="map-icon me-3" />
                            Northshore Medical & Aesthetics Center P.O. Box
                            HM1839 Hamilton HMGX, Bermuda
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-12">
                        <div className="mt-4">
                          <p>
                            Vendor Payments, Invoices & Inquiries :
                            <Link
                              href="mailto:accountspayable@nmac.bm"
                              className="link-text"
                            >
                              accountspayable@nmac.bm
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr></hr>

              <div className="contact-details mt-4">
                <div className="all-common-heading mb-3">
                  <h3>Book Appointments 24x7 Online Today. </h3>
                  <div className="line"></div>
                </div>

                <div className="contact-info">
                  <p>
                    It&#39;s easier to book appointments! You don&#39;t need to
                    call to book, you can now book online and it takes only 1
                    minute. Use our Online Healow Booking system to book
                    Appointments 24/7 for our service providers. It allows for
                    same-day appointments when appointments are available for
                    new or existing cients and patients.
                  </p>
                  <p>
                    To cancel or reschedule appointments or access your lab
                    reports or health records, log-in to the full Patient
                    Portal.
                  </p>

                  <div className="contact-link-info mt-3">
                    <Link
                      target="_blank"
                      href="https://healow.com/apps/practice/northshore-medical-and-aesthetic-center-us-devonshire-19498?v=2&locale=en&fbclid=IwAR357cwkjNyUgcHgW_Q5AVVjmP4GYK-YGzsKcVoMAlZluaffUFRHVuR6AuM"
                      className="btn btn-book"
                    >
                      Book Your Next Appointment
                    </Link>
                  </div>
                </div>
              </div>

              <div className="contact-details mt-4">
                <div className="all-common-heading mb-3">
                  <h3>To Sign-up Or For More Information </h3>
                  <div className="line"></div>
                </div>

                <div className="contact-info">
                  <p>
                    Need more information on services, insurance coverage or
                    pricing? Let us know what services interest you, and we will
                    have our team contact you to follow-up so you can book an
                    appointment.
                  </p>

                  <div className="contact-link-info mt-3">
                    <Link href="/signup" className="btn btn-book">
                      Complete Our Form Here
                    </Link>
                  </div>
                </div>
              </div>

              <div className="contact-details mt-4">
                <div className="all-common-heading mb-3">
                  <h3>Inquiry </h3>
                  <div className="line"></div>
                </div>

                <div className="contact-info">
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    Accounts Department :
                    <Link
                      href="mailto:accountspayable@nmac.bm"
                      className="link-text"
                    >
                      accountspayable@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className="me-3" />
                    Covid Center :
                    <Link href="mailto:covid@nmac.bm" className="link-text">
                      covid@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    Laboratory :
                    <Link href="mailto:lab@nmac.bm" className="link-text">
                      Lab@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    SpaMedica :
                    <Link href="mailto:spa@nmac.bm" className="link-text">
                      spa@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    Salon B :
                    <Link href="mailto:spa@nmac.bm" className="link-text">
                      spa@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    General Inquiries / Appointments :
                    <Link href="mailto:info@nmac.bm" className="link-text">
                      info@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    Dr. Kyjuan H. Brown (Medical Director) :
                    <Link href="mailto:DrBrown@nmac.bm" className="link-text">
                      
                      DrBrown@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    Dr. Paula Estwick (GP) :
                    <Link href="mailto:Drestwick@nmac.bm" className="link-text">
                      Drestwick@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className="me-3" />
                    Dr. Amani Flood (Naturopathic Medicine) :
                    <Link
                      href="mailto:amaniflood@nmac.bm"
                      className="link-text"
                    >
                      amaniflood@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    Dr. Fermin Gonzalez (Rheumatology & Internal Medicine) :
                    <Link
                      href="mailto:Drgonzalez@nmac.bm"
                      className="link-text"
                    >
                      
                      Drgonzalez@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    Dr. Katherine Dale (Naturopathic Medicine) :
                    <Link href="mailto:kdale@nmac.bm" className="link-text">
                      
                      kdale@nmac.bm
                    </Link>
                  </p>
                  <p>
                    <FaRegDotCircle className=" me-3" />
                    Dr. Jocelyn Nzabalinda (Physiotherapist) :
                    <Link href="mailto:jocelynn@nmac.bm " className="link-text">
                      jocelynn@nmac.bm
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 mt-3 mt-lg-0">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

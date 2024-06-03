"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from "/public/all/nmac-logo.svg";
import ScrollLogo from "/public/all/namc-logo-scroll.png";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import {
  FaAngleUp,
  FaAngleDown,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import authApi from "@/Api/authApi";
import { usePathname } from "next/navigation";

function NavComponent() {
  const pathname = usePathname();
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);
  const [isProductServiceOpen, setProductServiceOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);
  const [isMediaOpen, setMediaOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await authApi.get(`product-menu`);
      setAllProducts(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const openSideNav = () => {
    setIsOpen(true);
  };

  const closeSideNav = () => {
    setIsOpen(false);
  };

  const AboutUsMouseEnter = () => {
    setAboutUsOpen(true);
  };

  const AboutUsMouseLeave = () => {
    setAboutUsOpen(false);
  };

  const ProductMouseEnter = () => {
    setProductOpen(true);
  };

  const ProductMouseLeave = () => {
    setProductOpen(false);
  };

  const ProductServiceMouseEnter = () => {
    setProductServiceOpen(true);
  };

  const ProductServiceMouseLeave = () => {
    setProductServiceOpen(false);
  };

  const MediaMouseEnter = () => {
    setMediaOpen(true);
  };

  const MediaMouseLeave = () => {
    setMediaOpen(false);
  };

  //  for mobile

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownIndex) => {
    setActiveDropdown(activeDropdown === dropdownIndex ? null : dropdownIndex);
  };
  useEffect(() => {
    setProductServiceOpen(false);
  }, [pathname]);
  // for scroll

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header className={isSticky ? "sticky" : ""}>
        <div className=" start-header start-style">
          <div className="side-space">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid p-0 m-0">
                <Link className="navbar-brand" href="/">
                  <Image src={Logo} alt=" Logo" className="logo img-fluid" />
                </Link>

                <Link className="navbar-brand-1" href="/">
                  <Image
                    src={ScrollLogo}
                    alt="logo"
                    className="scroll-logo img-fluid"
                  />
                </Link>

                <div
                  class="collapse navbar-collapse justify-content-end"
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav">
                    <li
                      className="nav-item show"
                      onMouseEnter={AboutUsMouseEnter}
                      onMouseLeave={AboutUsMouseLeave}
                    >
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="#"
                        aria-haspopup="true"
                        aria-expanded={isAboutUsOpen}
                      >
                        About
                        <br /> Us
                        <FaCaretDown className="ms-2" />
                      </Link>

                      {isAboutUsOpen && (
                        <div
                          className="dropdown-menu"
                          onMouseEnter={AboutUsMouseEnter}
                          onMouseLeave={AboutUsMouseLeave}
                        >
                          <div className="mega-box">
                            <div className="mega-menu">
                              <ul className="inner-menu">
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/about-us"
                                  >
                                    Overview
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/company-policies"
                                  >
                                    Company Policies
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/doctor"
                                  >
                                    Doctors & Providers
                                  </Link>
                                </li>

                                <li>
                                  <Link className="dropdown-item" href="/staff">
                                    Staff
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>

                    <li
                      className="nav-item show"
                      onMouseEnter={ProductMouseEnter}
                      onMouseLeave={ProductMouseLeave}
                    >
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="#"
                        aria-haspopup="true"
                        aria-expanded={isProductOpen}
                      >
                        Our <br />
                        Products
                        <FaCaretDown className="ms-2" />
                      </Link>

                      {isProductOpen && (
                        <div
                          className="dropdown-menu"
                          onMouseEnter={ProductMouseEnter}
                          onMouseLeave={ProductMouseLeave}
                        >
                          <div className="mega-box">
                            <div className="mega-menu">
                              <ul className="inner-menu">
                                {allProducts?.map((row, index) => (
                                  <li key={row?.id}>
                                    <Link
                                      className="dropdown-item"
                                      href={row?.url ?? "#"}
                                      target="_blank"
                                    >
                                      {row?.title}
                                      <p className="service-menu-text">
                                        <b>{row?.url}</b>
                                      </p>
                                      <p className="service-menu-text">
                                        {row?.description}
                                      </p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>

                    <li
                      className="nav-item show"
                      onMouseEnter={ProductServiceMouseEnter}
                      onMouseLeave={ProductServiceMouseLeave}
                    >
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="#"
                        aria-haspopup="true"
                        aria-expanded={isProductServiceOpen}
                      >
                        Our <br />
                        Services
                        <FaCaretDown className="ms-2" />
                      </Link>

                      {isProductServiceOpen && (
                        <div
                          className="dropdown-menu"
                          onMouseEnter={ProductServiceMouseEnter}
                          onMouseLeave={ProductServiceMouseLeave}
                        >
                          <div className="mega-box">
                            <div className="mega-menu-full service-menu">
                              <ul className="inner-menu-full ">
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/patient-portal"
                                  >
                                    Patient Portal
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>{" "}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/medical"
                                  >
                                    Medical
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/naturopathic-medicine"
                                  >
                                    Naturopathic Medicine
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/spamedica-aesthetics"
                                  >
                                    Aesthetics & Anti-Ageing Treatments
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/weight-loss-club"
                                  >
                                    Weight Loss & Gym Access
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/laboratory-services"
                                  >
                                    Laboratory Services
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/hair-restoration"
                                  >
                                    Hair Restoration
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/salon-b"
                                  >
                                    Salon B - Hair Styling & Barber
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/pharmacy"
                                  >
                                    Pharmacy
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/health-coaching-nutrition"
                                  >
                                    Health Coaching & Nutrition
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/sexual-health"
                                  >
                                    Sexual Health
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/pain-management"
                                  >
                                    Pain Management
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/covid-testing-clinic"
                                  >
                                    COVID-19 Testing
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/iv-nutrient-colonics"
                                  >
                                    IV Nutrient Infusions & Colonics
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/ultrasound"
                                  >
                                    Ultrasound Services
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/sports-medicine"
                                  >
                                    Rehab & Sports Medicine
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/rheumatology"
                                  >
                                    Rheumatology
                                    <p className="service-menu-text">
                                      To get the right care , you need the right
                                      doctor- you have come to the right place.
                                    </p>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="/visiting-specialist-schedule"
                      >
                        VISITING SPECIAL
                        <br /> SCHEDULE
                      </Link>
                    </li>

                    <li
                      className="nav-item show"
                      onMouseEnter={MediaMouseEnter}
                      onMouseLeave={MediaMouseLeave}
                    >
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="#"
                        aria-haspopup="true"
                        aria-expanded={isMediaOpen}
                      >
                        MEDIA
                        <FaCaretDown className="ms-2" />
                      </Link>

                      {isMediaOpen && (
                        <div
                          className="dropdown-menu"
                          onMouseEnter={MediaMouseEnter}
                          onMouseLeave={MediaMouseLeave}
                        >
                          <div className="mega-box">
                            <div className="mega-menu">
                              <ul className="inner-menu">
                                <li>
                                  <Link className="dropdown-item" href="/media">
                                    In The Media
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/news-letter"
                                  >
                                    Newsletters
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/photo-gallery"
                                  >
                                    Photo Gallery
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/video-gallery"
                                  >
                                    Video Gallery
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="/download"
                                  >
                                    Downloads
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="/gym-registration"
                      >
                        Gym
                        <br /> Reg.
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="/contact-us"
                      >
                        Contact
                        <br /> Us
                      </Link>
                    </li>

                    <li>
                      <div className="menu">
                        <Link href="#" onClick={openSideNav}>
                          ME
                          <br />
                          NU
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* desktop humburg menu  */}

                <div
                  id="sidenav"
                  className={`sideoverlay ${isOpen ? "open" : ""}`}
                >
                  <Link
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={closeSideNav}
                  >
                    {" "}
                    <RxCross1 />
                  </Link>
                  <div className="sidebar-container">
                    <div className="sideoverlay-content">
                      <Link
                        className="slide-menu"
                        href="/whats-new"
                        onClick={closeSideNav}
                      >
                        What&#39;S New
                      </Link>
                      <Link
                        className="slide-menu"
                        href="/events"
                        onClick={closeSideNav}
                      >
                        Events
                      </Link>

                      <Link
                        className="slide-menu"
                        href="/specials-&-deals"
                        onClick={closeSideNav}
                      >
                        Specials / Deals
                      </Link>
                      <Link
                        className="slide-menu"
                        href="/testimoinal"
                        onClick={closeSideNav}
                      >
                        Testimonials
                      </Link>
                      <Link
                        className="slide-menu"
                        href="/blog"
                        onClick={closeSideNav}
                      >
                        Blog
                      </Link>
                      <Link
                        className="slide-menu"
                        href="/contact-us"
                        onClick={closeSideNav}
                      >
                        Contact
                      </Link>
                    </div>

                    <div className="header-social-icon">
                      <ul>
                        <li className="header-social-link">
                          <Link
                            href="https://www.facebook.com/NMACBermuda/"
                            target="_blank"
                          >
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li className="header-social-link">
                          <Link
                            href="https://www.youtube.com/channel/UCtzA3es_bKyC6IwPPf5Qesw"
                            target="_blank"
                          >
                            <FaYoutube />
                          </Link>
                        </li>
                        <li className="header-social-link">
                          <Link
                            href="https://www.instagram.com/nmac_bda/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <p
                    className="text-white mb-1 for-mobile-device text-end"
                    style={{ fontSize: "12px" }}
                  >
                    click to see menu
                  </p>
                  <div className="menu for-mobile-device float-end">
                    <Link href="#" onClick={openNav}>
                      <FaBarsStaggered style={{ fontSize: "24px;" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* for mobile */}

      <div>
        <div id="myNav" className={`overlay-navbar ${isNavOpen ? "open" : ""}`}>
          <div className="d-flex justify-content-between p-3 mb-5">
            <Link className="closebtn" onClick={closeNav} href="#">
              &times;
            </Link>
          </div>
          <span className="mx-2 mb-4" />

          <div className="overlay-navbar-content">
            <div className={`dropdown ${activeDropdown === 1 ? "open" : ""}`}>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="#" onClick={() => toggleDropdown(1)}>
                  ABOUT US
                  <span className="text-right">
                    {activeDropdown === 1 ? (
                      <FaAngleUp className="fa-20" />
                    ) : (
                      <FaAngleDown className="fa-20" />
                    )}
                  </span>
                </Link>
              </div>

              <div className="dropdown-content">
                <Link href="/about-us" onClick={closeNav}>
                  Overview
                </Link>
                <Link href="#" onClick={closeNav}>
                  Doctors & Staff
                </Link>
              </div>
            </div>

            <div className={`dropdown ${activeDropdown === 2 ? "open" : ""}`}>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="#" onClick={() => toggleDropdown(2)}>
                  PRODUCTS
                  <span className="text-right">
                    {activeDropdown === 1 ? (
                      <FaAngleUp className="fa-20" />
                    ) : (
                      <FaAngleDown className="fa-20" />
                    )}
                  </span>
                </Link>
              </div>

              <div className="dropdown-content">
                {allProducts?.map((row, index) => (
                  <Link
                    key={row?.id}
                    href={row?.url ?? "#"}
                    target="_blank"
                    onClick={closeNav}
                  >
                    {row?.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className={`dropdown ${activeDropdown === 3 ? "open" : ""}`}>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="#" onClick={() => toggleDropdown(3)}>
                  SERVICES
                  <span className="text-right">
                    {activeDropdown === 1 ? (
                      <FaAngleUp className="fa-20" />
                    ) : (
                      <FaAngleDown className="fa-20" />
                    )}
                  </span>
                </Link>
              </div>

              <div className="dropdown-content">
                <Link onClick={closeNav} href="/patient-portal">
                  Patient Portal
                </Link>

                <Link onClick={closeNav} href="/medical">
                  Medical
                </Link>

                <Link onClick={closeNav} href="#">
                  Naturopathic Medicine
                </Link>

                <Link onClick={closeNav} href="/spamedica-aesthetics">
                  Aesthetics & Anti-Ageing Treatments
                </Link>

                <Link onClick={closeNav} href="/weight-loss-club">
                  Weight Loss & Gym Access
                </Link>

                <Link onClick={closeNav} href="/laboratory-services">
                  Laboratory Services
                </Link>

                <Link onClick={closeNav} href="/hair-restoration">
                  Hair Restoration
                </Link>

                <Link onClick={closeNav} href="/salon-b">
                  Salon B - Hair Styling & Barber
                </Link>

                <Link onClick={closeNav} href="/pharmacy">
                  Pharmacy
                </Link>

                <Link onClick={closeNav} href="/health-coaching-nutrition">
                  Health Coaching & Nutrition
                </Link>

                <Link onClick={closeNav} href="/sexual-health">
                  Sexual Health
                </Link>

                <Link onClick={closeNav} href="/pain-management">
                  Pain Management
                </Link>

                <Link onClick={closeNav} href="/covid-testing-clinic">
                  COVID-19 Testing
                </Link>

                <Link onClick={closeNav} href="/iv-nutrient-colonics">
                  IV Nutrient Infusions & Colonics
                </Link>

                <Link onClick={closeNav} href="/ultrasound">
                  Ultrasound Services
                </Link>

                <Link onClick={closeNav} href="/sports-medicine">
                  Rehab & Sports Medicine
                </Link>

                <Link onClick={closeNav} href="/rheumatology">
                  Rheumatology
                </Link>
              </div>
            </div>

            <Link href="/visiting-specialist-schedule" onClick={closeNav}>
              VISITING SPECIAL SCHEDULE
            </Link>

            <Link href="/whats-new" onClick={closeNav}>
              WHAT&#39;S NEW
            </Link>

            <Link href="/events" onClick={closeNav}>
              EVENTS
            </Link>

            <Link href="/specials-&-deals" onClick={closeNav}>
              SPECIALS / DEALS
            </Link>

            <div className={`dropdown ${activeDropdown === 4 ? "open" : ""}`}>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="#" onClick={() => toggleDropdown(4)}>
                  MEDIA
                  <span className="text-right">
                    {activeDropdown === 1 ? (
                      <FaAngleUp className="fa-20" />
                    ) : (
                      <FaAngleDown className="fa-20" />
                    )}
                  </span>
                </Link>
              </div>

              <div className="dropdown-content">
                <Link href="#">In The Media</Link>

                <Link href="newsletter" onClick={closeNav}>
                  Newsletters
                </Link>

                <Link href="/download" onClick={closeNav}>
                  Downloads
                </Link>

                <Link href="/blog">Blog</Link>
              </div>
            </div>

            <Link href="/testimoinal" onClick={closeNav}>
              TESTIMONIALS
            </Link>

            <Link href="/contact-us" onClick={closeNav}>
              CONTACT US
            </Link>

            <p className="menu-title mb-sm-1 mt-3" onClick={closeNav}>
              HELP & SUPPORT
            </p>
            <Link href="#" onClick={closeNav}>
              Hot Line : 293-5476
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavComponent;

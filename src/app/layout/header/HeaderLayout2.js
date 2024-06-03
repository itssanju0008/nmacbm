"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from "/public/all/natural_medicine-logo.png";
import ScrollLogo from "/public/all/namc-logo-scroll.png";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

function NavComponent() {
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);
  const [isProductServiceOpen, setProductServiceOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);
  const [isMediaOpen, setMediaOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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
                  <Image src={Logo} alt="shopnmac Logo" className="logo logo-2" />
                </Link>

                <Link className="navbar-brand-1" href="/">
                  <Image src={Logo} alt="logo" className="scroll-logo" />
                </Link>

                <div
                  class="collapse navbar-collapse justify-content-end"
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="/naturopathic-medicine">
                        Home
                      </Link>
                    </li>
                    <li
                      className="nav-item show"
                      onMouseEnter={AboutUsMouseEnter}
                      onMouseLeave={AboutUsMouseLeave}>
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="#about-us"
                        aria-haspopup="true"
                        aria-expanded={isAboutUsOpen} >
                        About
                        <br /> Us
                      </Link>

                    </li>

                    <li
                      className="nav-item show"
                      onMouseEnter={ProductServiceMouseEnter}
                      onMouseLeave={ProductServiceMouseLeave}>
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="#service"
                        aria-haspopup="true"
                        aria-expanded={isProductServiceOpen}>
                        Services
                      </Link>
                     
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="/naturopathic-medicine/video">
                        VIDEO
                      </Link>
                    </li>

                    <li className="nav-item show">
                      <Link
                        className="nav-link d-flex  align-items-start"
                        href="/naturopathic-medicine/deal-and-events"
                        aria-haspopup="true"
                        aria-expanded={isMediaOpen} >
                        DEALS & EVENTS
                      </Link>

                    </li>

                    <li className="nav-item show" >
                      <Link className="nav-link d-flex  align-items-start"  href="/naturopathic-medicine/online-education">
                          ONLINE EDUCATION
                      </Link>
                    </li>

                    <li className="nav-item show" >
                      <Link className="nav-link d-flex  align-items-start" target="_blank" href="https://healow.com/apps/practice/northshore-medical-and-aesthetic-center-us-devonshire-19498?v=2&locale=en" >
                        BOOK NOW
                      </Link>

                    </li>

                    <li className="nav-item">
                      <Link className="nav-link d-flex  align-items-start"
                        href="/naturopathic-medicine/contact-us" >
                        Contact
                        <br /> Us
                      </Link>
                    </li>
                  </ul>
                </div>


                <div>
                <p className="text-white mb-1 for-mobile-device text-end" style={{fontSize:'12px'}}>click to  see menu</p>
                  <div className="menu for-mobile-device float-end">
                    <Link href="#" onClick={openNav}>
                       <FaBarsStaggered style={{fontSize:'24px;'}} />
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

           <Link  href="#about-us" onClick={closeNav}>
             ABOUT US
            </Link>

            <Link  href="#service" onClick={closeNav}>
               SERVICES
            </Link>

            <Link href="/naturopathic-medicine/video" onClick={closeNav}>
              VIDEO
            </Link>

            <Link  href="/naturopathic-medicine/deal-and-events" onClick={closeNav}>
             DEALS & EVENTS
            </Link>

            <Link href="/naturopathic-medicine/online-education" onClick={closeNav}>
              ONLINE EDUCATION
            </Link>


            <Link onClick={closeNav} target="_blank" href="https://healow.com/apps/practice/northshore-medical-and-aesthetic-center-us-devonshire-19498?v=2&locale=en" >
             BOOK NOW
            </Link>

            <Link href="/naturopathic-medicine/contact-us" onClick={closeNav}>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavComponent;

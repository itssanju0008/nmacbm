"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./rightstick.css";
import Image from "next/image";
import {
  MdOutlineWatchLater,
  MdAddIcCall,
  MdArrowRightAlt,
} from "react-icons/md";
import { IoIosCall, IoMdMail } from "react-icons/io";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import authApi from "@/Api/authApi";


const RightStickIcon = () => {
  const [isShopNowPopupVisible, setShopNowPopupVisible] = useState(false);
  const [isLocationPopupVisible, setLocationPopupVisible] = useState(false);
  const [isWorkingHrPopupVisible, setWorkingHrPopupVisible] = useState(false);
  const [isEmergencyServiceVisible, setEmergencyServiceVisible] =
    useState(false);
  const [isPatientPortalVisible, setPatientPortalVisible] = useState(false);
  const [isAwardsVisible, setAwardsVisible] = useState(false);
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

  const [schedule,setSchedule]=useState(null);
  const getSchedule=async()=>{
    try {
      const res=await authApi.get(`visiting-specialists`);
      setSchedule(res?.data[res?.data?.length-1])
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getSchedule();
  },[])
  return (
    <>
      <div className="icon-bar">
        <div
          className="icon-container"
          onMouseEnter={() => setShopNowPopupVisible(true)}
          onMouseLeave={() => setShopNowPopupVisible(false)}
        >
          <Link href="https://shopnmac.com/" target="_blank" className="blue-1">
            <div className="mt-0 mt-sm-2">
              <Image
                src="/all/cart.png"
                alt="Cart Icon"
                className="img-fluid"
                width={26}
                height={26}
              />
              <p className="mt-1">SHOP NOW</p>
            </div>
          </Link>
          {isShopNowPopupVisible && (
            <div
              className="popup"
              onMouseEnter={() => setShopNowPopupVisible(true)}
              onMouseLeave={() => setShopNowPopupVisible(false)}
            >
              <div className="wpb_wrapper">
                <h5 className="link-drop-title">Our Products</h5>
                {allProducts?.map((row, index) => (
                  <div className="our-shop" key={index}>
                    <h3>{row?.title}</h3>
                    <Link href={`${row?.url}`} target="_blank">
                      shopnmac.com
                    </Link>
                    <p>{row?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div
          className="icon-container"
          onMouseEnter={() => setLocationPopupVisible(true)}
          onMouseLeave={() => setLocationPopupVisible(false)}
        >
          <Link href="#" className="blue-2">
            <div className="mt-0 mt-sm-2">
              <Image
                src="/all/location.png"
                alt="Map Icon"
                className="img-fluid"
                width={26}
                height={26}
              />
              <p className="mt-1">LOCATION</p>
            </div>
          </Link>

          {isLocationPopupVisible && (
            <div
              className="popup"
              onMouseEnter={() => setLocationPopupVisible(true)}
              onMouseLeave={() => setLocationPopupVisible(false)}
            >
              <div class="wpb_map_wraper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826426051"
                  width="600"
                  frameborder="0"
                  style={{
                    pointerEvents: "none",
                    width: "100%",
                    height: "inherit",
                  }}
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          )}
        </div>

        <div
          className="icon-container"
          onMouseEnter={() => setPatientPortalVisible(true)}
          onMouseLeave={() => setPatientPortalVisible(false)}
        >
          <Link href="https://mycw123.ecwcloud.com/portal17090/jsp/100mp/login_otp.jsp" className="blue-3" target="_blank">
            <div className="mt-0 mt-sm-2">
              <Image
                src="/all/patient.png"
                alt="Patient Icon"
                className="img-fluid"
                width={26}
                height={26}
              />
              <p className="mt-1">patient portal</p>
            </div>
          </Link>

          {isPatientPortalVisible && (
            <div
              className="popup"
              onMouseEnter={() => setPatientPortalVisible(true)}
              onMouseLeave={() => setPatientPortalVisible(false)}
            >
              <div className="wpb_wrapper">
                <h5 style={{ textAlign: "left" }} className="link-drop-title">
                  PATIENT&#39;S PORTAL
                </h5>
                <p>Book Appointments, See Your Results & More</p>
                <div className="d-flex gap-2">
                  <Link
                    className="btn btn-info text-white"
                    href="https://mycw123.ecwcloud.com/portal17090/jsp/100mp/login_otp.jsp"
                    target="_blank"
                  >
                    {" "}
                    Log In{" "}
                  </Link>
                  <Link
                    href="https://healow.com/apps/practice/northshore-medical-and-aesthetic-center-us-devonshire-19498?v=2&locale=en"
                    className="btn btn-warning text-white"
                    target="_blank"
                  >
                    {" "}
                    Book Online{" "}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <div
          className="icon-container"
          onMouseEnter={() => setAwardsVisible(true)}
          onMouseLeave={() => setAwardsVisible(false)}
        >
          <Link href="#" className="blue-4">
            <div className="mt-0 mt-sm-2">
              <Image
                src="/all/award.png"
                alt="Cart Icon"
                className="img-fluid"
                width={26}
                height={26}
              />
              <p className="mt-1">Awards</p>
            </div>
          </Link>

          {isAwardsVisible && <div></div>}
        </div> */}

        <div
          className="icon-container"
          onMouseEnter={() => setWorkingHrPopupVisible(true)}
          onMouseLeave={() => setWorkingHrPopupVisible(false)}
        >
          <Link href="#" className="blue-5">
            <div className="mt-0 mt-sm-2">
              <Image
                src="/all/clock.png"
                alt="Cart Icon"
                className="img-fluid"
                width={26}
                height={26}
              />
              <p className="mt-1">Working times</p>
            </div>
          </Link>

          {isWorkingHrPopupVisible && (
            <div
              className="popup"
              onMouseEnter={() => setWorkingHrPopupVisible(true)}
              onMouseLeave={() => setWorkingHrPopupVisible(false)}
            >
              <div className="wpb_wrapper">
                <h5 style={{ textAlign: "left" }} className="link-drop-title">
                  <MdOutlineWatchLater className="text-skyblue watch-icon" />{" "}
                  Working Time
                </h5>
                <div className="p-2" dangerouslySetInnerHTML={{__html:schedule?.description}}>
      
    </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="icon-container"
          onMouseEnter={() => setEmergencyServiceVisible(true)}
          onMouseLeave={() => setEmergencyServiceVisible(false)}
        >
          <Link href="/contact-us" className="blue-6">
            <div className="mt-0 mt-sm-2">
              <Image
                src="/all/call.png"
                alt="Call Icon"
                className="img-fluid"
                width={26}
                height={26}
              />
              <p className="mt-1">Emergency Service </p>
            </div>
          </Link>
          {isEmergencyServiceVisible && (
            <div
              className="popup"
              onMouseEnter={() => setEmergencyServiceVisible(true)}
              onMouseLeave={() => setEmergencyServiceVisible(false)}
            >
              <div className="link-drop">
                <h5 style={{ textAlign: "left" }} className="link-drop-title">
                  <MdAddIcCall className="text-skyblue watch-icon" /> Emergency
                  Case
                </h5>
                <p className="tt">
                  Emergency dental care may be needed if you have had a blow to
                  the face, lost a filling, or cracked a tooth.
                </p>
                <ul className="icn-list">
                  <li>
                    <IoIosCall className="text-skyblue watch-icon" />

                    <span className="phone">
                      1-800-267-0000,
                      <br className="d-none d-xl-block" />
                      1-800-267-0001
                    </span>
                  </li>
                  <li>
                    <IoMdMail className="text-skyblue watch-icon" />
                    <Link href="mailto:demo@gmail.com" className="mail-info">
                      info@demo.com
                    </Link>
                  </li>
                </ul>
                <div className="text-start mt-3">
                  <Link className="btn btn-skyblue-fill py-2 px-4" href="/contact-us">
                    Our contacts <MdArrowRightAlt className="ms-2 watch-icon" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RightStickIcon;

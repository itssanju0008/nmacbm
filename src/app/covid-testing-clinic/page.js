'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CovidePatientReview from "../shared/ImageCard";
import CovidTestingCard from "./component/CovidTestingCard";
import "./covid_testing.css";
import Link from "next/link";

import NmacMedia from "./component/NmacMedia";
import { IoMdCheckmark } from "react-icons/io";
import NMACCovid19Test from "./component/NMACCovid19Test";
import { FaLongArrowAltRight } from "react-icons/fa";
import BannerSection from "../shared/BreadCrum";
import OldImageCard from "./component/ImageCard"
import authApi from "@/Api/authApi";

const CovidTesting = () => {
  const [data,setData]=useState(null);
  const getData=async()=>{
    try {
      const res=await authApi.get(`service/covid-19-testing`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData();
  },[])
  const CovideTestingData = [
    {
      title: "COVID Testing",
      para1: "via Northshore Medical Lab",
      mainpara: "Antigen | PCR | Antibody",
      para3: "Results in 1 to 4  hours",
    },

    {
      title: "Off-Site VIP Testing",
      para1: "via Northshore Medical Lab",
      mainpara: "Antigen | PCR | Antibody",
      para3: "Results in 1 to 4  hours",
    },

    {
      title: "Corporate COVID Testing",
      para1: "",
      mainpara: "Antigen | PCR",
      para3: "Results in 1 to 4  hours",
    },

    {
      title: "Hotel COVID Testing",
      para1: "",
      mainpara: "Antigen | PCR",
      para3: "Results in 1 to 4  hours",
    },
  ];

  const boxColors = [
    { backgroundColor: "#0777ab" },
    { backgroundColor: "#188ec4" },
    { backgroundColor: "#25a6e1" },
    { backgroundColor: "#46bdf4" },
  ];

  // Patient Review

  const PatientReviewData = [
    {
      id: 1,
      title: "Covid-19 Testing",
      imgUrl: "/service-img/covid_test_review.jpg",
    },
    {
      id: 2,
      title: "Covid-19 Testing",
      imgUrl: "/service-img/covid_test_review1.jpg",
    },
    {
      id: 3,
      title: "Covid-19 Testing",
      imgUrl: "/service-img/covid_test_review2.jpg",
    },

    {
      id: 4,
      title: "Covid-19 Testing",
      imgUrl: "https://nmac.bm/images/nmac-testimonials-dec21-image01.jpg",
    },
    {
      id: 5,
      title: "Covid-19 Testing",
      imgUrl: "/service-img/covid_test_review4.jpg",
    },
    {
      id: 6,
      title: "Covid-19 Testing",
      imgUrl: "https://nmac.bm/images/nmac-jan0322-testimonials01.jpg",
    },
  ];

  //  NMAC LED

  const NMACLed = [
    {
      id: 1,
      title: "Covid-19 Testing",
      imgUrl: "/service-img/nmac-covid-media1.jpg",
    },
    {
      id: 2,
      title: "Covid-19 Testing",
      imgUrl: "/service-img/nmac-covid-media2.jpg",
    },

  ];

  //  NMAC COVIDE TESTING

  const NMACcovidtesting = [
    {
      id: 1,
      imgUrl: "/service-img/covid-teting1.jpg",
    },
    {
      id: 2,
      imgUrl: "/service-img/covid-teting2.jpg",
    },
  ];

  // Covid 7 testing option

  const testData = [
    {
      id: 1,
      image: "/service-img/nmac-testing.jpg",
      title: "1. Visit our Covid-19 On-Site Testing Center",
      description:
        "Avoid the Lines, Our Online Booking System Makes it Easy!  Located conveniently out of the hustle and bustle of town at 7 North Shore Road Devonshire DV01. We have ample parking and you can take a glimpse of our beautiful view of the NorthShore.   48 to 72 Hour Turnaround for all options, for faster results see below our VIP option",
      date: "",
    },

    {
      id: 2,
      image: "/service-img/carside.jpg",
      title: "2. Carside Covid-19 Testing",
      description:
        "Remain in the Comfort of Your Cars!  We want to do our best to keep you and your families safe! We don't want to have symptomatic patients mixing with non-symptomatic patients during testing, so at NMAC, for symptomatic patients, we provide carside covid-19 testing. Once you drive up to our covid testing facility parking lot, you can conveniently stay in your vehicles, call 293-5476 and an attendant will assist you in your vehicle.",
      date: "",
    },

    {
      id: 3,
      image: "/service-img/VIP-Private-Concierge.jpg",
      title: "3. VIP Private Concierge Covid-19 Testing",
      description: `Any day, any time, let us come to you! Great for groups too!
        

We understand that finding time to test can be a hassle, and long lines may not align with your busy lifestyle. Whether you're uncomfortable waiting in large groups or unable to leave your home without hassle, we've got you covered.

Our VIP Service brings testing to your home, events, or workplace. Ideal for businesses, events, parties, or any occasion where large-scale testing is needed or if you simply prefer the convenience of staying at home.`,

      date: "Mon - Friday 8am to 5pm | Sat 9am to 5pm ",
    },

    {
      id: 4,
      image: "/service-img/vip-expedited.jpg",
      title: "4. VIP Expedited Covid-19 Testing   ",
      description:
        `Don't Miss Your Flight or Event!
        Same day turnaround*
        
        
        Let's be honest, pre-Covid our lives were busy and now, with constant Covid shifts in our lives, jobs and health with the pandemic, we are always on the go. Sometimes we even forget to book the essential things. This option is great for those with last-minute travel/event attendance needs. You may need to fly out for a medical emergency, business trip or attend a last-minute event and need covid test or Safekey. We have this convenient testing option just for you at NMAC!
        *Turnaround time dependent of lab collection availability and time of sample collection. 10am is the cutoff.`,
      date: "Mon - Sat 8am to 10am",
    },
    {
      id: 5,
      image: "/service-img/oral-swabs.jpg",
      title: "5. Oral Swabs Covid-19 Testing ",
      description:
        "For non-symptomatic children or if adults prefer to get the oral swabs vs the nasal swab, please consult our Covid-19 team on this option.  ",
      date: "",
    },
    {
      id: 6,
      image: "/service-img/rapid-antigen-testing.jpg",
      title: "6. Rapid Antigen Testing ",
      description:
        `These tests were just approved for Bermuda and are now available at NMAC from our COLA accredited lab. Tests are administered on site at the NMAC Covid-19 clinic, you can get results within 1 to 2 hours and results can be used as an official travel document. Please check with your airline carrier and destination for the approved list of tests before you book. These tests currently can not be used as SafeKey, arrival travel authorization continuum or get you out of quarantine.`,
      date: "",
    },
    {
      id: 7,
      image: "/service-img/TeleHealth.jpg",
      title: "7. TeleHealth Testing Service  ",
      description:
        `As of January 20, 2022: Antigen tests can now be used for travel Departure, Pre Arrival, Day 4 and for exit out of quarantine! No longer would persons require PCR testing unless they are traveling to a country that requires it for entry! NMAC Covid-19 Testing Center has a convenient new Telehealth Testing Service available for anyone that needs verified Antigen Testing for travel, exit quarantine or other reason. Get tested from the convenience of your homes or hotels. No more standing in long lines! You can purchase FDA Approved antigen testing kits from us at NorthShore Medical, from the LF Wade International Airport, Sargasso for delivery, or use the FDA Approved kits you already have or can buy.`,
      date: "",
    },
  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Covid-19 Testing  ",
  };
  
    return (
      <>
        {/* banner */}
  
        <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
        
        {/* banner */}
  
      


      <section className="side-space py-6">
        <div className="d-block d-md-flex justify-content-center">
          {CovideTestingData.map((specialty, index) => (
            <div className="w-100 w-md-50 w-lg-25 "  key={index}>
              <CovidTestingCard data={specialty}  dynamicColors={boxColors[index]}/>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>About Nmac’s Covid Efforts</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-sm-12">
            <div className="spamedica-info">
              <div className="">
              <div className="video-3-row">
                  {data?.photo_gallery?.map((imageData) => (
                    <CovidePatientReview
                      key={imageData.id}
                      imageData={imageData}
                    />
                  ))}
                </div>

                {/* view more */}
                <div className="text-end mt-4 mb-3 mb-md-0">
                  {/* Use the correct Link component syntax */}
                  <Link href="/photo-gallery" className="btn btn-skyblue-fill">
                    View More &nbsp;{" "}
                    <FaLongArrowAltRight className="video-right-icon" />
                  </Link>
                </div>
              </div>
             
            </div>
          </div>

          <div className="col-lg-4 col-md-5 col-sm-12 ps-1 ps-md-5">
            <div className="mb-2">
            <Link class="btn bg-skyblue w-100" href="https://northshore.resqwest.com/web/" target="_blank">Book Today </Link>
            </div>
           <div className="img-border">
             <Image src="/service-img/nmac-covid-pic1.jpg" alt="banner" width={300} height="400" style={{width:'100%', height:'auto'}} />
           </div>
           <br></br>

           <div className="img-border">
             <Image src="/service-img/allergies.jpg" alt="banner" width={300} height="400" style={{width:'100%', height:'auto'}} />
           </div>

          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mt-5 ">
                <div className="all-common-heading mb-4">
                  <h3>
                    Nmac Led The Way To Help Stop The Spread & Continues
                    Developments To Protect Our Patients
                  </h3>
                  <div className="line"></div>
                </div>
                <div className="salonb-info">
                <p className="">
                  COVID-19 took the world by storm and healthcare providers had
                  to act fast to help control the spread. NMAC has always been
                  forward-thinking in Bermuda’s healthcare and staying ahead
                  learning health advancements worldwide as well as ensuring our
                  staff are focused on continued education so we can better
                  serve our clients and stay prepared for these changing times.
                  Even with this Covid-19 pandemic, Dr Kyjuan Brown and team
                  ensured we had our Medical PPE and procedures in place to
                  continue to serve our patients in a safe environment,
                  including optimizing virtual and concierge medical visits with
                  our fleet of Doctors for those patients who prefer to remain
                  at home.
                </p>
                <p>
                  NMAC worked with the Bermuda Government to manage the launch
                  of the SouthSide Drive-Through Covid-19 Testing Facility as
                  well as consult with the Bermuda Health Department and Premier
                  on best practices which helped with Bermuda’s high ranking due
                  to good management of this virus. We continue to work with the
                  Bermuda Government and keep abreast of the Global updates on
                  Covid-19. NMAC has Covid testing clinics and concierge
                  services available, learn more below. Click here for
                  Government’s website updates on Covid{" "}
                  <Link
                    href="https://www.gov.bm/coronavirus"
                    target="_blank"
                    className="text-skyblue"
                  >
                    <b> https://www.gov.bm/coronavirus </b>
                  </Link>
                </p>
                <div>
                <div className="video-3-row">
                  {NMACLed.map((imageData) => (
                    <OldImageCard
                      key={imageData.id}
                      imageData={imageData}
                    />
                  ))}
                </div>

                {/* view more */}
                <div className="text-end mt-4 mb-3">
                  {/* Use the correct Link component syntax */}
                  <Link href="/photo-gallery" className="btn btn-skyblue-fill">
                    View More &nbsp;{" "}
                    <FaLongArrowAltRight className="video-right-icon" />
                  </Link>
                </div>
                </div>
                </div>
              </div>

              <div className="mt-3 mt-md-5">
                <div className="all-common-heading mb-4">
                  <h3>NMAC In The Media </h3>
                  <div className="line"></div>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="profile-border">
                      <NmacMedia data={NMACcovidtesting} />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="salonb-info">
                      <h3>ABOUT OUR COVID-19 TESTING </h3>
                      <p className="mt-3">
                        Covid-19 testing is very important and the only way we
                        can confirm if you have COVID-19. Testing helps people
                        determine if they are infected regardless of whether
                        they have symptoms or not. Testing helps reduce the
                        spread of the virus. When someone tests positive for
                        COVID-19, they can be isolated at home or, if needed, in
                        a hospital. Taking testing measures to prevent the
                        spread of infection will be one of the most effective
                        strategies for helping Bermuda and the world get us
                        safely back to work and school and help the economy.
                        Testing is important to protect your family, friends,
                        coworkers, and the people you encounter day-to-day.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="img-border">
                      <Image
                        src="/service-img/nmac-covid-centre.jpg"
                        alt="namc center"
                        width={200}
                        height={200}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="salonb-info">
                      <h3>COVID-19 TESTING CLINIC </h3>
                      <div>
                        <p className="mt-3 mb-1">
                          <b>MONDAYS TO SUNDAYS</b> <br />
                          Testing 7 days a week
                        </p>
                        <p className="">
                          Experiencing Symptoms? Traveling? Recently Travelled?
                          In Contact with Possible/Positive Persons? Need Group
                          Testing?
                        </p>
                      </div>

                      <div>
                        <p className="mb-1">
                          <b>Want to be Cautious?</b>
                        </p>
                        <p className="">
                          Call{" "}
                          <Link href="#" className="text-skyblue">
                            {" "}
                            <b>(441)293-5476</b>{" "}
                          </Link>{" "}
                          to schedule your appointment
                        </p>
                      </div>

                      <div>
                        <p className="mb-1">
                          <b>Testing Location</b>
                        </p>
                        <p className="mb-1">
                          NorthShore Medical Center
                          <br />7 North Shore Road, Devonshire, Bermuda DV01
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="all-common-heading mb-4">
                    <h3>Our Convenient Covid-19 Testing Options</h3>
                    <div className="line"></div>
                  </div>

                  <div className="salonb-info">
                    <p className="mt-2">
                      <b>OPEN 7 DAYS A WEEK </b>{" "}
                    </p>
                    <p className="text-skyblue">
                      <b>
                        Keep yourself and your loved ones safe by testing for
                        COVID-19.
                      </b>
                    </p>
                    <p className="">
                      As the threat of the variants lingers, people travel and
                      cases continue to increase worldwide, it’s important to
                      keep yourself and your loved ones safe. If you’d like to
                      be tested because of symptoms, exposure, Safekey, travel
                      plans or simply for peace of mind, NMAC’s Covid Center
                      provides multiple convenient options. We have performed
                      thousands of COVID-19 tests since the start of the
                      pandemic.
                    </p>
                    <p>
                      Please note, if you have recently traveled back to
                      Bermuda, you can also get your testing done at our
                      NorthShore Medical Center for your convenience as opposed
                      to testing at the designated government sites. Also, see
                      our options for getting Antigen testing for your return
                      back to Bermuda.
                    </p>
                    <p className="text-skyblue">
                      <b>
                        Walk-Ins are available, however we strongly recommend
                        booking online to guarantee an appointment and save
                        waiting time.
                      </b>
                    </p>
                  </div>

                  <div className="patient-info">
                    <ul className="patient-info-list">
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        <Link
                          href="https://booking.appointy.com/en-US/nmacbda/bookings/service?st=464059"
                          target="_blank"
                          style={{ color: "#666" }}
                        >
                          {" "}
                          <b>OnSite and CarSide Testing</b>
                        </Link>
                      </li>
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        <Link
                          href="telehealth-testing.html"
                          target="_blank"
                          style={{ color: "#666" }}
                        >
                          <b> TeleHealth Verified Antigen Testing </b>
                        </Link>
                      </li>
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        <Link
                          href="https://booking.appointy.com/en-US/nmacbda/bookings/service?st=464059"
                          target="_blank"
                          style={{ color: "#666" }}
                        >
                          <b> VIP at Home Testing </b>
                        </Link>
                      </li>
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        <Link
                          href="corporate-testing.html"
                          target="_blank"
                          style={{ color: "#666" }}
                        >
                          <b> Corporate & Large Group VIP Testing </b>
                        </Link>
                      </li>
                      <li>
                        <IoMdCheckmark className="me-3 link-text arrow-size" />
                        <Link
                          href="hotel-testing.html"
                          target="_blank"
                          style={{ color: "#666" }}
                        >
                          <b> Hotel VIP Concierge Testing </b>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <NMACCovid19Test testData={testData} />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CovidTesting;

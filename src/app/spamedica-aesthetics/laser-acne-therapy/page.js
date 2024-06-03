import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import VideoCard from "../../shared/VideoCard";
import ServiceSidebar from "../../shared/ServiceSidebar";

const Laser = () => {
  const NmacData = [
    {
      id: 1,
      title: "Laser Lipo Demo ",
      videoUrl: "https://www.youtube.com/embed/9e54EaL9z28?si=tRuU12d1ZFttYYUC",
      isYouTube: true,
    },
  ];

  return (
    <>
      <section className="position-relative">
        <div className="after_slider breadcrum-banner">
          <Image
            src={"/slider/slider.jpg"}
            alt="banner"
            width={1920}
            height={500}
            className="img-responsive"
          />

          <div className="breadcrum-title text-center">
            <h3>Laser acne therapy </h3>
            <p>
              &quot;You Have come to the place for the best treatment at
              affordable prices plus see what exciting events we have for
              you!&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>Laser Acne Therapy</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
            
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/asthetic/laser-acne-therapy-1.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-5">
               

                <p>
                The highly powerful yet gentle laser light superheats the p. acnes bacteria in the sebaceous gland and surrounding skin to effectively destroy the bacteria, reduce oil and sebum output and to help reduce any swelling or inflammation. LightPod lasers’ light-based therapy offers an effective, alternative treatment approach for all acne patients of any age or skin type, but also for patients who have not responded to traditional therapies and for those patients who either cannot take or who do not want to take oral medications including isotretinoin.
                </p>
            
                <p>
                This is an exciting new era in the treatment of acne. Aerolase now allows treatment of moderate to severe and cystic acne to be performed effectively on all skin types without the need for skin cooling, anesthesia or even skin contact by the handpiece. It is a great treatment option for anyone suffering from acne.
                </p>

                <p>
                Many patients have seen results immediately after one treatment and further improvement with continuing treatment. It reduces the severity of current and future breakouts.
                </p>
             
              </div>

            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 order-1 order-md-2">
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Laser;

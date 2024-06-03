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
            <h3>Botox </h3>
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
              <h3>Botox Cosmetic</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
              {`    BOTOX® Cosmetic is the only approved treatment to temporarily
                  improve the appearance of both moderate to severe frown lines
                  between the brows and crow's feet lines in adults. BOTOX®
                  Cosmetic is one of the most extensively studied medical
                  aesthetic treatments and is approved for cosmetic use in 78
                  countries. BOTOX® Cosmetic has a record of experience that
                  aesthetic providers know and trust.`}
                </p>
                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Real, noticeable results You may begin to notice results
                    within 24 to 48 hours for treatment of moderate to severe
                    frown lines. Results may vary.
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
           {`         Quick The actual injection process takes about10 minutes`}
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                  {`  No Down-Time Treatment requires minimal downtime or
                    recovery; it's often called a lunchtime procedure. You'll be
                    able to go about your normal routine immediately.`}
                  </li>
                </ul>
              </div>
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/aesthetics/botox-img1.png"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
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

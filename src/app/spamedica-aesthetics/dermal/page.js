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
            <h3>Dermal Fillers </h3>
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
              <h3>Dermal Fillers</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
                  As we age, our faces naturally lose subcutaneous fat. The
                  facial muscles are then working closer to the skin surface, so
                  smile lines and crow’s feet become more apparent.
                </p>
                <p>
                  The facial skin also stretches a bit, adding to this loss of
                  facial volume. Other factors that affect the facial skin
                  include sun exposure, heredity, and lifestyle.
                </p>
              </div>
              <div className="img-border mt-4">
                <Image
                  src="/service-img/iLipo-pad-treatment.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-4 mt-md-5">
                <div className="all-common-heading mb-4">
                  <h3>Dermal fillers can be used to:</h3>
                  <div className="line"></div>
                </div>
                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Plump thin lips
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Enhance shallow contours
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Soften facial creases and wrinkles
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Improve the appearance of recessed scars
                  </li>
                </ul>
                <p>
                  Dermal fillers can be very helpful in those with early signs
                  of aging, or as a value-added part of facial rejuvenation
                  surgery.
                </p>
                <div className="img-border my-3">
                <Image
                  src="https://nmac.bm/images/aesthetics/dermal-fillers1.png"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>
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

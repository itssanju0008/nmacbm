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
            <h3>Sure sculpt </h3>
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
              <h3>Heat Treat

</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="mb-3 mb-xl-0 iv_nutrient">
              <div>
               
                <p>
                  <b>
                  Your Stubborn Body Fat
                  </b>
                </p>
                <p>
                Non-invasive laser body contouring ideal for people with trouble spots, particularly those that seem resistant to diet and exercise. Helps you achieve a slimmer, more natural-looking appearance. No surgery. No downtime. Only results. Even for those of us who work out daily and eat right, there are always a few areas on our bodies that we can never seem to change how we want it. Our Sure Sculpt treatments help with these areas by having its non-invasive, light-based technology target and destroy treated fat cells. No surgery needed. No downtime, you can get back to work right after the treatment.

                </p>
                <p>
Our results, for many of our patients prove that each 25 minute treatment can destroy up to 24% of treated fat cells without surgery. Individual results for every client may vary, we are just reporting our average client results.</p>
              </div>
           

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Here are some treatment areas:</h3>
                  <div className="line"></div>
                </div>
                <div>
               
                  <ul className="patient-info-list mt-3 w-100">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Under the chin
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Belly
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Love handles
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Back


                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Inner and outer thighs
                    </li>
                  

                   

                
                  </ul>
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

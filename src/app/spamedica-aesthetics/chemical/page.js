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
            <h3>Chemical </h3>
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
              <h3>Chemical Peels</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
                  Sun exposure, acne or just getting older can leave your skin
                  tone uneven, wrinkled, spotted or scarred. If you want your
                  skin to look smoother and younger, consider a chemical peel,
                  which uses a chemical solution to smooth the texture of your
                  skin by removing the damaged outer layers.
                </p>
                <p>
                  A chemical peel, also called chemexfoliation or derma peeling,
                  is one of the least invasive ways to improve the appearance of
                  your skin. Although chemical peels are used mostly on the
                  face, they can also be used to improve the skin on your neck
                  and hands.
                </p>
                <p>You can improve:</p>
                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Acne or acne scars
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Age and liver spots
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Fine lines and wrinkles
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Freckles
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    ECG
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Irregular skin pigmentation
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Rough skin and scaly patches
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Scars
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Sun-damaged skin
                  </li>
                </ul>
                <p className="mt-3">
          {`Contact our office now to book an appointment with us. We'd
                  love to schedule you in!`}
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

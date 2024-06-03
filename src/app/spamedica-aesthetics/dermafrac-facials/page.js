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
            <h3>Dermafrac </h3>
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
              <h3>Dermalogica Facials</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <div className="img-border mt-4">
                  <Image
                    src="https://nmac.bm/images/sidemenu/skin-prob-solv-img.png"
                    className="img-fluid"
                    width={400}
                    height={600}
                    style={{ height: "auto", width: "100%" }}
                    alt="Service Image"
                  />
                </div>
                <p className="">
                  conditions such as congestion, breakouts, dehydration, and/or
                  hyperpigmentation are present.
                </p>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Microzone Facial</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Microzone is a targeted, 20 minute skin care treatments
                    performed by a Dermalogica certified skin therapist. Your
                    skin therapist will customize a Microzone to meet your skin
                    condition and needs. Below is a list of common Microzones
                    that are offered:
                  </p>
                  <ul className="patient-info-list mt-3 w-100">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Flash exfoliation : resurface, smooth, brighten
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      {`Men's skin fitness: alleviates shave problems`}
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Skin Soothing: ultracalming for sensitive & irritated skin
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Age Management: repair prematurely aging skin
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Oil Control: deep clean and purify oily skin
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Eye Rescue: brighten, firm, revitalize
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Rapid Spot Clearing: speedy breakout recovery
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Hand Repair: heal rough hands
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <h3>Dermalogica Signature Facials</h3>
                <div className="all-common-heading mb-4">
                  <h3>About Face</h3>
                  <div className="line"></div>
                </div>
                <p>
                  {`Dermalogica's core treatment begins with a thorough
                  zone-by-zone skin analysis, followed by a series of effective
                  enhancements designed to treat your skin concerns. This facial
                  includes all the fundamentals, for deep cleansing exfoliation,
                  a mask and hydration. You will achieve radiant skin with an
                  exceptional glow!`}
                </p>
              </div>

              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>Fountain of Youth</h3>
                  <div className="line"></div>
                </div>
                <p>
                  Are the signs of age becoming more prevalent on your skin?
                  Give it a revitalize power boost with this treatment designed
                  to nourish, regenerate and firm your skin! A potent vitamin
                  and hydroxy acid exfoliation resurfaces and retexturizes your
                  skin while the energizing massage techniques release tension
                  in the facial muscles for the ultimate in skin therapy for
                  premature-aging, mature or devitalized skin.
                </p>
              </div>

              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>Sensitive Skin</h3>
                  <div className="line"></div>
                </div>
                <p>
                This UltraCalming treatment offers serious relief for sensitive skin as it calms, smoothes and replenishes the most aggravated, irritated, inflamed skin. By targeting the triggers behind redness, itching and stinging, this treatment will help recovery is skin health.
                </p>
              </div>

              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>Breakout relief</h3>
                  <div className="line"></div>
                </div>
                <p>
                Start with a thorough deep cleansing, exfoliation to remove pore-clogging skin cells and extractions to help clear current breakouts without spreading acne causing bacteria. The soothing masque system detoxifies your skin while calming irritation and redness. Simultaneously oil-free hydration and solar defense help hydrate and control excess surface oil while keeping your skin protected.
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

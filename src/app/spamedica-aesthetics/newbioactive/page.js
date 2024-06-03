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
            <h3>Newbioactive </h3>
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
              <h3>Dermalogica Bioactive Peel</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
                  Experience the power of BioActive Peel, a powerful new skin
                  resurfacing system from the skin health experts at Dermalogica
                  and The International Dermal Institute. It helps reduce acne,
                  pigmentation and signs of premature aging to reveal smoother,
                  brighter and softer skin.
                </p>
              </div>
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/bioactive/bioactive-peel-treatment.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-4 mt-lg-5">
                <div className="all-common-heading mb-4">
                  <h3>why do I need it?</h3>
                  <div className="line"></div>
                </div>

                <p>
                  Chemical peels are one of the most popular professional skin
                  care services today because they can improve the quality,
                  texture and color of skin. But they can also produce severe
                  side effects such as inflammation, discoloration and scarring
                  for up to several months. With BioActive Peel, you can get the
                  same powerful results without the associated risks or
                  downtime. In fact, your skin will look and feel healthier than
                  ever!
                </p>
              </div>
              <div className="mt-4 mt-lg-5">
                <div className="all-common-heading mb-4">
                  <h3>how does it work?</h3>
                  <div className="line"></div>
                </div>

                <p>
                  {`BioActive Peel is designed to work with the skin's chemistry,
                  not against it. When performed by a certified skin care
                  professional, it safely removes dull outer layers of skin and
                  helps the skin underneath regenerate for a smooth, radiant
                  complexion. In general, BioActive Peel can be tailored to
                  address:`}
                </p>
                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    skin roughness
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    signs of photodamage
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    fine lines and wrinkles
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    acne breakouts
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    skin congestion
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    some forms of hyperpigmentation and unbalanced skin tone
                  </li>
                </ul>
              </div>
              <div className="mt-4 mt-lg-5">
                <div className="all-common-heading mb-4">
                  <h3>what can I expect?</h3>
                  <div className="line"></div>
                </div>

                <p>
                  Your skin condition, skin concern and dedication to
                  post-treatment care will impact the frequency and results of
                  BioActive Peel treatments. Clients typically notice
                  dramatically improved skin quality, texture and tone within
                  three treatments. Ideally, a series of three treatments are
                  performed over a six- to twelve-week period, followed by
                  maintenance treatments twice a year.
                </p>
                <div className="img-border mt-4">
                  <Image
                    src="https://nmac.bm/images/bioactive/bioactive-peel-before-and-after.jpg"
                    className="img-fluid"
                    width={400}
                    height={600}
                    style={{ height: "auto", width: "100%" }}
                    alt="Service Image"
                  />
                </div>
              </div>
              <div className="mt-4 mt-lg-5">
                <div className="all-common-heading mb-4">
                  <h3>post treatment care</h3>
                  <div className="line"></div>
                </div>

                <p>
                {`Immediately after your BioActive Peel treatment, your skin may appear red and flushed. As your skin goes through the renewal process, it is normal to experience dryness, redness and tightness, as well as some peeling or flaking within a week. You may also notice a more pronounced appearance of pigmentation as it rises to the skin's surface. These side effects will subside quickly with proper post-treatment care, starting with the BioActive Peel After Care Kit.`}
                </p>
                <p>
                This kit includes: UltraCalming™ Cleanser, broad-spectrum Super Sensitive Shield SPF30 and two nourishing moisturizers, as well as AGE Smart Multivitamin Thermafoliant® to help buff away post-treatment peeling. In addition, ask your skin care professional for a fully customized Dermalogica skin care prescription to help ensure lasting results.
                </p>
                <div className="mb-3 mb-lg-0">
                 <iframe width="591" height="400" src="https://www.youtube.com/embed/CoWWm6W1GwM" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

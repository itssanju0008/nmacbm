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
            <h3>Microdermabrasions </h3>
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
              <h3>Crystal Free Microdermabrasion</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
                  Microdermabrasion is a state-of-the-art skin rejuvenation
                  system that gently abrades the surface of the skin using
                  crystal free tips. A controlled vacuum lifts off the dry,
                  damaged cell layers, leaving behind smoother, more vibrant
                  skin. With progressive treatments this exfoliation procedure
                  can remove damage caused by age, the sun and other
                  environmental factors, leaving the skin looking years younger.
                </p>
                <p>
                  Microdermabrasion is most often performed on the face, but can
                  also be used on hands, chest and other areas where rough skin
                  is prevalent; such as elbows, knees and heels.
                </p>
                <p>
                  {`Microdermabrasion is a useful skin care technique which can be
                  used alone or in combination with other procedures as a part
                  of an overall skincare program. Various options are available
                  depending on each person's individual needs.`}
                </p>
                <p>
                  Treatments are provided in a series of sessions, usually at
                  one to two week intervals.
                </p>
                <p className="mt-2">
                  <b>
                    Microdermabrasion has proven to be clinically effective for:
                  </b>
                </p>
                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Dry or oily skin
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Fine lines and wrinkles
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Sun damaged skin
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Hyperpigmentation
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Acne prone skin
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Comedone removal
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Scar tissue reduction
                  </li>
                </ul>
                <p className="mt-2">
                  <b>Patient benefits:</b>
                </p>
                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Non-invasive
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Painless
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    No recovery time
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Treats all skin types
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Instant gratification and effect
                  </li>
                </ul>
              </div>
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/microdermabrasion-image.png"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-4 mt-xl-5 mb-3 mb-lg-0">
                <div className="all-common-heading mb-4">
                  <h3>{`Contact our office now to book an appointment with us. We'd love to schedule you in!`}</h3>
                  <div className="line"></div>
                </div>
                <div className="img-border ">
                <Image
                  src="https://nmac.bm/images/sidemenu/pot.jpg"
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

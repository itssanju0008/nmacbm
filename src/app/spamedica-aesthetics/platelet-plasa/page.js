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
            src={"https://nmac.bm/images/aestheitcs-main.jpg"}
            alt="banner"
            width={100}
            height={300}
            style={{ width: "100%" }}
            className="img-responsive"
          />
        </div>
      </section>

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>Platelet Rich Plasma ®</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
          <div className="iv_nutrient"> 

              <div>
                <p className="">
                  {`Regeneration of new tissue is accomplished by the natural
                  stimulation of stem cells and a flood of growth factors to the
                  treated area. Platelet-rich plasma (PRP) is concentrated
                  platelets and bioactive proteins derived from the patient's
                  own blood. Once activated, platelets release growth factors
                  that stimulate cellular regeneration and accelerate tissue
                  repair.`}
                </p>
                <p>
                  PRP was initially used in wound healing, dentistry and in the
                  treatment of sports injuries. Over the recent years, the use
                  of PRP has evolved to address aesthetic concerns, hair
                  regrowth and <b>physiologic dysfunction </b> causing sexual
                  changes and impairment. PRP is one of the most advanced,
                  effective natural treatments for cellular rejuvenation that
                  can be safely used throughout the body.
                </p>
                <p>
                  Doctors Studio uses the most current and advanced PRP
                  processing methods and equipment. Dr. Roy is committed to
                  evolving her regenerative practice to advance the use of PRP
                  as common practice. StudioPRP.com is a group of medical
                  providers who join Dr. Roy in the commitment to best patient
                  outcomes when using PRP. Each one of the Studio PRP providers
                  use the Emcyte Pure PRP II system to process PRP.
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

              <div className="mt-4 mt-lg-5">
                <div className="all-common-heading mb-4">
                  <h3>How Does PRP Work?</h3>
                  <div className="line"></div>
                </div>

                <p>
                  A PRP treatment begins with a simple blood draw. PRP is
                  processed in an FDA approved medical device that separates and
                  harvests plasma, platelets, anti-inflammatory white blood
                  cells and bioactive proteins. The process to create PRP takes
                  under 10 minutes.
                </p>
                <div className="img-border mt-4">
                  <Image
                    src="https://nmac.bm/images/platelet-plasma-rich.jpg"
                    className="img-fluid"
                    width={400}
                    height={600}
                    style={{ height: "auto", width: "100%" }}
                    alt="Service Image"
                  />
                </div>
                <p>
                 {` The PRP is collected in a syringe and is injected back into
                  your tissues where it's needed. The growth factors that are
                  released upon injection stimulate stem cells to create new,
                  youthful tissue in areas like the face, scalp, sex organs,
                  muscles and joints. It's like turning back the cellular clock.
                  What was old and damaged is repaired and made new; the essence
                  of regenerative medicine.`}
                </p>

                <p>
                  {`The beauty of treatment with PRP is the use of your own body's
                  regenerative power. There is no risk of reaction or rejection
                  since your body readily accepts the regenerative signal as its
                  own. PRP procedures are minimally invasive and with very
                  little discomfort and downtime.`}
                </p>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Advantages of Using PRP</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="patient-info d-block d-lg-flex gap-lg-5">
                    <div>
                      <ul className="patient-info-list mt-3 w-100">
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          WRINKLED OR SAGGING SKIN
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          {`FROWN LINES, CROW'S FEET`}
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          ACNE
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          SCARRING
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          ROSACEA
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          ERECTILE DYSFUNCTION
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          P{`EYRONIE'S DISEASE`}
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          URINARY INCONTINENCE
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          SEXUAL WELLNESS
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          VAGINAL DRYNESS
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          PAIN WITH INTERCOURSE
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          LICHEN SCLEROSIS
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          HAIR REGROWTH
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          JOINT AND MUSCLE PAIN
                        </li>
                      </ul>
                    </div>
                  </div>
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

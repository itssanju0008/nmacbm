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
            <h3>Ultrasound </h3>
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
              <h3>Ultrasound Slimming</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
                  Technological advances have made it possible to use
                  low-frequency ultrasound for localized fat reduction in such
                  areas as love handles, abdominal pouch, back fat and jowls
                  just name a few.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6"> <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/ultrasound_af3.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div></div>
                <div className="col-lg-4 col-md-6">  <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/ultrasound_af4.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div></div>
                <div className="col-lg-4 col-md-6"> <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/ultrasound_af2.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div></div>
                <div className="col-lg-4 col-md-6"> <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/ultrasound_af1.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div></div>
              </div>
             
            
             
             

              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>How Does It Work</h3>
                  <div className="line"></div>
                </div>

                <p>
                  {`The adipose tissue is specialized in storing energy as fat. It
                  is primarily composed by the lipocytes also known as fat
                  cells. The technique uses low frequency ultrasound. The
                  ultrasound waves are conducted through the skin, penetrate
                  directly into the adipose tissue and break it up into small
                  pieces causing micro-bubbles which turn fat into a liquid
                  substance (this phenomena is called "cavitation"). The liquid
                  is then easily vacuumed out from the body using the lymphatic
                  and urinary system.`}
                </p>

                <p>
                  When you work out, you have to wait until half an hour for the
                  cavitation to happen, with Ultrasound, it is reached from the
                  first minute of treatment.
                </p>

                <p>
                  Finally, it requires under no circumstances surgery or
                  anesthesia.
                </p>
              </div>
              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>How many sessions would I need?</h3>
                  <div className="line"></div>
                </div>

                <p>
                  A typical session lasts a maximum of 30 minutes ( 20 minutes
                  of effective ultrasound) depending on the patient and the area
                  treated.
                </p>

                <p>The interval between each session is on average a week.</p>

                <p>
                  A total of 3 to 8 sessions on average are necessary in order
                  to achieve the desired results depending on the area treated
                  and the patient.
                </p>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>The Advantage of Ultrasound Slimming</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="patient-info d-block d-lg-flex gap-lg-5">
                    <div>
                      <ul className="patient-info-list mt-3 w-100">
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Non invasive treatment
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          No need for hospitalization nor anesthesia
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          No scars nor long term marking of the skin
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Elimination of the fat through a natural process
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Very little discomfort
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Elimination of the fat through a natural process
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          30 min per session (20 min of effective ultrasound)
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Affordable
                        </li>
                      </ul>
                    </div>

                    <div className="mt-3 mt-xl-0">
                      <p>
                        <b>Smare Lipo</b>{" "}
                      </p>
                      <ul className="patient-info-list mt-3 w-100">
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Surgery{" "}
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Local Anaesthetic
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Pain and Swelling
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Infection, Scaring
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          4 Days to 1 Week Off Work
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Results seen over 3 Months
                        </li>
                      </ul>
                    </div>

                   <div className="mt-3 mt-xl-0">
                      <p>
                        <b>Traditional Lipo Suction</b>{" "}
                      </p>
                      <ul className="patient-info-list mt-3 w-100">
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Surgery
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          General Anaesthetic
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Pain & Swelling
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Infection & Scaring
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          1 Week Off Work
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Can result in flaccid skin tone
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 mb-3 ">
                <div className="all-common-heading mb-4">
                  <h3>Who should not undergo this treatment?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    <b>
                      You will NOT be able to start the treatment if any of the
                      below apply:
                    </b>
                  </p>
                  <ul className="patient-info-list mt-3 w-100">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      During menstruation (apply only to abdomen)
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Skin infections and diseases
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Acute fever
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Any other chronic diseases
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Heart diseases or pacemakers
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Autoimmune diseases, HIV or AIDS
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Autoimmune disorders
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Allergy to applied materials (eg. ceramic)
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Severe high blood pressure or circulation problems
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Cancer any form any time
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Deep vein thrombosis, varicose veins, thyroid, cancer,
                      epilepsy
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Hemorrhagic disease, trauma, vascular rupture
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Pregnant or breastfeeding
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Infectious diseases
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Inflammation of the veins, phlebitis
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Intrauterine device avoid abdomen
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Liver or kidney disease
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Wounds, sores
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Under 18
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

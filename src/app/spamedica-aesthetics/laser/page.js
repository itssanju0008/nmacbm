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
            <h3>Laser </h3>
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
              <h3>Laser Lipo Laser Slimming</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient mb-3 mb-xl-0">
              <div>
                <p className="">
                  Laser Lipo offers a fast, non invasive, pain free option to
                  inch loss and body re-shaping. Suitable for men and women,
                  Laser Lipo treatments can even be carried out in your lunch
                  break.
                </p>
                <p>
                  <b>
                    No Risks. No Side effects. No Surgery. No Pain. No Down
                    Time.
                  </b>
                </p>
                <p>
                  This fast clinically proven and FDA Approved treatment shows
                  almost instant results and is completely safe. A course of 6
                  to 8 treatments is recommended, twice a week over 4 weeks. On
                  average you can expect to loose approx 2 to 4 cm after the
                  first treatment and up to and even over 8 cm from the
                  circumference of the body area being treated after the course
                  is completed. This of course can vary from patient to patient.
                  There are quite a few variables including your own effort to
                  exercise as recommended and whether you choose to try to lose
                  a few pounds through healthy eating during the 4 week
                  treatment period.
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

              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>How Does It Work</h3>
                  <div className="line"></div>
                </div>

                <p>
                  Laser Lipo compares to surgical liposuction and other
                  Ultrasound or laser techniques. Fortunately, Laser Lipo is
                  much more affordable with the same results.
                </p>

                <p>
                  {" "}
                  Laser Lipo uses low levels of visible red laser light that
                  simulates the body&apos;s natural process for releasing stored
                  fat. This creates a safe and painless bio-stimulation effect
                  in the targeted fat tissue. A period of exercise post
                  treatment will ensure the complete metabolism and thus
                  elimination from the body of the freed fatty acids. Laser Lipo
                  does not produce any abnormal effects in the body or damage
                  body tissues such as cells, blood vessels or neighboring
                  nerves or vital organs. The treatment can be performed on all
                  skin types and body areas where unwanted fat is stored.
                </p>

                <p>
                  Independent clinical studies have shown Laser Lipo to be,
                  comparable to results achieved by liposuction. Additional
                  treatments improve results further. Results can be seen
                  IMMEDIATELY after each treatment as the fat cell contents are
                  released. Light exercise post treatment can accelerate the
                  removal of the released fat.
                </p>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Treatment Comparison Table :</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="patient-info d-block d-lg-flex gap-lg-5">
                    <div>
                      <p>
                        <b>Laser Lipo</b>{" "}
                      </p>
                      <ul className="patient-info-list mt-3 w-100">
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          No Surgery
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          No Anaesthetic
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Immediate Results
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          No Pain
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          No Down Time
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          No Side Effect
                        </li>
                      </ul>
                    </div>

                    <div>
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

                    <div>
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

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Who should not undertake laser treatments?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    <b>
                      Patients with the following conditions should not
                      undertake laser or light based treatments:
                    </b>
                  </p>
                  <ul className="patient-info-list mt-3 w-100">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Pregnant or lactating women
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Cancer or a history of cancer
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Pacemaker or implantable cardioverter defibrillators
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Liver or kidney disorders
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Cardiac / circulatory disorders
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Active infection or lymphatic disorder
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Autoimmune disorders
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Known photosensitivity to sun exposure or taking
                      medications that cause photosensitivity
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Known thyroid gland dysfunctions ( Treatment around the
                      neck, should be avoided)
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Open wounds or skin infections
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Metallic or other material implants or prosthetics where
                      treatment is desired
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>NMAC Videos </h3>
                  <div className="line"></div>
                </div>
                <div className="video-3-row">
                  {NmacData.map((patientdata) => (
                    <VideoCard key={patientdata.id} patientdata={patientdata} />
                  ))}
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

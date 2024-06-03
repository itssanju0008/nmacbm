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
            <h3>AESTHETICS </h3>
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
              <h3>Skin Tightening</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p>
                  <b>Radio Frequency Skin Tightening</b>
                </p>
                <p>
                  Radio Frequency Sculpting offers impressive cellulite
                  reduction, skin tightening, weight loss, wrinkle reduction,
                  and skin rejuvenation. This body contouring or facial
                  rejuvenation treatment is suitable for men and women wanting
                  to get rid of stubborn fat, cellulite or wrinkles
                  non-surgically in areas such as the stomach, thighs, buttocks
                  and arms. This amazing procedure is suitable where regular
                  exercise and diet have failed and requires no downtime.
                </p>
              </div>
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/frequencyskintightening.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>RF Benefits</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <ul className="patient-info-list mt-3 w-100">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Almost instant results
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Safe, effective, non-invasive
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      No downtime, long lasting results
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Quick, 30 minute treatment
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Cellulite reduction
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Body contouring and shaping
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Deep fat blasting
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
                      Skin tightening and rejuvenation, improve elasticity and
                      tone
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Take inches from waist, abdomen, thighs & buttocks
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How does Radio-frequency Work?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="patient-info  gap-lg-5">
                    <div>
                      <p>
                        <b>It works in a number of ways:</b>{" "}
                      </p>
                      <p>
                        1.<b>Tissue Retraction:</b> The generated heat causes
                        local contraction of the collagen fibres, thereby
                        immediately tightening the skin to remodel and
                        rejuvenate the previous effects of ageing.
                      </p>
                      <p>
                        2.<b>New Collagen Formation</b> by local fibroblasts is
                        stimulated by heating the dermis and it then acts as a
                        new deep foundation for the skin. This produces further
                        delayed tightening which only becomes evident slowly
                        over the next few months.
                      </p>
                      <p>
                        3.<b> Improved Circulation:</b> Radio-frequency also
                        improves blood flow and lymphatic drainage, thereby
                        providing a better oxygen supply and greater toxin
                        clearance to reduce the further effects of ageing.
                      </p>
                      <p>
                        This unique combination of processes thus provides both
                        an immediate uplifting effect but also further longer
                        term skin tightening, restructuring and rejuvenating
                        benefits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How the Treatment Process works?</h3>
                  <div className="line"></div>
                </div>
                <div className="iv_nutrient ">
                  <div>
                    <p>
                      <b>How the Treatment Process works?</b>{" "}
                    </p>
                    <p>
                      RF heats the fat cells in the adipose layer. The heat
                      forces the adipocytes to secrete fatty acids into the
                      lymph nodes and blood vessels, where it is filtered out of
                      the body. As fatty acids are released, the adipocytes
                      shrink and the body becomes slimmer.
                    </p>
                  </div>

                  <div>
                    <p>
                      <b>Skin Tightening Process</b>{" "}
                    </p>
                    <p>
                      RF heats both the dermal and subcutaneous layers of the
                      skin. This causes the collagen fibers in the treated area
                      to contract. The contractions of these fibers tighten the
                      skin creating an immediate effect. This energy also
                      increases the metabolism of fibroblasts resulting in the
                      production of new collagen fibers. This production results
                      in long term effects.
                    </p>
                  </div>

                  <div>
                    <p>
                      <b>Cellulite Reduction Process</b>
                    </p>
                    <p>
                      The enlargement of fat cells in the hypodermis pushes the
                      dermis against fibrous connective tissue causing
                      cellulite. Using ultrasound to explode these fat cells
                      removes the cellulite and immediately slims and tightens
                      skin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 iv_nutrient">
                <div className="all-common-heading mb-4">
                  <h3>Is it safe?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  {" "}
                  <p>
                    Radio-frequency has an excellent safety record and has been
                    used in dermatology, cardiology, neurosurgery and ENT for
                    over 70 years.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How does the treatment feel?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  {" "}
                  <p>
                    It is entirely pain-free and has no down-time. In fact, the
                    procedure actually feels very pleasant and soothing, akin to
                    a hot stone massage.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How many treatments will I need?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  {" "}
                  <p>
                    We normally recommend a course of 6 treatments at weekly
                    intervals in the first instance because it works by heating
                    tissues deep within the skin to stimulate blood flow and
                    collagen production for brighter, firmer skin with an
                    immediate eye lift. Thereafter, you can attend for periodic
                    top-ups as you feel appropriate, typically every 3 months
                    may be advisable.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Do I need any after-care?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  {" "}
                  <p>
                    No, in fact you can go straight back to work after a
                    lunch-time session with immediately visible benefits.
                    However, to enhance the longevity of the treatment, we would
                    recommend smoking cessation and the application of a
                    moisturiser with a high factor sun block .
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Is radio-frequency suitable for everyone?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  {" "}
                  <p>
                    Generally, yes because it is suitable for all skin colours
                    but it cannot be used in patients with pacemakers, metal
                    plates or pins in the treatment area, severe heart disease,
                    connective tissue diseases, pregnant or breastfeeding women,
                    etc.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Are there any other options?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  {" "}
                  <p>
                    Other methods of skin tightening include Nd:YAG lasers and
                    surgical face-lifts but radiofrequency is now considered the
                    gold standard, non-surgical method of skin tightening as it
                    provides the very best balance of results with comfort.
                  </p>
                </div>
              </div>
             <div className="row mb-3 mb-lg-0">
               <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-md-0">
                  <iframe width="100%" height="394" src="https://www.youtube.com/embed/POO0WDcriVo" title="Skin Tightening with Radio Frequency" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-md-0">
                  <iframe width="100%" height="394" src="https://www.youtube.com/embed/5-5q19fU1co" title="Radiofrequency Skin Tightening Treatments" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

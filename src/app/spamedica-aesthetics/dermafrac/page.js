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
              <h3>DermaFrac Microchanneling & Infusion</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
                DermaFrac Microchanneling & Infusion offers simultaneous delivery of infused ingredients in a pain-free, no downtime treatment. DermaFrac is an alternative to fractional laser treatments which offers the added benefit of active infusion of topicals without anesthesia and at a lower cost.
                </p>
                <p>
                It is designed expressly to drive topical solutions to penetrate deeper into the tissue, DermaFrac creates micro-channels to the DE junction while simultaneously infusing topicals to this all-important tissue layer.
                </p>
                <p>
                By combining precisely calibrated needle penetration and unprecedented infusion capability, DermaFrac takes infusion technology to a whole new level.
                </p>
                <p className="mt-3">
                DermaFrac is designed to improve:
                </p>
                <ul className="patient-info-list  w-100">
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Wrinkles
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Fine lines
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Acne
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Brown spots
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Dry skin
                        </li>
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Uneven pigmentation.
                        </li>
                      </ul>
              </div>
             

              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>The Science Behind DermaFrac</h3>
                  <div className="line"></div>
                </div>
<p><b>DermaFrac offers the best infusion of the best topicals for the best results.</b></p>
                <p>
                1. A precision-controlled hand piece with an insertable cartridge containing a high-grade infusion solution rolls across the skin under vacuum.
                </p>

                <p>
                2. Vacuum-assisted occlusion places the skin under tension for a pain-free treatment. More importantly, it assists the needle tips to penetrate uniformly to maximize the delivery of the topical infusion solutions into the papillary dermis.
                </p>

                <p>
                3. The vacuum pulls the skin into contact with hundreds of micro-needles that painlessly penetrate through the epidermis and into the upper dermis (papillary layer).
                </p>
                <p>
                4. The micro-channels create pathways for introducing the infusion solution into the area of the skin that is most beneficial to the natural rejuvenating process.
                  </p>
                  <p>5. The depth of the needles has been carefully selected so that the channels are created just below the dermal-epidermal (DE) junction and just above capillaries and nerve endings. This ensures no bleeding or pain.</p>
                  <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/science.png"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Perfecting the science of topical serums for skin rejuvenation.</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="patient-info d-block d-lg-flex gap-lg-5">
                    <div>
                      <p>
                      The topical solutions we have developed maximize the skin rejuvenation process. Their viscosity and molecular size are specifically designed to deliver greater penetration. Our goal is simple: maximum results for your clients and maximum profits for you!
                      </p>
                      <div className="img-border mt-4">
                        <Image
                          src="https://nmac.bm/images/sidemenu/machine.jpg"
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
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>DermaFrac eliminates:</h3>
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
                      Heat issues and the complications and expense of laser treatments.
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      The extra step and inefficiency of delivering topicals separately into the skin.
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Risk for darker skin types.
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      The need for anesthesia.
                    </li>
                  
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>DermaFrac delivers:</h3>
                  <div className="line"></div>
                </div>
                <div>
                 
                  <ul className="patient-info-list mt-3 w-100">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      High-grade active ingredients to the dermal layer including anti-aging peptides, skin lighteners, hyaluronic acid moisturizers, and acne treatments.
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Effective procedures with a pleasant client experience.
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Repeat customers and more profits.
                    </li>

                    <div className="video-3-row my-3">
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/VgOuja75uPg" title="NMAC Introducing the DermaFrac Skin Treatments" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                  
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

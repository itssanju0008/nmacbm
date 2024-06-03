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
            height={400}
            style={{width:"100%"}}
            className="img-responsive"
          />

        
        </div>
      </section>

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>The Vampire Facial®</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
                Platelet Rich Plasma (PRP) works on the simple basis of utilizing your own natural platelets to instruct the body to create new collagen for tauter, smoother and better-toned skin. It is a simple in-office nonsurgical procedure which uses a concentrated serum processed from your own blood in conjunction with dermal filler to increase the effectiveness and longevity of those fillers.
                </p>
                <p>
                {`A small vial of blood is taken from your arm – less than that normally taken for routine blood tests. The blood is then placed in a vial and spun in a centrifuge to separate the red blood cells and plasma. The process concentrates the platelet count to about 4X normal. It is this platelet-rich plasma – often called "liquid gold" – that is then activated and injected into the skin.`}
                </p>
               
              </div>
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/aesthetics/prp-image.png"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-5">
                
              <div className="video-3-row my-3">
                <div>
                   <iframe width="100%" height="260" src="https://www.youtube.com/embed/m8wFv-KOPkI" title="PRP on the Doctors show" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="100%" height="260" src="https://www.youtube.com/embed/HyhTGexjxSA" title="Vampire Facelift at Northshore Medical &amp; Aesthetics Center" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
                </div>
                <p>
                The Vampire Facial® is a very simple yet incredibly effective strategy for rejuvenating the skin. Platelet-rich plasma (PRP) derived from your own blood is applied and worked into the skin with a professional micro-needling device. The micro-needles create tiny punctures in the skin, thus activating the collagen and elastin cascades to create new cells and rejuvenation. The PRP is added topically to stimulate new blood vessels, collagen, and elastin, thus accelerating and enhancing rejuvenation and regeneration. Adding PRP to the effective micro-needling procedure creates an unmistakable glowing skin.
                </p>

                <p className="mt-2">
                The Vampire Facial® is excellent for those suffering from Rosacea, acne, sensitive skin, scarring, sun damage or simply desire to maintain beautiful skin. The healing and anti-inflammatory effects of PRP work to correct skin problems and to strengthen the integrity of the skin to prevent future skin problems.
                </p>

             
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Benefits of a Vampire Facial</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="patient-info d-block d-lg-flex gap-lg-5">
                    <div>
                     
                      <ul className="patient-info-list mt-3 w-100">
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          A FRESHER, MORE YOUTHFUL NATURAL APPEARANCE
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          {`THE SKIN DEVELOPS A "YOUNGER" COLOR BECAUSE OF NEW BLOOD VESSEL FORMATION.`}
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          BECAUSE THE GROWTH FACTORS ARE WORKING TO BUILD A NEW DERMIS, THE EPIDERMIS (THE OUTER MOST LAYERS OF YOUR SKIN) APPEARS SMOOTHER AND HEALTHIER.
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          INFLAMMATION CAUSED BY ACNE AND/OR ROSACEA IMPROVES OR RESOLVES.
                        </li>

                       
                      </ul>
                    </div>


                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>What to expect during the procedure?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                  The initial injection of hyaluronic acid fillers is done skillfully to create a more youthful shape. Once the desired shape is accomplished, PRP is injected strategically to fuel the rejuvenation process. PRP ultimately contributes to the appearance of a younger version of you, with improved skin quality, color and texture. With the Vampire Facelift®, you can achieve a youthful and natural look without surgery and with minimal downtime.
                  </p>
               <p className="mt-3">The Vampire FaceLift® takes cosmetic rejuvenation to a higher level.</p>
               <div className="video-3-row my-3">
               <iframe width="100%" height="260" src="https://www.youtube.com/embed/TB8lUm8hjOw" title="Vampire Facial Live Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

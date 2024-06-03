'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./sexual_health.css";
import { IoMdCheckmark } from "react-icons/io";
import VideoCard from "../shared/VideoCard"
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";


const SexualHealth = () => {
  const [data,setData]=useState(null);
  const getData=async()=>{
    try {
      const res=await authApi.get(`service/sexual-health`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData();
  },[])
  const SexualHealthData = [


    {
      id: 1,
      title: "O Shot on TheDoctors TV show ",
      videoUrl: "https://www.youtube.com/embed/fBwpGpc3v8w?si=SrH2H_XKXKbA-eKy",
      isYouTube: true,
    },
  
   
  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Sexual Health",
    description:`"To get right care , you need the right doctor - you have
    come to the right place !"`
  };

  return (
    <>

     {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>

     {/* banner */}


      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>What is the O-Shot</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="salonb-info">
              <p>
                <i>
                &quot;Isolation followed by injection of blood-derived growth
                  factors for the purpose of amplification and rejuvenation of
                  orgasm-producing vaginal tissue. This is for the purpose of
                  more youthful appearance and improved sexual function. &quot;
                </i>
              </p>
              <p>
                Collagen has been used for many years for injection into the
                vagina for help with urinary incontinence and for G-spot
                augmentation, however Collagen has more side effects than does
                Platelet Rich Plasma (PRP); PRP comes from your own body-and is
                not even classified as a drug.
              </p>

              <p>
                The O-Shot is a non-surgical cosmetic rejuvenation procedure
                which begins with a quick and easy blood draw. It involves
                isolation of PRP, then using a proprietary technique, growth
                factors are then extracted from your blood and concentrated into
                the PRP. The method of isolating the PRP is an FDA approved
                process. Injection of the PRP temporarily amplifies, augments
                and rejuvenates the vaginal tissue, the Grafenburg spot
                (G-Spot), the clitoris, and the labia.
              </p>
              <p>
                <b>
                  <i>&quot;Isn&apos;t it about time the girls have their turn?&quot; </i>
                </b>
              </p>

              <div className="row mt-2 ">
                <div className="col-lg-6 col-md-12 col-sm-12 mt-3 mb-3">
                  <div className="img-border">
                    <Image
                      src="/service-img/o-shot-1.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                  <p className="mt-2 mb-1">
                    PRP is injected directly under the clitoris to increase
                    sensitivity and sexual arousal.
                  </p>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 mt-3 mb-3">
                  <div className="img-border">
                    <Image
                      src="/service-img/o-shot-2.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                  <p className="mt-2 mb-1">
                    PRP is also injected into the upper Vagina between the top
                    of the Vagina and the Urethra. This helps with collagen
                    production which makes the area relatively firmer. This can
                    lead to improvement / resolution of urinary incontinence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="all-common-heading mb-3">
                <h3>Benefits of the O-Shot</h3>
                <div className="line"></div>
              </div>

              <div className="patient-info salonb-info">
                <ul className="patient-info-list mt-2">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Rejuvenates and promotes new tissue growth
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Improved sexual capabilities
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Increases sensation & pleasure
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Improves or Resolves Urinary Incontinence
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Enhanced Appearance
                  </li>
                </ul>
              </div>
            </div>

            <div className="row mt-4">
               <div className="col-lg-8 col-md-12 ">
               <div className="all-common-heading mb-4">
                <h3>How do you know if THE O-SHOT is right for you? : </h3>
                <div className="line"></div>
              </div>
              <div className="salonb-info">
              <p>
                Dr. Brown is one among a select number of physicians trained,
                and certified to administer this innovative new treatment that
                uses the patient&apos;s own blood Platelets & growth factors to
                rejuvenate the female genitalia, allow more blood flow in the
                area, improve or eliminate urinary incontinence, enhance
                sensitivity and deliver long lasting improvement in sexual
                function.
              </p>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3> What is the Priapus Shot : </h3>
                  <div className="line"></div>
                </div>

                <div className="salonb-info">
                  <p>
                    The Priapus Shot, (also known as the P-shot) is designed to
                    deliver lasting improvements in sexual performance to men,
                    especially those who have lost function due to an enlarged
                    prostate, prostate cancer, the after-effects of surgery,
                    drug side effects and other conditions such as diabetes.
                  </p>
                  <p>
                    The Priapus Shot procedure begins with a quick and easy
                    blood draw. Then, using a proprietary technique, the growth
                    factors are extracted from your blood and concentrated into
                    the Platelet Rich Plasma (PRP). PRP is the injected into
                    areas of the penis that are most important for the sexual
                    response. These areas are numbed with a local anesthetic
                    cream before injection, yielding little or no discomfort
                    during the procedure.
                  </p>
                </div>
              </div>
               </div>

               <div className="col-lg-4 col-md-12">
                  <div className="img-border  mb-2 ms-0 ms-lg-4">
                    <Image
                      src="/service-img/p-1.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>

                  <div className="img-border  ms-0 ms-lg-4">
                    <Image
                      src="/service-img/p-2.png"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
               </div>


              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How Does Priapus Shot Work?</h3>
                  <div className="line"></div>
                </div>

                <div className="salonb-info">
                  <p>
                    Platelet Rich Plasma contains many growth factors and
                    healing factors. PRP has regenerative abilities and thus
                    stimulates healing and rejuvenation.
                  </p>
                  <p>
                    The resulting benefits typically include tissue growth that
                    increases growth of new blood vessels and improved
                    circulation within the penis, stronger erections, increased
                    sensation and pleasure and enhanced sexual performance. Some
                    men report changes in girth and length of the penis. Many of
                    these benefits are experienced immediately after receiving
                    the injection. And, because the treatment uses the patient&apos;s
                    own blood derived plasma, it is non-allergenic and free of
                    harmful side effects.
                  </p>
                </div>

             </div>
            </div>

            <div className="mt-4">
              <div className="all-common-heading mb-3">
                <h3>What Will The Priapus Shot Do For You?</h3>
                <div className="line"></div>
              </div>
              <p>Although each man&apos;s experience varies, most men report these benefits following the procedure and post-treatment protocol:

</p>
              <div className="patient-info ">
                <ul className="patient-info-list">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Increases firmness of erection


                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Increases blood flow and circulation


                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Improved sexual capabilities


                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Increase sexual stamina

                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Enhanced appearance



                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Improves or resolves prostate discomfort



                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Improves or resolves urinary incontinence


                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 salonb-info">
              <div className="all-common-heading mb-2">
                <h3>How Do You Know If The Priapus Shot Is Right For You?
</h3>
                <div className="line"></div>
              </div>
              <p> Dr. Brown is one among a select number of physicians trained, certified to administer this innovative new treatment that uses the patient&apos;s own blood Platelets & growth factors to rejuvenate the penis, allow more blood flow to the organ, enhance nerve sensitivity, and deliver enduring improvement in sexual function.

</p>

              <div>

                 <div className="video-row mt-4">
                 <iframe width="356" height="200" src="https://www.youtube.com/embed/fBwpGpc3v8w" title="O Shot on TheDoctors TV show" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SexualHealth;

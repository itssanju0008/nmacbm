"use client";
import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";
import BannerSection from "../shared/BreadCrum";



const Ultrasound = () => {

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "ULTRASOUND",
  };

  return (
    
  <>

    {/* banner */}

    <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title}/>

    {/* banner */}

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3> Nmac Now Provides Ultrasound Services! </h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="iv_nutrient">
              <p>
                <b>
                  Convenience is a top priority when it comes to your health!
                  <br></br>
                  Get your Ultrasound referrals sent to Northshore Medical.
                </b>
              </p>
              <h3 className="sub-common-title">
                About our UltraSound Machine{" "}
              </h3>

              <p>
                An ultrasound is a safe and painless way to see inside your
                body. Diagnostic ultrasound, also called sonography or
                diagnostic medical sonography, is an imaging method that uses
                high-frequency sound waves to produce images of structures
                within your body. The images can provide valuable information
                for diagnosing and treating a variety of diseases and
                conditions. The technology is similar to that used by sonar and
                radar, which help the military detect planes and ships. An
                ultrasound allows your doctor to see problems with organs,
                vessels, and tissues without needing to make an incision. Unlike
                other imaging techniques, ultrasound uses no radiation. For this
                reason, it’s the preferred method for viewing a developing fetus
                during pregnancy.
              </p>
              <p>
                <b>
                  Your doctor may order an ultrasound if you’re having pain,
                  swelling, or other symptoms that require an internal view of
                  your organs. An ultrasound can provide a view of the :{" "}
                </b>
              </p>
              <div className="patient-info d-block d-md-flex gap-4">
                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Abdomen – IVC, AO, liver, kidney, gallbladder, pancreas,
                    spleen
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Vascular – aorta, carotid artery
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Pelvic – ovaries, uterus, endometrial
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Renal{" "}
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Bladder & Prostate
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Leg Doppler
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Thyroid – lobes, isthmus
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Testicular – testes, scrotal
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Obstetrics
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Soft tissue – lumps, bumps
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Breast
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Eyes
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Blood vessels
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Scrotal
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Transvaginal
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Joints
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Soft Tissue
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Venous Doppler
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Arterial Doppler
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Carotid
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    and so much more...
                  </li>
                </ul>

                <div
                  className="img-border mt-4"
                  style={{ height: "fit-content" }}
                >
                  <Image
                    src="/service-img/ultrasound_banner.jpg"
                    className="img-fluid"
                    width={400}
                    height={600}
                    style={{ height: "auto", width: "100%" }}
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="all-common-heading mb-4">
                <h3>Why it&apos;s done? </h3>
                <div className="line"></div>
              </div>

              <p>
                <b>Ultrasound is used for many reasons, including to : </b>
              </p>
              <ul className="patient-info-list mt-3 w-100">
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  View the uterus and ovaries during pregnancy and monitor the
                  developing baby&apos;s health
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Diagnose gallbladder disease
                </li>

                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Evaluate blood flow
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Guide a needle for biopsy or tumor treatment
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Examine a breast lump
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Check your thyroid gland
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Detect genital and prostate problems
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Assess joint inflammation (synovitis)
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Evaluate metabolic bone disease
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <Link
                className="btn btn-book"
                href="/visiting-specialist-schedule"
              >
                SEE OUR SPECIALISTS SCHEDULE HERE.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ultrasound;

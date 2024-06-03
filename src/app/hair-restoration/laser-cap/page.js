import React from "react";
import Image from "next/image";
import "./laser.css";
import { IoMdCheckmark } from "react-icons/io";
import VideoCard from "../../shared/VideoCard";
import ServiceSidebar from "../component/ServiceSidebar";

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
            src={"https://nmac.bm/images/aesthetic.jpg"}
            alt="banner"
            width={1920}
            height={500}
            className="img-responsive"
          />

          <div className="breadcrum-title text-center">
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
              <h3>What is LaserCap?</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div>
              <div>
                <p>
                  LaserCap is a portable, hands-free, cordless and rechargeable
                  low level laser therapy device designed to deliver laser
                  therapy to the scalp in a convenient and discreet way.
                  LaserCap is a breakthrough device that may render hand-held
                  lasers obsolete.
                </p>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>
                    How does LaserCap compare to in-office clinical laser
                    therapy units?
                  </h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    LaserCap contains 224 individual laser diodes which each
                    emit 5mW of power at a wavelength of 650nm. The LaserCap
                    provides more laser energy per minute than existing clinical
                    in-office) laser devices at the exact same wavelength.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>
                    How does LaserCap compare to hand-held laser therapy units?
                  </h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    LaserCap provides a completely hands-free treatment to the
                    scalp, allowing the user to freely roam and do other
                    activities, if desired, while the treatment is underway.
                    LaserCap is sized to fit within most hats, but it can also
                    be hidden under a scarf or bandana or used without a hat.
                  </p>

                  <div className="img-border mt-4">
                    <Image
                      src="https://nmac.bm/images/sidemenu/lasercap1.JPG"
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
                  <h3>How do I use LaserCap?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Recommended treatment with the LaserCap is thirty (30)
                    minutes, every other day. Please refer to the Operations
                    Manual for instructions on charging, storage, maintenance
                    and troubleshooting.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Is LaserCap safe?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    LaserCap meets or exceeds all federal safety and
                    manufacturing standards. As a Class 3R laser, the LaserCap
                    is considered safe when used as directed. Laser therapy is a
                    100% painless treatment that has absolutely no side-effects.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How does Laser Therapy work?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                  {`  Laser therapy is the use of visible wavelengths of light
                    (e.g. 'red') which have a biological effect on cells. It is
                    known that wavelenghts of light produced by the diodes of
                    the LaserCap are associated with an increase of energy
                    production within the cells and which may be the primary
                    mechanism for helping patients hair follicles produce
                    thicker, healthier looking hair.`}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>
                    Can I use LaserCap in conjunction with Propecia, Minoxidil
                    or other treatments?
                  </h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Laser Therapy can be used as a stand-alone treatment regimen
                    or in conjunction with FDA-approved medications. Laser
                    Therapy has also been show the accelerate healing and
                    decrease discomfort after hair transplant surgery.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Where can I get a LaserCap?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    LaserCap is available from the Northshore Medical &
                    Aesthetics Center.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Am I a good candidate for LaserCap?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Because hair loss and hair thinning are medical conditions
                    that may be influenced by many factors, including heredity,
                    medications, illness, stress, nutrition, lifestyle, etc. and
                    may get worse with time, Dr. Brown recommends that all
                    patients have a thorough medical consultation before
                    initiating any hair restoration regimen. Baseline
                    evaluations, tracking measurements and standardized medical
                    photos are critical to provide an objective measurement of
                    your progress.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>PRP specific cells that causes hair growth include:</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <ul className="patient-info-list mt-3 w-100">
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Platelet-Derived Growth Factor (PDGF)—promotes blood
                      vessel growth, cell replication, skin formation;
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Transforming Growth-Factor-Beta (TGF-b)—promotes growth of
                      matrix between cells, bone metabolism;
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Vascular Endothelial Growth Factor (VEGF)—promotes blood
                      vessel formation;
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Epidermal Growth Factor (EGF)—promotes cell growth and
                      differentiation, blood vessel formation, collagen
                      formation;
                    </li>

                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Fibroblast Growth Factor-2 (FGF-2)—promotes growth of
                      specialized cells and blood vessel formation; and,
                    </li>
                    <li>
                      <IoMdCheckmark className="me-3 link-text arrow-size" />
                      Insulin Like Growth Factor - (IGF)—a regulator of normal
                      physiology in nearly every type of cell in the body.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Does PRP work?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    While individual results vary and no guarantees of success
                    can be made, preliminary studies indicate many patients
                    respond to PRP therapy. Some hair restoration physicians
                    apply PRP to the scalp for those patients who are not
                    surgical candidates every three (3) to four (4) months.
                    Other protocols will use PRP before or during surgery to
                    insure graft survivability.
                  </p>
                  <p>
                    PRP is an emerging non surgical based therapy for natural
                    stimulation for thinning hair. Larger clinical studies are
                    pending but the current medical literature contains numerous
                    positive results. Although a few controlled studies exist,
                    anecdotal and case reports are the primary sources
                    reflecting success with PRP therapy.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Who should not have PRP Treatment?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Patients with history of heavy smoking, drug and alcohol
                    use. Medical diagnosies such as platelet dysfunction
                    syndromes, thrombocytopenias, hypofibrinogenaemia,
                    hemodynamic instability, sepsis, acute and chronic
                    Infections, chronic liver disease, anti-coagulation therapy,
                    chronic skin diseases or cancer, metabolic and systemic
                    disorders.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Is PRP for me?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    PRP has been used successfully in other medical and surgical
                    disciplines for many years. The decision to use PRP is a
                    personal decision and should be made after careful research,
                    consideration and consultation with a physician. PRP is safe
                    and natural because the procedure concentrates the good
                    cells from your own body directly back into the area where
                    it is needed. There is absolutely no chance of getting a
                    blood infection from another human being. PRP involves using
                    your own cells and it will not be rejected by your immune
                    system.
                  </p>
                  <p>
                  {`  Clinical trials are not complete and medical data is not yet
                    published to determine the effectiveness of PRP therapy in
                    hair restoration. PRP should not be considered a "cure" for
                    hair loss and no guarantee can be made about its individual
                    effectiveness. No claim of PRP efficacy in promoting hair
                    growth can be made because there is no FDA approval that
                    would allow such claims to be made.`}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Can I use other Medical Therapies concurrently?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Absolutely. In fact, we encourage it and prescribe PRP
                    therapy as a compliment to a nonsurgical approach for those
                    patients who are not eligible for surgery or who want to
                    delay hair restoration surgery. As a non-surgical treatment
                    option, we recommend PRP therapy along with Minoxidil and
                    DHT blockers or for those patients who can not tolerate or
                    have side effects with these medications.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Conclusion</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    In summary, PRP therapy offers a promising alternative for
                    natural hair growth for those patients who are not
                    candidates for surgery. It also is a beneficial therapy for
                    surgical patients who want PRP therapy as a complimentary
                    procedure at the same time hair restoration surgery with
                    either automated FUE or the STRIP procedure.
                  </p>
                  <p>
                    Whether you are looking for additional hair stimulation, or
                    are looking to have hair surgery with the addition of PRP,
                    OC Hair Restoration center is able to meet your needs.
                    Although results will vary from patient to patients, PRP as
                    a non-surgical option offers patients with miniaturization
                    and hair thinning improvement in hair caliber and thickness.
                  </p>
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

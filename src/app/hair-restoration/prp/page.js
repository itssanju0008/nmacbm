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
              <h3>PRP + A-Cell for Hair Restoration</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div>
              <div>
                <p>
                  At the Northshore Medical & Aesthetics Center, we have been
                  performing PRP therapy as a proactive therapeutic option for
                  male and female patients experiencing hair loss. PRP is an
                  exciting non-surgical therapeutic option for patients who
                  require stimulation of hair growth for hair loss conditions.
                </p>
                <p>
                  Recent scientific research and technology provides the medical
                  community with new understandings of wound and tissue healing.
                  As a result of these scientific studies, we know PRP is an
                  all-natural medical procedure performed in physicians offices
                  for hair loss or conditions causing hair thinning. In a recent
                  study published in Dermatologic Surgery, physicians in Korea
                  published data supporting the clinical application of PRP in
                  hair restoration.
                </p>

                <div className="img-border mt-4">
                  <iframe
                    width="853"
                    height="480"
                    src="https://www.youtube.com/embed/QnAyxQlXnvM"
                    title="PRP Procedure for Hair Restoration"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How does PRP work?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Human blood contains mesenchymal stem cells and autologous
                    blood products that contain essential and specific growth
                    factors that assist in tissue regeneration and healing.
                    Published medical literature from Europe and the United
                    States confirms the safety and use of PRP therapy. PRP
                    therapy has established itself to be effective as a medical
                    treatment modality in the specialty fields of oral surgery,
                    neurosurgery, plastic and cosmetic surgery, sports medicine
                    and orthopedics. It has been used extensively in these
                    specialties for the last two decades with generally positive
                    outcomes and success. In the field of hair restoration,
                    existing evidence demonstrates PRP therapy as a promising
                    treatment option to promote hair growth.
                  </p>
                  <p>
                    While PRP is in the early stages of scientific research in
                    hair restoration, PRP is not meant to replace current FDA
                    approved therapies such as DHT blockers and Minoxidil. but
                    it is a promising non-surgical therapeutic option for those
                    patients with hair loss.
                  </p>
                  <div className="img-border mt-4">
                    <Image
                      src="https://nmac.bm/images/sidemenu/img-prp.png"
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
                  <h3>How do you perform the Procedure?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                   {` Blood is drawn in our office as though you are having
                    routine blood testing at your primary care physician's
                    office. The blood is spun in a centrifuge and the PRP is
                    separated and removed from the rest of the blood.`}
                  </p>
                  <p>
                    The PRP is taken from your body and is specially prepared by
                    spinning down the blood cells to a high concentration. After
                    centrifugation, the platelets and other vital growth
                    proteins raise to the top of the tube. Under a topical
                    anesthesia, a special micro needling roller device is used
                    to stimulate the dermis of the scalp. This micro needling
                    stimulation causes microtrauma to the dermis that induces
                    other healing and growth repair cells into action. The
                    highly concentrated platelet rich plasma (PRP) is then
                    injected into the scalp and topically.
                  </p>
                  <p>
                    {`The PRP contains many growth factors that stimulate the hair
                    follicle's growth. PRP can be used preoperatively,
                    intraoperatively, or post operatively. Some patient's chose
                    to have PRP performed every three (3) to four (4) months as
                    early data suggests regular or semiannual PRP treatments can
                    stimulate hair growth.`}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>The Science Of PRP</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    PRP contains special cells called Platelets, that can cause
                    growth of the hair follicles by theoretically stimulating
                    the stem cells located in the Dermal Papilla as well as
                    other structures of the hair follicle These special Platelet
                    cells promotes healing, accelerates the rate and degree of
                    tissue healing and regeneration, response of the body to
                    injury, and formation of new cellular growth. The primary
                    purpose of using PRP in hair restoration is to stimulate
                    inactive or newly implanted hair follicles into an active
                    growth phase.
                  </p>
                  <p>
                    Inside the Platelets are many intracellular structures such
                    as glycogen, lysosomes and alpha granules. These granules
                    within the PRP contain clotting and growth factors that are
                    eventually released during the healing and repair process.
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
              {`      Clinical trials are not complete and medical data is not yet
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
                  In summary, PRP therapy offers a promising alternative for natural hair growth for those patients who are not candidates for surgery. It also is a beneficial therapy for surgical patients who want PRP therapy as a complimentary procedure at the same time hair restoration surgery with either automated FUE or the STRIP procedure.
                  </p>
                  <p>
                  Whether you are looking for additional hair stimulation, or are looking to have hair surgery with the addition of PRP, OC Hair Restoration center is able to meet your needs. Although results will vary from patient to patients, PRP as a non-surgical option offers patients with miniaturization and hair thinning improvement in hair caliber and thickness.
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

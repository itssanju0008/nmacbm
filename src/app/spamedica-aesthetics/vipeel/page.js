import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import VideoCard from "../../shared/VideoCard";
import ServiceSidebar from "../../shared/ServiceSidebar";
import ImageCard from "./components/GalleryCard";
const Laser = () => {
  const NmacData = [
    {
      id: 1,
      title: "Laser Lipo Demo ",
      videoUrl: "https://www.youtube.com/embed/9e54EaL9z28?si=tRuU12d1ZFttYYUC",
      isYouTube: true,
    },
  ];
  const images = [
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter1.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter2.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter3.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter4.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter5.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter6.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter7.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter8.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter9.jpg" },
    { image: "https://nmac.bm/images/vipeel/vipeel-beforeafter10.jpg" },
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
            <h3>Vipeel </h3>
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
              <h3>A Flawless Complexion in 7 Days</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <ul className="patient-info-list  w-100">
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

              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>5 Targeted Formulas That Treat</h3>
                  <div className="line"></div>
                </div>

                <p>
                  <b>
                    Acne | Melasma | Aging Skin | Hyperpigmentation | Acne
                    Scarring
                  </b>
                </p>

                <p>
                  The VI Peel is a skin-resurfacing chemical peel that
                  stimulates collagen and increases cellular turnover to reveal
                  smoother and more radiant skin.
                </p>

                <p>
                  {`VI Peel has a peel for each skin concern. With 5 custom blends
                  targeted for each patients' needs, VI Peel helps treat all
                  skin concerns such as aging skin, active acne, acne scarring,
                  melasma, sun damage, keratosis Polaris and much more.`}
                </p>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Before/After</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="row mt-4">
                    {images?.map(
                      (Data, index) =>
                        Data?.image && (
                         <div key={index} className="col-xl-4 col-lg-3 col-md-6 col-sm-12 mb-3">
                           <ImageCard key={index} mediaData={Data} />
                         </div>
                        )
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Introducing our 5 Custom Blends</h3>
                  <div className="line"></div>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered w-100">
                    <thead>
                      <tr>
                        <th>VI Peel ORIGINAL</th>
                        <th>VI Peel PRECISION</th>
                        <th>VI Peel PRECISION PLUS</th>
                        <th>VI Peel PURIFY</th>
                        <th>VI Peel PURIFY With PRECISION PLUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tone & Texture</td>
                        <td>Enhanced Collagen Stimulation</td>
                        <td>Skin Discoloration</td>
                        <td>Active Acne & Oily Skin</td>
                        <td>Acne & Acne Scarring</td>
                      </tr>
                      <tr>
                        <td>Ages 13+</td>
                        <td>Ages 40+</td>
                        <td>Ages 18+</td>
                        <td>Ages 13+</td>
                        <td>Ages 18+</td>
                      </tr>
                      <tr>
                        <td>
                          <ul className="patient-info-list ">
                            <li>For first time peels</li>
                            <li>Sensitive skin</li>
                            <li>Early signs of aging (Ages 20+)</li>
                            <li>Rough texture</li>
                            <li>Keratosis Pilaris</li>
                            <li>Anti-aging</li>
                            <li>Rejuvenating</li>
                          </ul>
                        </td>
                        <td>
                        <ul className="patient-info-list ">
                            <li>Aging Skin</li>
                            <li>Wrinkles</li>
                            <li>Fine Lines</li>
                            <li>Sun Damage</li>
                            
                          </ul>
                        </td>
                        <td>
                        <ul className="patient-info-list ">
                            <li>UV-Induced Pigmentation</li>
                            <li>Sun Damage</li>
                            <li>Melasma</li>
                            <li>Post-Inflammatory Hyperpigmentation</li>
                            <li>Acne Scarring</li>
                            <li>Age Spots</li>
                            <li>Lightening</li>
                            <li>Great for Asian descent clients</li>
                          </ul>
                        </td>
                        <td>
                        <ul className="patient-info-list ">
                            <li>Active Acne</li>
                            <li>Breakout-Prone Skin</li>
                            <li>Oily and Congested Skin</li>
                            <li>Teen Acne</li>
                            <li>Great for Hispanic descent client</li>
                            
                          </ul>
                        </td>
                        <td>
                        <ul className="patient-info-list ">
                            <li>Excessive Oily Skin</li>
                            <li>Acne with Hyperpigmenation</li>
                            <li>Acne Scarring</li>
                            <li>Adult Acne</li>
                            <li>Lightening</li>
                            <li>Great for African descent clients</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Why choose the VI Peel?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    VI Peels represent the next generation in chemical peels.
                    Each treatment is virtually pain free with results in as
                    little as seven days. Unique from other peels, the VI Peel
                    nurtures the skin with vitamins and minerals during the
                    exfoliation process.
                  </p>
                  <p>
                    VI Peels are suitable for various skin types, including
                    darker skin tones. They offer specifically designed
                    treatments that are convenient and targeted to address:
                    anti-aging, hyperpigmentation, sun spots, damaged skin, acne
                    prone skin and acne scarring.
                  </p>
                  <p>
                    {`The VI Peel provides dramatic results with no skin
                    preparation and minimal downtime. The VI Peel also provides
                    you with a take home kit of essential products for your
                    treatment's success, ensuring optimal and lasting results.
                    Enjoy feeling more confident in your skin.`}
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

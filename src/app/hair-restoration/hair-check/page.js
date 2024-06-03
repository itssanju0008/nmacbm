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
            src={"/slider/slider.jpg"}
            alt="banner"
            width={1920}
            height={500}
            className="img-responsive"
          />

          <div className="breadcrum-title text-center">
            <h3>HAIR RESTORATION </h3>
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
              <h3>What is Hair Check?</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div>
              <div>
                <p>
                  Your HairNumberSM, also known as your Hair Mass Index (HMI),
                  is a single number that precisely and conveniently combines
                  hair density and hair caliber for quick, non-invasive method
                  tracking of hair loss or hair regrowth. Just like stepping on
                  a scale or monitoring your blood pressure, your HairNumberSM
                  is a sign of your hairs health.
                </p>
              </div>
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/hair-check.png"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Why do I need to know my HairNumber?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    By the time you notice hair loss with the naked eye, 50% of
                    your hair may already be gone. If you are concerned about
                    hair thinning, your HairNumber can help you easily and
                    accurately track your condition and response to treatment.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>
                    Does my HairNumber reflect the amount of hair growing (hair
                    density) or the thickness (caliber) of individual hairs?
                  </h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Actually, both! Small changes in hair caliber or hair
                    density which may not be visible to the naked eye can be
                    identified by monitoring your HairNumber.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>My HairNumber is decreasing. What can I do?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    A decreasing HairNumber may reflect a decrease in the
                    quality or quantity of hair in that area of scalp as a
                    result of many factors: heredity, nutrition/diet,
                    medications, stress, hair styling, illness, etc. A Hair
                    Coach Physician like Dr. Brown can help you determine the
                    cause of your hair loss and prescribe effective treatments.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>My HairNumberSM is increasing. What does that mean?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    An increasing HairNumberSM may indicate an improvement in
                    the quantity (density) or quality (thickness) of hair in a
                    given area of scalp.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>What can I do to increase my HairNumberSM?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                  There are many ways to improve the thickness, fullness and density of your hair ranging like nutritionals, phototherapy, medications and procedures. A hair coach physician, like Dr. Brown can help you design a results oriented treatment plan to help you reach your hair restoration goals.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How often should I have my HairNumberSM checked?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                  Because hair loss/hair regrowth changes can take months, HairNumberSM measurements are normally performed every 3 months. In some cases, monitoring may be done more or less frequently.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How is a HairNumberSM measurement performed?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                  A tiny area of scalp to be monitored is marked with four tiny, washable dots of ink. The hair within that square is carefully isolated and gathered in a bundle, which is then measured using a calibrated HairCheckTN device. More than one area may be measured to compare stable areas to areas of thinning. Think of it like a tiny, scientifically-measured ponytail!
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How much does a HairNumberSM measurement cost?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                  A HairNumber measurement costs typically around $50. But often, HairNumberSM measurements are performed routinely as part of a hair restoration treatment program.
                  </p>
                  <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/sidemenu/haircheck1.png"
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

          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 order-1 order-md-2">
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Laser;

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
            <h3>Laser Tattoo Removal </h3>
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
              <h3>Having second thoughts about your tattoo?</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p className="">
                  {`If so, you're not alone. Every day, we see patients from every
                  walk of life that have second thoughts about their tattoos.
                  What once seemed like a good idea just doesn't fit your new
                  image, and you wish it would just go away.`}
                </p>
                <div className="img-border mt-4">
                  <Image
                    src="https://nmac.bm/images/sidemenu/tatto-removal-pic.png"
                    className="img-fluid"
                    width={400}
                    height={600}
                    style={{ height: "auto", width: "100%" }}
                    alt="Service Image"
                  />
                </div>
              </div>

              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>How are tattoos removed?</h3>
                  <div className="line"></div>
                </div>

                <p>
                  {`We performs tattoo removal for patients with medical lasers
                  that work on colored as well as black inks. Medical lasers use
                  an intense beam of light to significantly lighten or
                  completely remove your tattoo. Different wavelengths of light
                  treat different colors of ink. When the ink particles of your
                  tattoo absorb the light from the laser, they are broken up
                  into tiny fragments. These fragments are then absorbed through
                  your body's natural cleansing mechanism. This cleansing
                  process generally takes a few weeks. Larger ink particles may
                  require multiple treatments.`}
                </p>
              </div>
              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>
                    How do laser treatments compare to other methods of tattoo
                    removal?
                  </h3>
                  <div className="line"></div>
                </div>

                <p>
                  Your other treatment options for removing your tattoo include
                  surgical excision, dermabrasion (or sanding) and chemical
                  peels. These methods are more invasive and painful, and can
                  often result in scarring. Laser removal is safer. It is
                  non-invasive and only targets the ink used in the tattoo
                  process.
                </p>
              </div>
              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>What are the treatments like?</h3>
                  <div className="line"></div>
                </div>
                <p>
                  Some patients say they feel a slight sting, like the snap of a
                  rubber band on the skin, followed by the feeling of sunburn.
                  Many treatments do not require anesthetics. However, some
                  patients feel more comfortable with a local numbing agent like
                  ice or an anesthetic cream. For others, a local anesthetic
                  injection may be beneficial.
                </p>
              </div>
              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>How many treatments will I need?</h3>
                  <div className="line"></div>
                </div>
                <p>
                  The number of treatments required for maximum improvement
                  depends on the size, location, depth and color of your tattoo.
                  Treatments should be placed 4 - 8 weeks apart to allow your
                  body to remove the maximum amount of tattoo pigment. Treatment
                  sessions usually take from 10 - 30 minutes.
                </p>
                <p>
                  Most patients will see improvement in their tattoos. The
                  improvement can be quite dramatic. However, large or heavily
                  pigmented tattoos applied by a professional tattooist can
                  require several treatments for optimum results.
                </p>
              </div>
              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>What will my skin look like after treatment?</h3>
                  <div className="line"></div>
                </div>
                <p>
                  After we perform your tattoo removal treatment, your skin may
                  have a white discoloration, and the area around the tattoo may
                  be reddish and could have some swelling. This is normal and
                  will disappear slowly over time. Maximum treatment results
                  take about 5 - 6 weeks.
                </p>
              </div>
              <div className="mt-5">
                <div className="all-common-heading mb-4">
                  <h3>Are there any side effects?</h3>
                  <div className="line"></div>
                </div>
                <p>
                  Occasionally, hypopigmentation, or a whitening of the skin,
                  may occur. But, normal skin tone should return within 6 - 12
                  months following your last treatment session. Since the ink
                  used in tattooing is not regulated, some patients have only
                  partial clearing even after several laser sessions.
                </p>
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

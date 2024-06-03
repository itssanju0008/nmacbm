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
            <h3>Laser hair</h3>
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
              <h3>Laser Hair Removal/Permanent Hair Reduction</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p>
                  <b>
                    Embrace the freedom and confidence that comes with permanent
                    hair reduction.
                  </b>
                </p>
                <p className="">
                  {`Liberate yourself from the constant need to shave and wax
                  unwanted facial and body hair in order to feel and look great
                  with the best in laser hair removal services! With light-based
                  permanent hair reduction, just a few simple treatments is all
                  it takes to permanently minimize hair growth, revealing clear,
                  silky skin that's ready to bare every day-and all year long.`}
                </p>
                <p>
                  {`Unlike shaving that lasts days, waxing that needs to be
                  repeated every few weeks indefinitely, or electrolysis that's
                  tedious, permanent hair reduction is a lasting solution that
                  takes away the everyday hassle of dealing with unwanted facial
                  and body hair. The secret lies in the light-based technology
                  that targets and destroys hair cells responsible for hair
                  growth without harming surrounding skin. It's a simple
                  approach to permanent hair reduction that's fast, easy and
                  FDA-cleared. Best of all, treatment sessions take just minutes
                  and are practically pain-free. It's the hair removal solution
                  you've been waiting for.`}
                </p>
              </div>

              <div className="mt-5">
                <div className="all-common-headig mb-4">
                  <h3>Frequently Asked Questions</h3>
                  <div className="lie"></div>
                </div>
                <div className="all-common-heading mb-4">
                  <h3>
                    What are the advantages of light-based permanent hair
                    reduction?
                  </h3>
                  <div className="line"></div>
                </div>
                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Excellentlong-term results
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Fast treatment sessions that can take only minutes
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Great for reducing hair from larger areas
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Comfortable treatments with no downtime
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>What areas can be treated?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div>
                    <p>
                      Light-based permanent hair reduction can remove hair from
                      faces (except around eyes), backs, chests, arms,
                      underarms, bikini lines and legs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Am I a good candidate for this procedure?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div>
                    <p>
                    Permanent hair reduction is available for all skin types, including very light and very dark skin, and most hair colors. Your provider will determine if you are a good candidate for the procedure based on a variety of factors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How does it work?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div>
                    <p>
                   {` Light is used to target and destroy hair follicles responsible for hair growth without harming surrounding tissue, so there's minimal risk.`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How long does it take?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div>
                    <p>
                    Permanent hair reduction treatments take just minutes for small areas and about a half hour for larger areas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How many treatments will I need?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div>
                    <p>
                    Several treatment sessions are recommended for the best aesthetic outcome. Permanent hair reduction technology can only affect hair in active phases of growth so several treatments are needed to affect all your unwanted hair. You do not need to let hair grow out between treatment sessions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>What will the treatment feel like?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div>
                    <p>
                    {`Most people feel only a slight, momentary "snap" at the treatment site during the procedure.`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>How quickly will I recover?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div>
                    <p>
                    You can resume regular daily activities immediately following treatment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Are there any side effects?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div>
                    <p>
                    Typically, most people experience a mild, sunburn-like sensation, possibly accompanied by some minor swelling, immediately following the treatment. This usually lasts two to 24 hours. Ask your provider to discuss other possible side effects and the necessary post-treatment care with you.
                    </p>
                    <div className="video-3-row mb-3 mb-lg-0">
                      <div>
                         <iframe width="100%" height="350" src="https://www.youtube.com/embed/H9Zn-qIpjjk" title="LightPod Neo for Safe, Gentle and Effective Treatment of PFB.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                    </div>
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

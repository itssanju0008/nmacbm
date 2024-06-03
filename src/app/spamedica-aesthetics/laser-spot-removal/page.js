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
            <h3>Laser spot removal</h3>
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
              <h3>Laser Lipo Laser Slimming</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div>
            
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/asthetic/laser-spot-removal-1.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-4 mt-lg-5 iv_nutrient">
               

                <p>
                Now, with the unique 650-microsecond pulse technology from Aerolase, you can safely and effectively use the 1064nm laser modality to remove pigmented conditions including sun & age spots, melasma and post-inflammatory hyperpigmentation.
                </p>
                <ul className="patient-info-list mt-3 w-100">
                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Effective & safe for all skin types
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          Targets epidermal & dermal pigment
                        </li>

                        <li>
                          <IoMdCheckmark className="me-3 link-text arrow-size" />
                          No skin cooling required
                        </li>

                      
                      </ul>
                <p>
                The Neo is so effective in breaking up hyperpigmentation, yet is also uniquely safe and gentle on darker skin types for applications like PFB and hair removal. That is because the fluences required for these applications are generally low due to the rich melanin concentration in the hair follicles in patients with skin of color, and the correspondingly high absorption of energy. Furthermore the 650-microsecond pulse technology of the Neo enables the skin to cool itself between pulses, such that skin cooling during treatment is not even necessary.
                </p>

                <p>
                With this laser we can remove pigmented spots in just one or two treatments without any patient discomfort or downtime whatsoever. The laser is safe to use on any skin type, which makes it exceptionally versatile within our practice.
                </p>
                <p>
                With its unique 650-microsecond pulse duration, this laser is very effective for removing spots on the face as well as on the hands. We use it extensively to treat melasma.
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

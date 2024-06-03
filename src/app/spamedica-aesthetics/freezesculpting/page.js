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
            <h3>Freezesculpting </h3>
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
            <div className="mb-3 mb-xl-0">
        
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/cool_sculpting-flyer.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Certificates</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="patient-info d-block d-lg-flex gap-lg-5">
                    <div className="row">
                     <div className="col-lg-6 col-md-12">
                     <div className="img-border mb-3">
                      <Image
                        src="https://nmac.bm/images/cert-1.png"
                        className="img-fluid"
                        width={400}
                        height={600}
                        style={{ height: "auto", width: "100%" }}
                        alt="Service Image"
                      />
                    </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                     <div className="img-border mb-34">
                        <Image
                          src="https://nmac.bm/images/cert-2.png"
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

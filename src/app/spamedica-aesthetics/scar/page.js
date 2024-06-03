import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import VideoCard from "../../shared/VideoCard";
import ServiceSidebar from "../../shared/ServiceSidebar";
import GalleryCard from "./components/GalleryCard";

const Laser = () => {
  const NmacData = [
    {
      id: 1,
      title: "Laser Lipo Demo ",
      videoUrl: "https://www.youtube.com/embed/9e54EaL9z28?si=tRuU12d1ZFttYYUC",
      isYouTube: true,
    },
  ];
  const images=[
    {image:"https://nmac.bm/images/scar/2-sml.jpg"},
    {image:"https://nmac.bm/images/scar/3-sml.jpg"},
    {image:"https://nmac.bm/images/scar/4-sml.jpg"},
    {image:"https://nmac.bm/images/scar/5-sml.jpg"},
    {image:"https://nmac.bm/images/scar/6-sml.jpg"},
    {image:"https://nmac.bm/images/scar/7-sml.jpg"},
    {image:"https://nmac.bm/images/scar/8-sml.jpg"},
    {image:"https://nmac.bm/images/scar/9-sml.jpg"},
    {image:"https://nmac.bm/images/scar/10-sml.jpg"}
  ]

  return (
    <>
      <section className="position-relative">
        <div className="after_slider breadcrum-banner">
          <Image
            src={"https://nmac.bm/images/aesthetic.jpg"}
            alt="banner"
            width={1920}
            height={500}
            style={{height:"auto",width:"100%"}}
            className="img-responsive"
          />

          
        </div>
      </section>

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-4">
              <h3>FDA cleared treatment for Keloid scars!</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div className="">
                <div className="all-common-heading mb-4">
                  <h3 className="text-info">What is Cryoshape</h3>
                  <div className="line"></div>
                </div>

                <p>
                Developed by a plastic surgeon, CryoShape™ is a breakthrough hand-held cryosurgical instrument for destroying deep tissue through intralesional intervention utilizing an extremely cold cryoprobe.
                </p>

                <p>
                The CryoShape probe effectively treats Keloids and Hypertrophic Scars via direct treatment of the deep scar material as well as an increased freezing area along the entire scar.
                </p>

                <p>
                Unlike other procedures, CryoShape requires only one session to significantly reduce scar volume - with minimal discomfort and recovery and no pigmentation changes of the surrounding skin.
                </p>
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Before & After Images * Images Obtained from CryoShape</h3>
                  <div className="line"></div>
                </div>
                <div>
                <div>
                  <div className="video-3-row my-3">
                    {images?.map(
                      (Data, index) =>
                        Data?.image && (
                          <GalleryCard key={index} mediaData={Data} />
                        )
                    )}
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

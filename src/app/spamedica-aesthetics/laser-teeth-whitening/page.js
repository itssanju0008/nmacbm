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
            <h3>Laser teeth whitening</h3>
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
              <h3>ARE YOU CONFIDENT IN YOUR SMILE?</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div>
             
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/theetwhitening-service.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-5 iv_nutrient">
                <p>
                {`"Some of our client’s teeth are stained and dark because they have internal stains on the tooth, not on the surface," says Dr. Kyjuan Brown, "Surface stains can come off generally with good regular teeth brushing and cleaning, but the deeper stains rooted in the enamel are what comes off only during our laser treatments”`}


                </p>

                <p>
                  {" "}
                  Laser teeth whitening is an extremely effective way to remove stains and discoloration from the teeth, leaving them whiter and brighter than before. Ask our many clients, laser teeth whitening works and is safer compared to other whitening methods, as it targets the accumulated pore particles, you get less abrasive enamel wear compared to other methods.
                </p>

                <p>
                Thank to this laser technology, the traditional teeth whitening process has been sped up significantly, with lasers spurring on the chemical reaction of the solution—and whitening teeth in half the time. How does it work? A light-activated 25 percent hydrogen peroxide gel is applied to the teeth before a blue plasma light activates the solution.
                </p>
                <p>As with all teeth whitening, the results do not last forever so we suggest you come back to us in 3 to 6 months.

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

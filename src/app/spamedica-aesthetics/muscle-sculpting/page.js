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
            <h3>Muscle sculpting </h3>
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
              <h3>Muscle Sculpting M-Sculpt</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
            <div className="iv_nutrient">
              <div>
                <p>
                  <b>Body-Contouring Treatment</b>
                </p>
                <p>
                  <b>BUILD MUSCLE & BURN FAT without THE SWEAT!</b>
                </p>

                <p>
                  For those who want to see better muscle definition in your
                  abs, arms, or buttocks!
                </p>
              </div>
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/muscle-sculpting-topimg.png"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-4">
                <p>
                  M-SCULPT is ideal for anyone looking to build muscle and
                  reduce fat to get defined arms, abs or butt lift who can not
                  spend long hours in the gym daily. Even daily gym goers can
                  not achieve the same results we can in only 2 weeks having
                  treatments twice a week, total 4 sessions with our 20,000
                  muscle contractions in only 30 minutes. Who can do 20,000
                  squats in 30 minutes to get the same results that M-Sculpt
                  does? Nobody can, this is while M-Sculpt is ideal to conserve
                  time and energy for the desired results.
                </p>

                <ul className="patient-info-list mt-3 w-100">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Nonsurgical fat-reduction
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Strengthening of the abdominal muscles
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Tone the buttocks
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    +16% average increase in muscle mass
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    -19% average fat reduction
                  </li>
                </ul>
              </div>
              <div className="img-border mt-4">
                <Image
                  src="https://nmac.bm/images/msculpt-pic2.jpg"
                  className="img-fluid"
                  width={400}
                  height={600}
                  style={{ height: "auto", width: "100%" }}
                  alt="Service Image"
                />
              </div>

              <div className="mt-4">
                <div className="all-common-heading mb-4">
                  <h3>Learn more! FAQS:</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <div className="patient-info  gap-lg-5">
                    <div>
                      <p>
                        <b>
                          What Does M-SCULPT actually feel like? How intense?
                        </b>{" "}
                      </p>
                      <p>
                        This treatment simply feels like an intense workout of
                        muscles in the area being treated. Your Specialist can
                        adjust the levels based on client feedback. You can lay
                        down and relax or even talk and watch TV during our
                        M-SCULPT treatments.
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>Are Results Fast?</b>{" "}
                      </p>
                      <p>
                        Yes, results are felt right after the treatment, similar
                        to an intensive workout of the target area muscles, with
                        visible results seen two to four weeks after the last
                        session in the series of treatments. The underlying
                        muscles require time to adapt and strengthen. Visible
                        results continue to improve for weeks to months after
                        the treatment series.
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>
                          How many treatments do you recommend to see results?
                        </b>{" "}
                      </p>
                      <p>
                        During your consultation, one of our specialists will
                        provide answers regarding how many treatments you may
                        need to achieve your goals in the treated area, as the
                        number of treatments required is dependent on your
                        desired results. One series of treatment will increase
                        muscle up to 16% and reduce fat by up to 19% in the
                        treated area. Many people are pleased with the results
                        of just one series of treatment.
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>How long does this treatment usually take?</b>{" "}
                      </p>
                      <p>
                        M-SCULPT treatments will take only about 30 minutes,
                        there is no preparation needed, remember this is
                        non-surgical and non-invasive, and there is no downtime.
                        Work and normal physical activities can be resumed
                        immediately after your treatment. So if you want to come
                        in on your lunch breaks, right before work or between
                        your children’s appointments, then book today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className=" mb-4">
                  <h3>Get the look you want and feel great!</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    <b>
                    Request a Consultation with an M-SCULPT Specialists!
                    </b>
                  </p>
              
                </div>

                <div className="mb-3 mt-3">
                  <h3>Book Now !</h3>
                 
                </div>
                <div className="img-border mt-4 mb-3 mb-xl-0">
                <Image
                  src="https://nmac.bm/images/banner/Nmac-Muscle-Sculpting-Before-After.jpg"
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

          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 order-1 order-md-2">
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Laser;

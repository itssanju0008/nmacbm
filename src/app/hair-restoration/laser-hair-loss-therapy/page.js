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
              <h3>Laser Hair Loss Therapy</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
              <div className="salonb-info">
                <p>
                  <b>Laser Hair Loss Therapy background information</b>
                </p>
                <p>
                 {` The history of baldness cures that don't involve some form of
                  surgery can be summed up rather succinctly. From prehistory to
                  the late 1980s, nothing worked. All baldness cures were
                  figuratively and often literally snake oil.`}
                </p>
                <p>
                  Then came Minoxidil (marketed in the UK as Regaine®) followed
                  quickly by Finasteride (marketed in the UK as Propecia®).
                  These products can prevent hair loss and in some cases, grow
                  new hair.
                </p>
                <p>
               {`   Genes are behind most of the bald and thinning heads out
                  there, male and female. You can inherit baldness from your
                  mother or your father. Baldness is not passed only through the
                  mother's side, a quick look at the countless number of bald
                  fathers and sons will nullify this myth.`}
                </p>
                <div className="img-border mt-4 mb-3">
                  <Image
                    src="https://nmac.bm/images/sidemenu/laser-hair-loss.JPG"
                    className="img-fluid"
                    width={400}
                    height={600}
                    style={{ height: "auto", width: "100%" }}
                    alt="Service Image"
                  />
                </div>
                <p>
                  There are now a wide range of products, available on the
                  market, which claim to provide a solution to hair loss.
                </p>
                <p>
                  The use of low-level laser therapy (LLLT), although shown in
                  some studies to be effective in improving the thickness and
                  fullness of hair on its own*, is often combined with proven
                  scalp and hair re-growth products, for a full hair loss
                  treatment program.
                </p>
                <p>
                  Low-level laser hair loss therapy is now recognized throughout
                  Europe and in the United States as an effective treatment for
                  most forms of hair loss, including male and female pattern
                  baldness. It is suitable for anybody who is in the early
                  stages of thinning.
                </p>
                <p>
                 {` If you are considering laser hair loss therapy the following
                  information will give you a basic understanding of the
                  procedure. It can't answer all your questions, since a lot
                  depends on the individual patient.`}
                </p>
              </div>

              <div className="mt-4 salonb-info">
                <div className="all-common-heading mb-4">
                  <h3>
                    What happens during a Laser Hair Loss Therapy treatment?
                  </h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                   {` In your first consultation with Dr. Brown, you should
                    clearly explain your expectations of the laser hair loss
                    therapy treatment. Dr. Brown would then advise you as to the
                    right treatment for you and whether it can achieve the
                    results you'd like.`}
                  </p>
                  <p>
                    Make sure that you obtain as much information as necessary
                    to enable you to make a fully informed decision about this
                    procedure.
                  </p>
                  <p>
                {`    We would also take a full medical history to make sure that
                    there are no reasons why you shouldn't undergo low-level
                    laser treatment and/or to identify the cause of your hair
                    loss. At this point, you would also normally be asked to
                    sign a consent form which means that you have understood the
                    future benefits and possible risks associated with the
                    procedure.`}
                  </p>
                  <p>
                  {`  Photographs of the area to be treated will also be taken for
                    a "before and after" comparison later.`}
                  </p>
                  <p>
                    During treatment the laser therapy machine sits over your
                    head. The laser hood is a static device which holds a number
                    of laser diodes. The diodes omit a specific wavelength and
                    frequency of light, delivering low level light therapy to
                    the hair follicles.
                  </p>
                  <p>
                    You do not feel anything at all under the machine and the
                    session takes about 25 minutes.
                  </p>
                  <p>
                    Repeat treatments are required weekly for approximately 3 to
                    6 months, depending on the extent of hair loss.
                  </p>
                  <p>
                    As well as sessions under the laser device, you will
                    normally also be given specific hair care and hair re-growth
                    products for at-home use, in combination with the laser
                    therapy, to try and achieve the best results possible.
                  </p>
                </div>
              </div>
              <div className="mt-4 salonb-info">
                <div className="all-common-heading mb-4">
                  <h3>
                    What are the risks and potential complications from Laser
                    Hair Loss Therapy treatment?
                  </h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Low-level laser hair loss therapy has been the subject of
                    many years of research and development, and conforms to
                    European standards and American FDA (Food and Drug
                    Administration) regulations for safety.
                  </p>
                  <p>It is safe and painless with no known side effects!</p>
                </div>
              </div>
              <div className="mt-4 salonb-info">
                <div className="all-common-heading mb-4">
                  <h3>Who can perform Laser Hair Loss Therapy?</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    The laser hair loss therapy treatment should be carried out
                    under Doctors supervision and by someone who has experience
                    and training in setting up and operating the equipment.
                  </p>
                </div>
              </div>
              <div className="mt-4 salonb-info">
                <div className="all-common-heading mb-4">
                  <h3>Summary of advice for Laser Hair Loss Therapy</h3>
                  <div className="line"></div>
                </div>
                <div>
                  <p>
                    Losing your hair can have a devastating psychological effect
                    on a person, most especially women, knocking your
                    self-confidence and potentially making you withdraw from
                    your social life.
                  </p>
                  <p>
                    With advances in technology there are now low-level laser
                    devices available which, in conjunction within proven hair
                    loss drugs, have been shown to improve hair quality, making
                    it fuller, shinier and thicker.
                  </p>
                  <p>
                    According to research, laser hair loss therapy treatment
                    used alone, including some at-home devices can be effective
                    in improving the general condition of the hair. However,
                    most clinics advise clients that by using everything
                    together, i.e. the laser in combination with hair loss drugs
                    and hair care products, the best overall results can be
                    achieved.
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

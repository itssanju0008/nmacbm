import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { FaLocationDot  } from "react-icons/fa6";


const AccessGym = () => {
  return (
    <>
      <section>
        <div className="weight-loss">
          <div className="weight-loss-bg">
            <h3 className="weightloss-common-title text-center">
              <b>
                {" "}
                NMAC EXCLUSIVE OFFER ONLY!!!{" "}
                <span className="text-blue">GET YOUR GYM ACCESS! </span>
              </b>
            </h3>

            <div className="text-center mt-3">
              <Link
                target="_blank"
                href="mailto:scottrcsmith@gmail.com"
                class="btn btn-skyblue-fill text-white"
              >
                {" "}
                SIGN-UP OR SCHEDULE A WALK-THROUGH{" "}
              </Link>
            </div>
          </div>

          <div className="access-gym-info mt-5">
            <h2>
              NORTHSHORE MEDICAL & AESTHETICS CENTER HAS PARTNERED WITH NRG GYM{" "}
            </h2>
            <h2 className="text-danger">
              {" "}
              WEIGHT LOSS & PHYSIO CLIENTS NOW HAVE ACCESS TO A GYM{" "}
            </h2>
            <h2 className="text-success">
              {" "}
              GYM SESSIONS WITH A PERSONAL TRAINER{" "}
            </h2>

            <div className="access-gyme-img mt-5 img-border">
              <Image
                src={"/service-img/access-gym.jpg"}
                width={500}
                height={400}
                alt="GyM Banner"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="mt-5">
            <div className="all-common-heading mb-4">
              <h3>YOU WILL LOVE OUR GYM</h3>
              <div className="line"></div>
            </div>

            <div className="hcg-info">
              <ul className="patient-info-list">
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Be Dedicated, passionate & skilled trainers
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Very intimate vibe
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Modern facility with all the essential gym equipment
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Cost efficient group sessions
                </li>

                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Workout around other like-minded people
                </li>

                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Get your fitness program tailored around YOUR individual goals
                </li>

                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Improve your overall physique at your pace
                </li>

                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Safe Space
                </li>

                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Clean
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
              <div className="col-lg-6 col-md-12">
                <div className="text-center m-auto">
                        <iframe
                          width="100%"
                          height="350"
                          src={'https://www.youtube.com/embed/UKxYIWdG51c?si=Z1r4iusnqbWlRsHm'}
                          frameBorder="0"
                          allowFullScreen
                          className="img-style"
                        ></iframe>
                  </div>
              </div>

              <div className="col-lg-6 col-md-12 px-0 px-md-1">
                <div className="row ms-0 ms-lg-3 mt-3 mt-lg-0  mx-0">
                  <div className="all-common-heading mb-4">
                    <h3>MEET THE TRAINERS </h3>
                    <div className="line"></div>
                  </div> 

                    <div className="col-lg-6 col-md-6 col-sm-12 2">
                     <div className="trainer-profile"> 
                     <Image
                        src={"/service-img/gym-trainer-1.jpg"}
                        alt="Doctor"
                        width={300}
                        height={300}
                        className="doct-img"
                        style={{ width: "100%", borderRadius: "5px 5px 0 0" , objectFit:'cover' , objectPosition:'top'}}
                      />
                      <div className=" mt-3">
                        <h3 className="trainer-name">SCOTT SMITH</h3>
                        <p className="trainer-designation">
                        @scottrcholisticfitness <br/>
                        (441)7056911
                        </p>
                      </div>
                     </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="trainer-profile"> 
                     <Image
                        src={"/service-img/gym-trainer-2.jpg"}
                        alt="Doctor"
                        width={300}
                        height={300}
                        className="doct-img"
                        style={{ width: "100%", borderRadius: "5px 5px 0 0", objectFit:'cover', objectPosition:'top' }}
                      />
                      <div className=" mt-3">
                        <h3 className="trainer-name">JESSIE MANDERSON
</h3>
                        <p className="trainer-designation">
                        @movewithjessbda
 <br/>
 (441)500-0008
                        </p>
                      </div>
                     </div>
                    </div>
                </div>
              </div>
          </div>

          <div className="mt-5">
            <div className="all-common-heading mb-4">
              <h3>WHERE WE ARE LOCATED </h3>
              <div className="line"></div>
            </div>

            <div className="hcg-info">
              <div className="access-gym-info-list row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
                   <div className="bg-lightblue p-4 rounded">
                     <p className="text-start"> <b className="fw-600"> NRG Gym : </b> 4th Floor - Emporium Building, Front Street,
                    <br/>
                    City of Hamilton. (Same building as Flanagans Restaurant)</p>
                   </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
                <div className="bg-lightblue p-4 rounded">
                 <p className="text-start"> <b className="fw-600">Learn More About NRG Gym
</b> <br/>
IG:@NRG.Bermuda</p>
                 </div>

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
                <div className="bg-lightblue p-4 rounded">
                 <p className="text-start"> <b className="fw-600">Couldn&#39;t Make the Open House?
</b><br/>
Question or to Enroll email Scott at <Link href="mailto:scottrcsmith@gmail.com" className="text-blue">scottrcsmith@gmail.com</Link></p>
                 </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessGym;

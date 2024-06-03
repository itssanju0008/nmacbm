import React from "react";
import Image from "next/image";
import AppoinmentDate from "./AppoinmentDate";
import { IMAGEURL } from "@/Api/apiConfig";
import  "../../modules/home/appearance/appearance.css"

const SpecialistSchedule = ({ row }) => {
  return (
    <>
      {/* <div className="col-lg-7 col-md-12 ">
        <div className="specialist-schedule w-100">
          <div className="d-flex align-items-start gap-3">
            <div>
              <Image
                src={"/all/doctor.jpg"}
                alt="doctor profile"
                width={150}
                height={150}
              />
            </div>
            <div className="doctor-info">
              <h3>Dr. Cindy Morris</h3>
              <p>
                Pain Management Specialist <br /> Complete Care Clinic
              </p>

              <div className="schedule-info mt-3">
                <p className="mb-2">
                  Efficient relief from pain, asthma and sleep apnea
                </p>{" "}
                <p>
                  <b>Mondays</b> 9:00 am to noon
                </p>
                <p>
                  <b>Saturdays</b> 10:00 am - 1:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col-lg-6 col-md-12">
        <div className="w-100">
          <div className="date__widget iv_nutrient w-100">
            <div className="mb-3">
            <Image
                src={`${IMAGEURL}${row?.profile_image}`}
                alt="doctor profile"
                width={150}
                height={250}
                style={{width:'100%', height:"auto", objectFit:'cover'}}
              />
            </div>
           <div dangerouslySetInnerHTML={{__html:row?.description}}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialistSchedule;

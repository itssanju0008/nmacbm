import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";


const MedicalCard = ({ data }) => {
  return (
    <>
      <div className="medical-card">
       <Link href="#">
        <div className="medical__box">
          <div className="box-content">
            <div className="box-top">
                <h4>{data.title}</h4>
            </div>

            <div className="medical__box-middle">
              <div className="list">
                <ul className="medical-fe-list">
                  {data.services.map((service, index) => (
                    <li key={index}>
                      <IoMdCheckmark className="me-3 check-icon"/>{service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default MedicalCard;

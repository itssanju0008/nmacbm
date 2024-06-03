import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";


const CovidTestingCard = ({ data , dynamicColors }) => {
  return (
    <>
      <div className="medical-card">
       <Link href="#">
        <div className="medical__box" style={dynamicColors}>
          <div className="box-content">
            <div className="box-top">
                <h4>{data.title}</h4>
            </div>

            <div className="medical__box-middle">
                <div>
                  <p>
                  {data.para1}
                </p>
                <h4> 
                  {data.mainpara}
                </h4>
                <p>
                  {data.para3}
                </p>
                </div>
            </div>

          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default CovidTestingCard;

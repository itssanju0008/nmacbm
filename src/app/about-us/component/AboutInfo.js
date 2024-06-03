import React from "react";
import Image from "next/image";
import { IMAGEURL } from "@/Api/apiConfig";

const AboutInfo = ({data}) => {
  return (
    <>
      <div className="pt-6">
          <div className="col-lg-10 col-md-12 m-auto">
              <div className="about-info">
                <h3 className="mb-3">
                {data?.title}
                </h3>

                <p className="first">
              <div dangerouslySetInnerHTML={{__html:data?.description}}></div>
                </p>
          
              </div>

              <div className="about-info-img mt-3 mt-md-5">
                <Image
                  src={data?.banner? `${IMAGEURL}${data?.banner}`:"/all/about-info.png"}
                  alt="about"
                  className="img-fluid"
                  width={300}
                  height={1000}
                />
              </div>
            </div>
          </div>
       
    </>
  );
};

export default AboutInfo;

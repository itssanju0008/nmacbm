import React from "react";
import Image from "next/image";

const NMACCovid19Test = ({ testData }) => {
  return (
    <>
      <div>
        <div className="all-common-heading mb-4">
          <h3>Below are 7 options to get the trusted NMAC COVID-19 test.

</h3>
          <div className="line"></div>
        </div>

        {/* Map through the testData array to render multiple rows */}
        {testData.map((item) => (
          <div key={item.id} className="row mt-4">
           
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="salonb-info me-0 me-md-4">
                <h3>{item.title}</h3>
                
                <div>
                  <p className="mt-2 mb-1">{item.description}</p>
                </div>
                <p className="mt-2 text-skyblue mb-1">
                  <b> {item.date}</b>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="img-border ms-0 ms-md-4">
                <Image
                  src={item.image}
                  alt="namc center"
                  width={200}
                  height={200}
                  style={{ width: "100%", height:"inherit"}}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};

export default NMACCovid19Test;

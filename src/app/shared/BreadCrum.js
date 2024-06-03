import React from "react";
import Image from "next/image";

const BreadCrum = ({ imageUrl, title , description}) => {
  return (
    <section className="position-relative">
      <div className="after_slider breadcrum-banner">
        <Image
          src={imageUrl}
          alt="banner"
          width={1920}
          height={500}
          className="img-responsive mobile-h"
        />

        <div className="breadcrum-title text-center  side-space">
          <h3>{title}</h3>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BreadCrum;

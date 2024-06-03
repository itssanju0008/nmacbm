"use client"
import React, { useState } from "react";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import  "../deals.css"

const Deals = ({ imageData }) => {

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const dealStyle = {
    backgroundColor: imageData?.dealBgColor || "#d41c1c", 
  };

  return (
    <>
      <div className="media-card position-relative" onClick={openLightbox}>
        <div className="media-img">

          <Image
            src={imageData?.imgUrl} 
            alt={imageData?.title}
            width={100}
            height={100}
            style={{ width: "100%" }}  />
            
            <span className="deals-box">{imageData?.label}</span>
        </div>

        <div className="media-content">
          <h3>{imageData?.title}</h3>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <Image
              src={imageData?.imgUrl}
              alt={imageData?.title}
              width={800}
              height={500}
              style={{maxHeight:'65vh'}}
            />

            <h3 className="mb-0 mt-2">{imageData?.title}</h3>
            <button onClick={closeLightbox}>
              <RxCrossCircled />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Deals;

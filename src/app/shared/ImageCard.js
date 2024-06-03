"use client"
import React, { useState } from "react";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { IMAGEURL } from "@/Api/apiConfig";

const ImageCard = ({ imageData }) => {

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div className="media-card" onClick={openLightbox}>
        <div className="media-img">

          <Image
            src={imageData?.image?`${IMAGEURL}${imageData?.image}`:''} 
            alt={imageData?.title}
            width={100}
            height={100}
            style={{height:"inherit",width:"100%"}}
             />

        </div>

        <div className="media-content">
          <h3>{imageData?.title}</h3>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <Image
               src={imageData?.image?`${IMAGEURL}${imageData?.image}`:''} 
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

export default ImageCard;

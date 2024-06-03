import React, { useState } from "react";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { IMAGEURL } from "@/Api/apiConfig";

const MediaCard = ({ mediaData }) => {
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
            src={mediaData?.image?`${IMAGEURL}${mediaData?.image}`:'/all/no-img.avif'}
            alt={mediaData?.title}
            width={100}
            height={100}
            style={{ width: "100%"}}
          />
        </div>
        <div className="media-content">
          <h3>{mediaData?.title}</h3>
          {/* <p>Date: {mediaData.date}</p> */}
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <Image
              src={mediaData?.image?`${IMAGEURL}${mediaData?.image}`:''}
              alt={mediaData?.title}
              width={800}
              height={500}
            />

            <h3 className="mb-0 mt-2">{mediaData?.title}</h3>
            <button onClick={closeLightbox}>
              <RxCrossCircled />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaCard;

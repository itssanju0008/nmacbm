import React, { useState } from "react";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import "../newsletterdetails.css";

const NewsLetterDetails = ({ contents }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(null);

  const openLightbox = (content) => {
    setCurrentContent(content);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentContent(null);
    setIsLightboxOpen(false);
  };

  return (
    <>
      {contents.map((content, index) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3" key={index}>
          <div
            className="media-card content-thumbnail position-relative"
            onClick={() => openLightbox(content)}
          >
            <div className="media-img content__thumb">
             
                <Image
                  src={content.thumbnailUrl}
                  alt="Content Thumbnail"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "100%" }}
                />
             
            </div>
            <div className="news-heading">
              <h3>{content.title}</h3>
            </div>
          </div>
        </div>
      ))}

      {isLightboxOpen && currentContent && (
        <div className="lightbox">
          <div className="lightbox-content">
            {currentContent.type === "image" && (
              <Image
                src={currentContent.thumbnailUrl}
                alt={currentContent.title}
                width={800}
                height={500}
                style={{ width: "100%" }}
              />
            )}
            <h3 className="mb-0 mt-2">{currentContent.title}</h3>
            <button onClick={closeLightbox}>
              <RxCrossCircled />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetterDetails;

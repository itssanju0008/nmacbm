import React, { useState } from "react";
import Image from "next/image";
import './gallery_lightbox.css';
import { CiCirclePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx"; 

const GalleryLightbox = ({ contents }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({});

  const openLightbox = (content) => {
    setCurrentContent(content);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentContent({});
    setLightboxIsOpen(false);
  };

  return (
    <>
      {contents.map((content, index) => (
        <div className="media-card"   key={index}>
        <div
        
          className="content-thumbnail position-relative"
          onClick={() => openLightbox(content)}
        >
          <Image
            src={content.thumbnailUrl}
            alt="Content Thumbnail"
            width={500} height={300}
            style={{ width: "100%", objectFit: 'cover', objectPosition: 'top' }}
          />
          <div className="overlay-content">
            <CiCirclePlus className="icon-class" />
          </div>
        </div>
        </div>
      ))}

      {lightboxIsOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <Image
              src={currentContent.thumbnailUrl}
              alt="Content Thumbnail"
              width={500} height={600}
              style={{ width: "100%", objectFit: 'contain', objectPosition: 'top', height: 'auto' }}
            />
            <button className="close-button" onClick={closeLightbox}>
              <RxCrossCircled />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryLightbox;

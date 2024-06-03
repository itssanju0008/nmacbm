"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MediaCard = ({ media }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="our-madia mb-3">
        {media.map((media, index) => (
          <div
            key={index}
            className={`accordion-item mt-4 ${activeIndex === index ? "active" : ""}`}
          >
            <h4
              className="accordion-header media-header"
              onClick={() => toggleAccordion(index)}
            >
             {index + 1} - {media.title}
            </h4>

            <div className="accordion-content media-content">
             
              <p>{media.content}</p>
              <div className="mb-3">
                 {media.image && <Image src={media.image} width={600} height={500} style={{height:'auto'}} alt="Image" />}
              </div>
              <div className="mb-3">
              {media.video && <iframe src={media.video} title="Video" width="600" height="400" />}

              </div>
              {media.links && (
                <div>
                  {media.links.map((link, linkIndex) => (
                    <p className="mb-1" key={linkIndex}>
                         {link.text} - &nbsp;
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.url}
                      </a>
                    </p>
                  ))}
                </div>
              )}
              </div>
            </div>
          
        ))}
      </div>
    </>
  );
};

export default MediaCard;

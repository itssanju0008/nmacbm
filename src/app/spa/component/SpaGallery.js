"use client";
import React, { useState } from "react";
import GalleryLightbox from "../../shared/GalleryLightbox;";

const SpaGallery = () => {

  const contentData = [
    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/4-sml.jpg', },
    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/5-sml.jpg', },
    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/7-sml.jpg', },
    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/1-sml.jpg', },
    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/2-sml.jpg', },
    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/9-sml.jpg', },

    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/6-sml.jpg', },
    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/8-sml.jpg', },
    { type: 'image', thumbnailUrl: 'https://nmac.bm/images/spa-tours/3-sml.jpg', },

    // Add more content objects as needed
  ];


  return (
    <>
      <div className="spa-gallery">
        <GalleryLightbox contents={contentData} />
      </div>
    </>
  );
};

export default SpaGallery;

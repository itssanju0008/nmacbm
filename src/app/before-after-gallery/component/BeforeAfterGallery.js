import React from 'react';
import AfterBeforeGallery from "../../shared/AfterBeforGallery";

const imageDataSet = [
    { beforeUrl: '/all/gal-1.jpg', afterUrl: '/all/gal-2.jpg' },
    { beforeUrl: '/all/gal-1.jpg', afterUrl: '/all/gal-2.jpg' },
    { beforeUrl: '/all/gal-1.jpg', afterUrl: '/all/gal-2.jpg' },
    { beforeUrl: '/all/gal-1.jpg', afterUrl: '/all/gal-2.jpg' },
    { beforeUrl: '/all/gal-1.jpg', afterUrl: '/all/gal-2.jpg' },
  ];


const BeforeAfterCard = () => {
  return (
    <>
        {imageDataSet.map((imageData, index) => (
            <AfterBeforeGallery key={index} imageData={imageData} />
        ))}
    </>
  )
}

export default BeforeAfterCard;


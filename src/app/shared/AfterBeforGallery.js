'use client'
import React, { useState } from 'react';
import './gallery.css';
import Image from 'next/image';

const ImageSlider = ({ imageData }) => {
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <>
      <div className='main-slider mb-3 mb-sm-0'>
        <div className='container-slide'>
          <div className='image-box'>
            <Image
              className='image-before slider-image'
              src={imageData.beforeUrl}
              alt='Before'
              width={500}
              height={500}
              style={{ width: `${position}%` }}
            />
            <input
              type='range'
              min='0'
              max='100'
              value={position}
              aria-label='Percentage of before photo shown'
              className='slider'
              onChange={handleSliderChange}
            />
            <div className='slider-line' style={{ left: `${position}%` }}></div>
            <div className='slider-button' style={{ left: `${position}%` }}>
              <span>Drag</span>
            </div>
            <Image
              className='image-after slider-image'
              src={imageData.afterUrl}
              alt='After'
              width={500}
              height={500}
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

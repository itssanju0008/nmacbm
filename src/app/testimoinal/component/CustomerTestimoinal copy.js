"use client";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

const testimonialsData = [
  {
    id: 1,
    image: "/all/test-1.jpg",
  },
  {
    id: 2,
    image: "/all/test-2.jpg",
  },
  {
    id: 3,
    image: "/all/test-3.jpg",
  },
  {
    id: 4,
    image: "/all/test-4.jpg",
  },
  {
    id: 5,
    image: "/all/test-3.jpg",
  },
  {
    id: 6,
    image: "/all/test-4.jpg",
  },

];

const CustomerTestimoinal = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
    setLightboxIsOpen(false);
  };

  return (
    <>
      <div>
        {testimonialsData.map((testimonial, index) => (
          <div className="media-card" key={testimonial.id} onClick={() => openLightbox(index)}>
            <div className="media-img text-center m-auto">
              <Image
                src={testimonial.image}
                className="img-fluid"
                alt={`Testimonial ${testimonial.id}`}
                width={500}
                height={300}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        ))}
      </div>

      {lightboxIsOpen && currentImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <Image
              src={testimonialsData[currentImageIndex].image}
              className="img-fluid"
              alt={`Testimonial ${testimonialsData[currentImageIndex].id}`}
              width={800}
              height={600}
              style={{ width: '100%', objectFit: 'contain', height:'85vh' }}
            />
            <button className="close-button" onClick={closeLightbox}>
              <RxCrossCircled />
            </button>
          </div>
        </div>
      )}

      
     <div className="text-center mt-4">
     {/* Use the correct Link component syntax */}
       <Link href="#" className="btn btn-skyblue-fill">
         Load More 
       </Link>
     </div>
    </>
  );
};

export default CustomerTestimoinal;

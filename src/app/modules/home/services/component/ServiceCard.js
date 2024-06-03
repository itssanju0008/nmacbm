import React from 'react';
import '../service.css'; 
import Image from 'next/image';
import Link from "next/link";

const ServiceCard = ({ imagesrc, title, bgcolor }) => {
  return (
    <>
      <div className="image-container position-relative">
        <div className="card rounded-0 border-0">
          <Link href="#">
            <div className="overlay" style={{ background: bgcolor }}></div>
            <div className="heading">
              <h4>
                {title}
              </h4>
            </div>
            <div>
              <Image src={imagesrc} alt={title} width={200} height={200} style={{width:'100%', height:'auto'}}/>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;

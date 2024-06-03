import React from 'react';
import Image from "next/image";

const FacilitiesIconCard = ({ data }) => {
    const { iconSrc, iconAlt, title, description } = data;
  
    return (
      <div className='facilities-card'>
        <div className='facilities-icon'>
          <Image src={iconSrc} width={48} height={48} alt={iconAlt} />
        </div>
        <div className='facilities-card-details'>
          <h4>{title}</h4>
          <p className='mb-0'>{description}</p>
        </div>
      </div>
    );
  };

export default FacilitiesIconCard

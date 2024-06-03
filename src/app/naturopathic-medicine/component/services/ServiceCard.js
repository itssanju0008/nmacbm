import React from 'react';
import "./service.css"

const ServiceCard = ({ serviceName }) => {
  return (
    <div className='service-card'>
      <p>
        {serviceName}
      </p>
    </div>
  );
};

export default ServiceCard;

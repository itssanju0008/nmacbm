import React from 'react';

const OnlineCourse = ({sr, badgeColor, bgColor,borderColor, title, description }) => {
  const cardStyle = {
    backgroundColor: bgColor,
    borderColor: borderColor,
  };

  const badgeStyle = {
    backgroundColor: badgeColor,
  };

  return (
    <>
       <div className='position-relative'>
        <span className='badge position-absolute top-0 left-0 translate-middle p-2 rounded-circle custome-badge' style={badgeStyle}>
            {sr}
        </span>
        <div className='course-card position-relative mb-4' style={cardStyle}>
            <p className='p-4'><b>{title} </b>{description}</p>
        </div>
       </div>
    </>
  );
};

export default OnlineCourse;

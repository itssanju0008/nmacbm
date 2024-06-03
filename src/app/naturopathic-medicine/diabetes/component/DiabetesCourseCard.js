import React from 'react';
import Image from 'next/image';

const DiabetesCourseCard = ({ course }) => {
  return (
    <>
        <div className='course-card'>
           <div className='course-icon'>
               <Image src={course.icon} width="80" height="80" alt="icon"/>
           </div>
           <div className='course-content'>
             <h3>{course.title}</h3>
             <p>{course.description}</p>
           </div>
        </div>
    </>
  )
}

export default DiabetesCourseCard;

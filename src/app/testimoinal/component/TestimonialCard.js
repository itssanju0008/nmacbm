
import React from 'react';
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IMAGEURL } from '@/Api/apiConfig';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className='testimonial-card'>
      <div className='testimonial-img'>
        <Image src={testimonial?.image?`${IMAGEURL}${testimonial?.image}`:'/all/no-img.avif'} alt="testimonial-img"  width={100} height={250} style={{ width: '100%', objectFit:'cover' }} />
      </div>
      <div className='testimonial-details'>
        <div className="d-flex justify-content-between mb-2">
          <span className="rating">
            {[...Array(testimonial?.rating)].map((_, index) => (
              <span className="star-icon" key={index}><FaStar /></span>
            ))}
          </span>
          <span className="published">
            {testimonial?.date}
          </span>
        </div>
        <p className='testimonial-desc line-clamp-1 mb-2'>{testimonial?.description}</p>
        <p className="text-end mb-0"> <b>- {testimonial?.name}</b></p>
      </div>
    </div>
  )
}

export default TestimonialCard;

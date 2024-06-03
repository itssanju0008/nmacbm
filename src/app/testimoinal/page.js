'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';
import "./testimoialdetails.css";
// import CustomerTestimoinal from './component/CustomerTestimoinal';
import VideoTestimoinal from './component/VideoTestimoinal';
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import TestimonialCard from './component/TestimonialCard';
import BannerSection from "../shared/BreadCrum";
import authApi from '@/Api/authApi';

const Testimonial = () => {
  const [data,setData]=useState([]);
  const getData=async()=>{
    try {
      const res=await authApi.get(`get-testimonial`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
useEffect(()=>{
  getData();
},[])
  const testimonialData = [
    {
      id: 1,
       imageUrl: "/all/test-1.jpg",
      rating: 5,
      date: "Oct 30, 2023",
      description: "La dr.ssa Fabiani è molto preparata e attenta alle varie problematiche. Ascolta accuratamente il paziente e per me, ormai da 20 anni, ha sempre trovato la giusta cura. La consiglio vivamente!",
      author: "Wilmer Stevenson"
    },

    {
      id: 2,
     imageUrl: "/all/test-1.jpg",
      rating: 5,
      date: "Oct 30, 2023",
      description: "La dr.ssa Fabiani è molto preparata e attenta alle varie problematiche. Ascolta accuratamente il paziente e per me, ormai da 20 anni, ha sempre trovato la giusta cura. La consiglio vivamente!",
      author: "Wilmer Stevenson"
    },

    {
      id: 3,
      imageUrl: "/all/test-1.jpg",
      rating: 5,
      date: "Oct 30, 2023",
      description: "La dr.ssa Fabiani è molto preparata e attenta alle varie problematiche. Ascolta accuratamente il paziente e per me, ormai da 20 anni, ha sempre trovato la giusta cura. La consiglio vivamente!",
      author: "Wilmer Stevenson"
    },

    {
      id: 4,
     imageUrl: "/all/test-1.jpg",
      rating: 5,
      date: "Oct 30, 2023",
      description: "La dr.ssa Fabiani è molto preparata e attenta alle varie problematiche. Ascolta accuratamente il paziente e per me, ormai da 20 anni, ha sempre trovato la giusta cura. La consiglio vivamente!",
      author: "Wilmer Stevenson"
    },
   
  ];
  
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Testimonial",
    description:`"Read what our valuable customers have to say"`
  };

  return (

  <>

    {/* banner */}

    <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>

    {/* banner */}

  <section className='side-space py-6'>
     <div className='row'>
       <div className='col-md-12 mb-4'>
       <Link href="/post-testimonial" className="btn btn-skyblue-fill">
          Post Your  Review   <IoIosAddCircle className='fa-24' />
        </Link>
       </div>
       <div className='col-lg-12 col-md-12'>
         <div className='row'>
            {data?.map(testimonial => (
                <div key={testimonial.id} className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12' >
                   <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                </div>
            ))}
           </div>
          </div>
        </div>
    </section>

    </>
  );
};

export default Testimonial;

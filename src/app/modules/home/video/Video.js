'use client'
import React, { useEffect, useState } from 'react'
import VideoModal from "./component/VideoCard";
import Link from "next/link"
import authApi from '@/Api/authApi';

const Video = () => {
const [vids,setVids]=useState([]);
const getAllVideos=async()=>{
  try {
    const res=await authApi.get('video-gallery');
    setVids(res?.data)
  } catch (error) {
    
  }
}
useEffect(()=>{
  getAllVideos();
},[])
  return (
    <>
      <section className='py-6'>
        <div className='side-space'>
            <div className='row justify-content-center'>
               <div className='col-md-4 col-sm-6 col-xs-12'>
                  <VideoModal
                        videoUrl="https://www.youtube.com/embed/3aloxO9PyKo?si=JkCpAoQ_l8bebUy_"
                        thumbnailUrl="https://example.com/your-thumbnail.jpg"
                    />
               </div>

               <div className='col-md-4 col-sm-6 col-xs-12'>
                  <VideoModal
                        videoUrl="https://www.youtube.com/embed/D3nZG_6zCo4?si=4pup4ZwRRi3toBZm"
                        thumbnailUrl="https://example.com/your-thumbnail.jpg"
                    />
               </div>

               <div className='col-md-4 col-sm-6 col-xs-12'>
                  <VideoModal
                        videoUrl="https://www.youtube.com/embed/2kPIxEw8DB4?si=wiJFEFvpC6wo1EVU"
                        thumbnailUrl="https://example.com/your-thumbnail.jpg"
                    />
               </div>
            </div>

            <div className='text-center mtop-2'>
                <Link href="#" className="btn black-btn">View More</Link>
            </div>
        </div>
         
      </section>
    </>
  )
}

export default Video;

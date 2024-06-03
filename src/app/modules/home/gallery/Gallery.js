import React from 'react';
import AfterBeforeGallery from "../../../shared/AfterBeforGallery";
import Link from "next/link"

const imageDataSet = [
    { beforeUrl: '/all/gal-1.jpg', afterUrl: '/all/gal-2.jpg' },
    { beforeUrl: '/all/gal-1.jpg', afterUrl: '/all/gal-2.jpg' },
  ];


const Gallery = () => {
  return (
    <>
      <section className='py-6 bg-dusky  mt-5'>
         <div className='side-space'>
            <div className='row align-items-center'>
                <div className='col-lg-7 col-md-12'>
                   <div className='d-block gap-0 d-sm-flex gap-sm-3 gap-md-5'>
                    {imageDataSet.map((imageData, index) => (
                        <AfterBeforeGallery key={index} imageData={imageData} />
                    ))}
                   </div>
                </div>
                <div className='col-lg-5 col-md-12'>
                   <div className='gallery-content ps-0 ps-md-3'>
                       <p className='portfo'>PORTFOLIO</p>
                       <h3>BEFORE & AFTER GALLERY
</h3>

                       <p>Eliquam magna massa, gravida finibus fermentum sit amet Suspendisse consequat lacus libero. In ultricies gravida Maecenas nec erat sit amet eros venenatis ultricies.</p>
                       
                       <div className='my-3 my-sm-5'>
                         <Link href="/photo-gallery" className="btn btn-skyblue-fill">View All</Link>
                       </div>
                      <p className='mb-0'><b className='text-skyblue'>No Insurance?</b> Get your preventive care for a low monthly fee</p>
                   </div>
                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Gallery

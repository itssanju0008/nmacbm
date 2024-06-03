"use client";
import React from "react";
import Image from "next/image";
import "./posttestimonial.css";
import Link from "next/link";
import Form from "./component/Form";
import BannerSection from "../shared/BreadCrum";

const PostTestimonail = () => {
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "POST TESTIMONIAL",
  };
  return (
    <>

     {/* banner */}
       <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
     {/* banner */}

     

      <section className="side-space py-6">
        <div className="row post-test-container mx-0">
          <div className="col-xl-5 col-lg-6 col-md-12 oppurtunity-section">
            <div className="book-app">
                <div className="">
                    <div className="oppurtunity-text-section">
                        <h2>Book on the Go with our Free Mobile Medical Apps!</h2>
                        <p>
                            Everything you need to learn about NMAC together in one helpful app. With before and after photos, informational medical videos, upcoming events, coupons, and easily accessible loyalty program that&#39;s available right from the
                            comfort of your smartphone. You can even book your next appointment and do your refills. Download today to receive exclusive offers!
                        </p>
                        <div className="oppurtunity-link-section mt-4">
                            <Link target="_blank" href="http://nmac.mobapp.at/landing/Desktop#.VPhhLrX3LDc" className="">
                                <Image alt="NAMC" src={'/all/gp.png'} width={150} height={80} style={{height:'auto'}} className="img-fluid mb-2"/> </Link>
                            <Link target="_blank" href="http://nmac.mobapp.at/landing/Desktop#.VPhhLrX3LDc" className="ms-0 ms-sm-3 ">
                                <Image alt="NAMC" src={'/all/as.png'} width={150} height={80} style={{height:'auto'}} className="img-fluid mb-2"/> </Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6 col-md-12 px-md-0 ">
           <Form/>
          </div>
        </div>

        <div className="mt-5">
          <div className="">
             <div>
               <div className="all-common-heading mb-3">
                  <h3>TERMS OF USE  </h3>
                  <div className="line"></div>
                </div>
             </div>

             <p className="text-para">
                I understand my testimonial that I will submit online made on behalf of North Shore Medical & Aesthetics Center 
                (hereinafter called &quot;The Company &quot;) may be used in connection with publicizing and promoting The Company. 
                I authorize The Company to use my name, brief biographical information, and the Testimonial as desired to be used in printed publications,
                 multimedia presentations, on websites, social media or in any other distribution media. I agree that I will make no monetary or other
                  claim against The Company for the use of the statement. In addition, I waive any right to inspect or approve the finished product,
                   including written copy, wherein my likeness or my testimonial appears. I hereby hold harmless and release The Company from all claims, 
                   demands and causes of action which I, my heirs, representatives, executors, administrators or any other persons acting on my behalf or
                    on behalf of my estate have or may have by reason of this authorization.
             </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostTestimonail;

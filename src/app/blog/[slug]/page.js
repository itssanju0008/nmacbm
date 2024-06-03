
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerSection from "../../shared/BreadCrum";
import BlogDetail from "./component/BlogDetail";

// const get

const BlogDetails = ({params}) => {
console.log({params});
    const bannerData = {
      imageUrl: "/slider/slider.jpg",
      title: "EXPLORE HOW TO GET SOFT AND SUPPLE SKIN",
      description:`"Light, camera , action - As an industry leader, read all about how we are transforming lives in Bermuda"`
    };

  return (
    <>
      
       {/* banner */}
        <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description} />
       {/* banner */}

     <BlogDetail slug={params?.slug} />

   
    </>
  );
};

export default BlogDetails;

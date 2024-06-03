"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BlogCard from "../modules/home/blog/component/BlogCard";
import "../modules/home/blog/blog.css";
import "./bloginfo.css";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";

const Blog = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await authApi.get(`blogs`);
      setData(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const blogDataArray = [
    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },

    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },

    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },

    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },

    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },

    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },

    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },

    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },

    {
      title: "Swans Running Club Annual 8k Turkey Trot",
      imageSrc: "/all/blog-1.jpg",
      content:
        "2023 Northshore Medical Center and Swans Running Club Annual 8k Turkey Trot - Dec 3rd..",
      link: "/blog-details",
    },
  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Blog",
    description: `"Light, camera , action - As an industry leader, read all about how we are transforming lives in Bermuda"`,
  };

  return (
    <>
      {/* banner */}
      <BannerSection
        imageUrl={bannerData.imageUrl}
        title={bannerData.title}
        description={bannerData.description}
      />
      {/* banner */}

      <section className="side-space py-6">
        <div className="row">
          {data?.map((blogData, index) => (
            <div
              className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4"
              key={index}
            >
              <BlogCard blogData={blogData} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;

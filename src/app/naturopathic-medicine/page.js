"use client";
import React, { useEffect, useState } from "react";
import Testimonial from "./component/testimonial/Testimonial";
import About from "./component/about/About";
import OurDoctor from "./component/doctor/OurDoctor";
import OurService from "./component/services/OurService";
import SignUP from "./component/signup/SignUP";
import Slider from "./component/slider/Slider";
import Video from "./component/video/Video";
import Blog from "./component/blog/Blog";
import authApi from "@/Api/authApi";
import TeamContainer from "../modules/home/team/component/TeamContainer";
import BlogsContainer from "../modules/home/blog/component/BlogsContainer";

const NaturopathicMedicine = () => {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    try {
      const res = await authApi.get(`service/naturopathic-medicine`);
      setData(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      {/* slider */}

      <Slider />

      {/* signup */}
      <SignUP />

      {/* about  */}
      <About />

      <OurService />

      {data?.doctors?.length > 0 && <TeamContainer doctors={data?.doctors} />}
      {/* <OurDoctor/> */}

      <Testimonial />

      <Video data={data} />

      {/* <Blog/> */}
      {data?.blogs?.length > 0 && <BlogsContainer blogs={data?.blogs} />}
    </>
  );
};

export default NaturopathicMedicine;

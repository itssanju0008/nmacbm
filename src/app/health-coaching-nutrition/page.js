"use client";
import React, {useEffect, useState}from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import "./nutrition.css";
import NutritionTeamCard from "./component/NutritionTeamCard";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";
import TeamContainer from "../modules/home/team/component/TeamContainer";

const Nutrition = () => {
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
  const [doctors, setDoctors] = useState([
    {
      name: "Dr. Amani Flood",
      position: "NMD  Naturopathic Medical Doctor",
      image: "/team/amani_flood.jpg",
      social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
      {
        name: "Dr. Katherine Dale",
        position: "Doctor of Naturopathic Medicine (ND)",
        image: "/team/Dr-Katherine-Dale.jpg",
        social: {
          facebook: "#",
          instagram: "#",
          linkedin: "#",
        },
      },
        {
          name: "Mr Preston James",
          position: "Remote/Virtual Health Coach",
          image: "/team/preston-james.jpg",
          social: {
            facebook: "#",
            instagram: "#",
            linkedin: "#",
          },
        },
          {
            name: "Alexander Dill ",
            position: "Certified Health Coach  ",
            image: "/team/alexander-dill-home.jpg",
            social: {
              facebook: "#",
              instagram: "#",
              linkedin: "#",
            },
      
      },
  ]);
  
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Nutrition & Life Coaching",
    description:`"Naturopathic physicians treat the underlying causes of illness rather than just the symptoms of disease."`

  };

  return (
    <>

     {/* banner */}
      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>
     {/* banner */}

 
      <section className="side-space py-6">
        <div>
          <div className="all-common-heading mb-4">
            <h3> Nutrition & Life Coaching </h3>
            <div className="line"></div>
          </div>

          <div className="laboratory-service">
            <p>
            Get to know the compassionate professionals dedicated to guiding you on your health journey. Our certified health and 
            nutrition coaches bring a wealth of experience, empathy, and a commitment to your success.
            </p>
           
           <p>
           Ready to embark on a transformative health journey with the support of our NMAC certified health coaches? Contact us today to schedule your initial consultation. Your path to wellness starts here.

           </p>


           <div className="mt-3">
                 <h3 className="sub-common-title mb-2">Why Choose NMAC Certified Health Coaches?
 </h3>

                   <p className="">
                      <b>Expertise That Matters : </b> Our health coaches hold certifications, demonstrating their dedication to excellence in the field. With a deep understanding of medical principles and a passion for transformative health outcomes, our coaches bring a wealth of knowledge to every coaching session.
                   </p>

                   <p className="">
                    <b> Personalized Approach : </b> We recognize that everyone&#39;s health journey is unique.
                   Our team specialize in tailoring their guidance to your specific needs, crafting personalized strategies for weight loss, nutrition,
                    and overall well-being. By addressing individual challenges and goals, we empower you to make sustainable lifestyle changes.
                   </p>

                   <p className="">
                    <b>Comprehensive Health Solutions : </b> Beyond conventional weight loss and nutrition coaching, our certified health coaches provide
                    comprehensive support that goes beyond the scale. They are trained to assist with stress management, sleep improvement, and other
                     factors influencing your overall health. We believe in a holistic approach that considers your mind, body, and spirit.
                   </p>


                   <p className="">
                    <b>Evidence-Based Practices  : </b> Our health coaches are well-versed in evidence-based practices, utilizing the latest research to 
                    shape their recommendations. This commitment to science-backed approaches ensures that you receive the most effective strategies for achieving
                     and maintaining a healthy weight among other conditions.
                   </p>

                   <p className="">
                    <b>Safety First : </b> Your health is our priority. With our certified health coaches, you can trust that the advice and strategies provided are not only 
                    effective but also safe. This is particularly crucial in weight loss and nutrition, where an individualized and medically sound approach is paramount.
                     Our coaches work with medical doctors and other providers for a holistic program.
                   </p>
                   
                </div>
        
                {data?.doctors?.length>0 && <TeamContainer doctors={data?.doctors} />}
          
          </div>
        </div>
      </section>

    </>
  )
}

export default Nutrition;

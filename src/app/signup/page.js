
import React from "react";
import Image from "next/image";
import Form from "./component/Form";
import "./signup.css";
import BannerSection from "../shared/BreadCrum";


const Signup = () => {

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Sexual Health",
    description:`"elcome to Bermuda's Premier Medspa"`
  };

  return (
    <>

     {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>

     {/* banner */}
   

      <section className="side-space py-6">
         <div className="row">
           <div className="col-lg-12 col-md-12">
            <h1 className="signup-heading"><b>Get The Hollistic Approachto To 
</b> <br></br> Healthcare & Beauty Here At NMAC!</h1>
            <h3 className="mt-1 signup-sub-heading">Want To Learn More? Or
<b>Sign-up</b> Here To Register Or Have Our Team Contact You With More Information</h3>
            <Form/>
           </div>
         </div>
      </section>

    </>
  )
}

export default Signup

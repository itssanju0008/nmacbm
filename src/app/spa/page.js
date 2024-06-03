import React from "react";
import Image from "next/image";
import SpaGallery from "./component/SpaGallery";
import ServiceSidebar from "../shared/ServiceSidebar";
import './spa.css';
import BannerSection from "../shared/BreadCrum";


const Spa = () => {

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "SPA",
    description:`"You have come to the right place for the best treatments at affordable prices! Plus see what exciting events we have for you!"`
  };

  return (
    <>

     {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>

     {/* banner */}

     

      <section className="side-space py-6">
     
            <div className="row">
                <div className="col-lg-12">
                    <div className="all-common-heading mb-4">
                        <h3>AESTHETICS </h3>
                        <div className="line"></div>
                    </div>
                    <div className="row">
                         <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 order-2 order-md-1">
                             <SpaGallery/>
                         </div>
                         <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 order-1 order-md-2">
                            <ServiceSidebar/>
                         </div>
                    </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Spa;

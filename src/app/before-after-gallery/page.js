

import React from "react";
import BeforeAfter from "./component/BeforeAfterGallery";
import './after-before-gallery.css';
import BannerSection from "../shared/BreadCrum"


const BeforeAfterGallery = () => {
  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Before After Gallery",
    description:`"You have come to the right place for the best treatments at affordable prices!"`
  };

  return (
    <>

    {/* banner */}
    <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description} />
    {/* banner */}


      <section className="side-space py-6">
            <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="after-before-gallery">
                            <BeforeAfter/>
                        </div>
                      </div>
                  </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default BeforeAfterGallery;

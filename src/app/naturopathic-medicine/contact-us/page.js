import React from 'react';
import BannerSection from '@/app/shared/BreadCrum';
import Form from "./component/Form";
import  "./contactinfo.css";

const ContactUs = () => {
    const bannerData = {
        imageUrl: "/slider/slider.jpg",
        title: "GET THE HOLLISTIC APPROACH TO HEALTHCARE",
      };

  return (
    <>
         {/* banner */}
           <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description} />
         {/* banner */}

         <section className='side-space py-6'>
            <div className='row'>
                <div className='col-lg-10 col-md-12 m-auto'>
                   <Form/>
                </div>
            </div>
         </section>
    </>
  )
}

export default ContactUs;

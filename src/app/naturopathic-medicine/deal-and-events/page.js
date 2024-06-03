
import React from 'react';
import BannerSection from '@/app/shared/BreadCrum';
import DealsCard from "./component/Deals";

const Deals = () => {
    const DealsData = [
        {
          id: 1,
          imgUrl: "https://nmac.bm/images/special/annual-wellness-lg.jpg",
          title:"Annual Wellness Check-ups at NMAC",
          label:'Deal'
        },
        {
          id: 2,
          imgUrl: "https://nmac.bm/images/special/weight-loss-plan-small.jpg",
          title:"Annual Wellness Check-ups at NMAC",
          label:'Deal'
        },
        {
          id: 3,
          imgUrl: "https://nmac.bm/naturopathic-medicine/images/jump-weight.jpg",
          title:"Fast Weight Loss",
          label:'Deal'
        },
        {
          id: 4,
          imgUrl: "https://nmac.bm/images/colon-main.jpg",
          title:"Colon Hydrotherapy",
          label:'Event'
        },
       
      ];

      const bannerData = {
        imageUrl: "/slider/slider.jpg",
        title: "Deals & Events",
       
      };

  return (
    <>

    {/* banner */}

    <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />

    {/* banner */}


      <section className='side-space py-6'>
        <div className='row'>
          {DealsData.map((imageData) => (
           <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3 mb-lg-0' key={imageData.id}>
             <DealsCard  imageData={imageData}  />
           </div>
           ))}
           </div>
      </section>
    </>
  )
}

export default Deals

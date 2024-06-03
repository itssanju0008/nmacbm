import React from 'react';
import BannerSection from '@/app/shared/BreadCrum';
import CheckoutDescription from './component/CheckoutDescription';
import "./checkout.css"
import CheckoutForm from './component/CheckoutForm';

const Checkout = () => {
    const bannerData = {
        imageUrl: "/slider/slider.jpg",
        title: "Checkout",
       
      };
  return (
    <>
      {/* banner */}
      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />
      {/* banner */}

      <section className='side-space py-6'>
         <div className='row justify-content-center'>
              <div className='col-lg-5 col-md-12'>
                  <CheckoutDescription/>
              </div>

              <div className='col-lg-4 col-md-12'>
                  <CheckoutForm/>
              </div>
         </div>
      </section>
    </>
  )
}

export default Checkout;

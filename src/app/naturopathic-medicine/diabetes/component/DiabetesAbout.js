import React from 'react';
import Image from 'next/image';

const DiabetesAbout = () => {
  return (
    <>
       <div className='row justify-content-center align-items-center'>
        <div className='cal-lg-12'>
        <h3 className='service-Common-heading text-center'>  About Your Instructor</h3>
        </div>
         <div className='col-lg-9 col-md-7 col-sm-12'>
            <div className='diabetes-content me-5'>
             <h3 className='service-Common-heading text-start' style={{fontSize:'26px'}}>DR. FLOOD, ND</h3>
             <p className='service-para text-left mb-2'><b>Board Certified Doctor of Naturopathic Medicine</b></p>
             <p className='service-para text-left mb-1'>Dr. Flood, ND is a board certified Naturopathic Doctor providing Naturopathic Primary Care.</p>
             <p className='service-para text-left mb-1'>Dr. Flood, ND earned her medical degree from Sonoran University of Health Sciences, an accredited naturopathic medical school, and is a board certified, licensed Naturopathic Doctor.</p>
             <p className='service-para text-left mb-1'>Her practice blends evidence-based alternative therapies with conventional medical protocols, providing the safest and most effective solution to each patient&#39;s needs. She will listen to you and design a naturopathic treatment plan tailored to your health goals. Dr. Flood, ND delivers first class naturopathic medical care based on your treatment choices. She is a cancer survivor who used only naturopathic medicine to survive lymphoma. Dr. Flood&#39;s education and experience make her uniquely qualified to be a valuable member of your healthcare team.</p>
           
            </div>
         </div>

         <div className='col-lg-3 col-md-5 col-sm-12'>
            <div className='diabetes-img img-border'>
                 <Image src="/all/Amani.jpg" width="100" height="100"  alt="banner" style={{width:'100%',height:'auto'}} className="img-fluid" />
            </div> 
         </div>
      </div>
    </>
  )
}

export default DiabetesAbout

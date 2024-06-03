import React from 'react';
import BannerSection from '@/app/shared/BreadCrum';
import DiabetesCard from './component/DiabetesCard';
import DiabetesCourseCard from './component/DiabetesCourseCard';
import DiabetesAbout from './component/DiabetesAbout';
import PaymentMethod from './component/PaymentMethod';
import FaqCard from "../../modules/home/Faq/component/FaqCard" ;
import Image from 'next/image';

const diabetes = () => {

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Diabetes",
};

const courses = [
    {
      id: 1,
      title: 'Week 1: Understanding the Root Causes of Diabetes',
      description: 'Discover the underlying factors contributing to diabetes and how naturopathic interventions can address these root causes to promote lasting reversal and well-being.',
      icon: '/all/course-icon-1.webp'
    },

    {
        id: 2,
        title: 'Week 2: Nutrition and Lifestyle Modifications',
        description: 'Explore the significance of physical activity and stress reduction techniques in managing diabetes and improving overall health.',
        icon: '/all/course-icon-2.webp'
      },

      {
        id: 3,
        title: 'Week 3: Exercise and Stress Management',
        description: 'Discover the underlying factors contributing to diabetes and how naturopathic interventions can address these root causes to promote lasting reversal and well-being.',
        icon: '/all/course-icon-3.webp'
      },

      {
        id: 4,
        title: 'Week 4: Holistic Approaches to Sustaining Diabetes Reversal',
        description: 'Gain insights into holistic approaches that empower you to maintain diabetes reversal and prevent its recurrence for a fulfilling and healthy life.',
        icon: '/all/course-icon-4.webp'
      },
    
  ];


  // faq

  const faqItems = [
    {
      title: "1. Can I access the recordings later?",
      content:
        "Due to HIPA regulations, we are not allowed to provide recordings. If paying with Insurance, you will not be billed if you do not attend the live event. For those paying cash, this is a non-refundable investment. So please do your best to attend the live event.",
    },
    {
      title: "2. Will there be more online diabetes courses? ",
      content:
        "Yes. A return can be created at the item level, and if you have ordered multiple items, you can initiate a return/replacement for any individual item. Returns/Replacements on Nykaa are currently accepted only in the following cases: 1. You have received a damaged product 2. You have received a defective product 3. Wrong product was delivered to you 4. The product ordered was missing in the delivered shipment In any of these cases, you could either request for a replacement or a refund within 15 days of receiving the order. Follow either of these steps: b. Via Help Center - Click on 'Have a Concern', Click on 'Submit a Request' > Provide us with your order ID details and your request to return/replace/refund your order. Kindly share an image of the product/s for our reference.",
    },
    {
      title: "3. How Is Insurance Billed? What types of insurance do we accept? ",
      content:
        "We accept all Bermuda insurances coverages, including FC (Future Care) and HIP.  As patients book/enroll our team will verify your coverage.  ",
    },
    {
      title: "4. Will there be other naturopathic courses? ",
      content:
        "Yes - 2024 will be power packed with new Naturopathic course options.   ",
    },
  ];

  return (
    <>

    {/* banner */}

     <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} />

    {/* banner */}

      <section className='side-space py-6'>
         <DiabetesCard/>
      </section>

      <section className='py-6 peach-bg'>
        <div className='side-space'>
          <div className='row'>
              <div className='col-xl-12 col-lg-12 col-md-12 mb-5'>
              <h3 className='service-Common-heading text-center mb-3'> What You Will Learn </h3>
              </div>
              {courses.map(course => (
                    <div className='col-xl-3 col-lg-4 col-md-12' key={course.id}>
                        <DiabetesCourseCard  course={course} />
                    </div>
                ))}
           </div>
        </div>
      </section>


      <section className='side-space py-6'>
         <DiabetesAbout/>
      </section>

      <section className='side-space py-6'>
         <PaymentMethod/> 
      </section>

      <section>
         <div className='row'>
            <div className='col-lg-6 col-md-12 p-md-0'>
              <Image src={'/all/faq.jpg'}  width={500} height={500} style={{width:'100%', height:'100%',objectFit: 'cover'}} alt="Frequently Asked Questions" />
            </div>

            <div className='col-lg-6 col-md-12 ps-md-0'>
              <div className='bg-dusky py-6 h-100 side-right'>
              <div className="ps-3 ps-md-5">
                <div className="faq-heading">
                  <h3 className="mb-4">Frequently Asked Questions
</h3>
                </div>
                <FaqCard faqItems={faqItems}/>                
              </div>
              </div>
            </div>
         </div>
      </section>




    </>
  )
}

export default diabetes;

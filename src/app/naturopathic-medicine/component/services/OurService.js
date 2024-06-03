import React from 'react'
import ServiceCard from './ServiceCard'

const OurService = () => {

    const serviceNames = [
        "Complete Naturopathic Health Assessment",
        "Weight Loss",
        "Yoga",
        "Acupuncture",
        "Bioidentical Hormone Replacement Therapy",
        "Therapeutic Massage and Spinal Manipulations",
        "Naturopathic Chronic Disease Management",
        "Vitamins and Nutritional Supplements",
        "Therapeutic Massage",
        "IV Nutritional Drip Therapy",
        "Nutrition and Dietary Advising",
        "Food Allergy and Sensitivity Testing",
        "Whole Body Detox Programmes",
        "Mind Body Medicine",
        "Health Education",
        "Type 2 Diabetes Reversal",
        "Unique Speciality Labs",
        "Senior Health and Anti Aging",
        "Naturopathic Family Health",
        "Naturopathic Pain Management",
        "Naturopathic Cancer Support",
        "Natural Remedies for Insomnia, Depression, ADHD and Anxiety",
        "Natuaral management for Digestion Disorders and Acid Reflux Disease",
        "Natural Management of Men's Health Issues",
        "Corporate Wellness",
        "Therapeutic Hypnosis and Guided Imagery"
      ];


  return (
    <>
      <div className='side-space' id="service">
        <div className='row justify-content-center'>
            <div className='col-lg-12 mb-5'>
                <h3 className='service-Common-heading'>OUR SERVICES </h3>
            </div>

              {serviceNames.map((serviceName, index) => (
                 <div className='col-xl-3 col-lg-4  col-md-6 col-sm-12' key={index}>
                    <ServiceCard  serviceName={serviceName} />
                 </div>
              ))}
           
        </div>
      </div>
    </>
  )
}

export default OurService

import React from 'react';
import ServiceCard from './component/ServiceCard';
import ServiceBanner from "./component/ServiceBanner";

const services = [
    { id: 1, title: 'MEDICAL', imagesrc: '/service/MEDICAL.jpg', bgcolor: '#ffffffde' },
    { id: 2, title: 'NATUROPATHIC MEDICINE & NUTRITION', imagesrc: '/service/NATUROPATHIC.jpg', bgcolor: '#ffffffde' },
    { id: 3, title: 'AESTHETICS', imagesrc: '/service/AESTHETICS.jpg', bgcolor: '#ffffffde' },
    { id: 4, title: 'WEIGHT LOSS', imagesrc: '/service/WEIGHTLOSS.jpg', bgcolor: '#ffffffde' },
    { id: 5, title: 'LABORATORY SERVICES', imagesrc: '/service/LABORATORY-SERVICES.jpg', bgcolor: '#ffffffde' },
    { id: 6, title: 'HAIR SALON & RESTORATION', imagesrc: '/service/HAIR-SALON-RESTORATION.jpg', bgcolor: '#ffffffde' },
    { id: 7, title: 'NORTHSHORE PHARMACY Ltd', imagesrc: '/service/NORTHSHORE-PHARMACY.jpg', bgcolor: '#ffffffde' },
    { id: 8, title: 'SEXUAL HEALTH', imagesrc: '/service/SEXUAL-HEALTH.jpg', bgcolor: '#ffffffde' },
    { id: 9, title: 'ULTRASOUND DIAGNOSTIC IMAGING', imagesrc: '/service/ULTRASOUND.jpg', bgcolor: '#ffffffde' },
    { id: 10, title: 'REHAB, PHYSIO & SPORTS  MEDICINE', imagesrc: '/service/REHAB-PHYSIO.jpg', bgcolor: '#ffffffde' },
    { id: 11, title: 'RHEUMATOLOGY', imagesrc: '/service/RHEUMATOLOGY.jpg', bgcolor: '#ffffffde' },
    { id: 12, title: 'WE SELL HEALTH, HAIR & BEAUTY PRODUCTS!', imagesrc: '/service/hair.jpg', bgcolor: '#ffffffde' },
  ];

const Service = () => {
  return (
    <>
      <section>
        <div className='conatiner-fluid p-0 m-0 w-100'>
            <div className='row m-0'>
                <div className='col-xl-5  col-md-12 px-0 bg-skyblue'>
                      <ServiceBanner/>
                </div>

                <div className='col-xl-7  col-md-12 px-0'>
                    <div className='service-grid'>
                    {services.map((service) => (
                            <ServiceCard
                            key={service.id}
                            title={service.title}
                            imagesrc={service.imagesrc}
                            bgcolor={service.bgcolor}
                            />
                        ))}
                     </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Service

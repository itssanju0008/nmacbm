'use client'
import  './servicebanner.css';
import Link from "next/link";
import Image from "next/image"

const ClassBanner = () => {
  return (
    <div className="service-banner">
     <div className='service-content'>
      <h3 className=''>Welcome to us</h3>
      <h2 className=''>We offer extensive medical procedures to outbound and inbound patients.</h2>
      <p>We are Northshore Medical and Aesthetics Center (NMAC), <b>Bermuda&#39;s premier Medspa, provides
         Family Medical and Primary Care Dermatological services for men, women and youth.</b> Our SpaMedica
          Center is located upstairs and offers many Aesthetic Services including Body Contouring Treatments, Microdermabrasion and other facials,
           Botox, Chemical Peels, Laser Hair removal, Tattoo Removal, Vein Treatments (Sclerotheraphy), Acne Scar Removals & so much more.</p>

           <div className='service-contact'>
              <div className='position-relative'>
                <h4 className='mb-1'>Make an Appointment</h4>
                 <Image src="/all/phone.png" alt="phone icon" width={15} height={32} style={{height:'auto', width:'auto'}} /> <Link href="#" className='service-contact-phone ms-2'>441 - 293-5476</Link>
              </div>
              <div>

                  <h4 className='mb-3 mt-4'>Online Schedule</h4>

                  <div>
                     <Link href="#" className='btn btn-blue'>Patient Login</Link>
                     <Link href="#" className='btn btn-white ms-2'>book Online</Link>
                  </div>
              </div>
           </div>
     </div>
    </div>
  );
};

export default ClassBanner;

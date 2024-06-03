import React from 'react';
import Link from "next/link"  

const ContactInfo = () => {
  return (
    <>

      <div className='contact-info'>
         <div className='inner-details'>
             <h3>Doctor Details</h3>
             <h4 className='mb-1'>Dr. Amani Flood, NMD</h4>
             <h4 className='mb-1'>Dr. Katherine Dale, ND</h4>
             <p className='service-para text-left mb-0'>Clinic of Naturopathic Medicine</p>
             <p className='service-para text-left mb-0' style={{fontSize:'13px'}}><i>Primary Care the Natural Way! </i></p>
         </div>

         <div className='inner-details mt-3 mt-sm-0'>
             <h3>Address</h3>
             <p className='service-para text-left mb-0'>Northshore Medical & Aesthetics Center <br></br> 7 Northshore Road, Devonshire  </p> 
             <p className='service-para text-left mb-0'><b>Ph: </b> 293-5476</p>

             <p className='service-para text-left mb-0'><b>Fax: </b> 295-7705
            </p>
            <p className='service-para text-left mb-0'><b>Web: </b> <Link href="#" className='text-info fw-medium'>www.NMAC.bm
            </Link>
            </p>
            <p className='service-para text-left mb-0'><b>Email: </b> info@nmac.bm </p>
         </div>
      </div>
      
    </>
  )
}

export default ContactInfo

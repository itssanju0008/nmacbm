import React from 'react';
import Image from 'next/image';
import { IoMdCheckmark } from "react-icons/io";

const CheckoutDescription = () => {
  return (
    <>
     <div className='checkout-info me-0 me-md-5'>
         <div className='checkout-img'>
             <Image src="/all/checkout-banner.webp" width="100" height="100" alt="image" className="img-fluid" style={{width:'100%', height:'auto'}}/>

             <h3 className='service-Common-heading text-start'>Naturopathic Diabetes Reversal Course ($100)</h3>
             <p className='service-para text-left mb-2'><b>Register Today For This Life Changing Course:</b></p>
             <p className='service-para text-left mb-0'>What you&#39;ll get:</p>

             <div>
             <div className="list">
                <ul className="medical-fe-list">
                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/> <b>A comprehensive 4-part online course</b> designed to help individuals naturally reverse Type 2 Diabetes and take control of their health. 
                    </li>

                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/><b> Led by Dr. Amani Flood,</b> a board-certified Naturopathic Doctor with a blend of evidence-based alternative therapies and conventional medical protocols. 
                    </li>

                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/><b> 4 Live One Hour Sessions - Via Zoom,</b> held over a a 4-week period.
                    </li>

                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/> <b>Sessions cover topics</b> such as understanding the <b>root causes</b> of diabetes, <b>nutrition and lifestyle</b> modifications, <b>exercise and stress management</b>, and <b>holistic approaches</b> to sustaining diabetes reversal.
                    </li>
                    
                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/>  <b>Private Q&A  </b> sessions with Dr. Flood at the end of each session.
                    </li>

                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/>  <b>Recordings</b>  of sessions available for 1 month following the end of the 4 week training session.  
                    </li>

                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/>  Free registration for those with insurance coverage, and <b>a $100 option for those without insurance</b>.  
                    </li>
                
                </ul>

                </div>
             </div>
         </div>
     </div>
    </>
  )
}

export default CheckoutDescription

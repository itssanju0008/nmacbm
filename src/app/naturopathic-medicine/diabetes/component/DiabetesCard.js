import React from 'react';
import Image from 'next/image';
import "../diabetes.css";
import { IoMdCheckmark } from "react-icons/io";

const DiabetesCard = () => {
  return (
    <>
      <div className='row justify-content-center align-items-center'>
         <div className='col-lg-7 col-md-12'>
            <div className='diabetes-content'>
             <h3 className='service-Common-heading text-start'>Welcome to &#34;Naturopathic Diabetes Reversal: Your Path to Type 2 Diabetes Freedom&#34;</h3>
             <p className='service-para text-left mb-2'><b>A LIVE - online course containing a comprehensive 4-part series designed to equip you with the knowledge and tools necessary to reverse diabetes and take control of your health.</b></p>
             <p className='service-para text-left mb-0'>Whether you are covered by insurance or have no insurance at all, you can participate in this course, because we&#39;re offering multiple payment options, allowing accessibility for all our patients. When you&#39;re ready to check out simply confirm your insurance coverage or pay for the course online and get ready to embark on a transformative journey to reclaim your health.</p>
            </div>
         </div>

         <div className='col-lg-5 col-md-12'>
            <div className='diabetes-img img-border'>
                 <Image src="/all/diabetes-1.jpg" width="100" height="100" style={{width:'100%',height:'auto'}} className="img-fluid" alt="diabetes" />
            </div> 
         </div>
      </div>


      <div className='row justify-content-center align-items-center mt-5'>
         <div className='col-lg-5 col-md-12'>
            <div className='diabetes-img img-border'>
                 <Image src="/all/diabetes-2.jpg" width="100" height="100" style={{width:'100%',height:'auto'}} className="img-fluid" alt="diabetes"  />
            </div> 
         </div>

         <div className='col-lg-7 col-md-12'>
            <div className='diabetes-content'>
             <h3 className='service-Common-heading text-start'>In This 4 Part Educational Series</h3>
             <p className='service-para text-left mb-2'><b>Dr. Flood will share knowledge about </b></p>
             <div className="list">
                <ul className="medical-fe-list">
                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/> How Type 2 Diabetes is diagnosed.
                    </li>

                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/> The significance of regular lab testing, and most importantly, how to interpret your lab results.
                    </li>

                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/> Why home testing is important, how it is done and newer ways to monitor blood sugar.
                    </li>

                    <li>
                        <IoMdCheckmark className="me-3 check-icon"/> The role of medicine, and using vitamins and supplements.
                    </li>
                
                </ul>

                <p className='service-para text-left mb-0'> And most importantly she will equip you with the tools to understand your unique condition and empower you to make informed decisions about your health.</p>
                <p className='service-para text-left mb-0'> We&#39;ll meet for 4 one-hour sessions (from 6-7:15 pm ADT via Zoom), each session will have a different topic on REVERSING TYPE 2 DIABETES. You can join in at any of the sessions, however, we recommend that you join all 4 sessions. </p>
              </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default DiabetesCard

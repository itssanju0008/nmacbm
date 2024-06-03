import React from 'react';
import Link from "next/link";
import Image from "next/image";

const WeightLoss = () => {
  return (
    <>
      <section>
         <div className='weight-loss'>
            
            <div className=' weight-loss-bg'>
                <h3 className='sub-common-title text-center'>
                   <b> BOOK A CONSULT NOW</b>
                </h3>

                <div className='text-center mt-3'>
                    <Link target="_blank" href="https://healow.com/apps/practice/northshore-medical-and-aesthetic-center-us-devonshire-19498?v=2&locale=en&fbclid=IwAR357cwkjNyUgcHgW_Q5AVVjmP4GYK-YGzsKcVoMAlZluaffUFRHVuR6AuM" class="btn btn-skyblue-fill text-white">CLICK TO BOOK YOUR APPOINTMENT </Link>
                </div>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-6 col-md-12 mb-3 mb-lg-0' >
                  <div className='weight-loss-img'>
                    <Image src="/all/weight-loss.jpg" width={500} height={300} style={{width:'100%', height:'auto'}} alt="banner"/>
                  </div>
                </div>

                <div className='col-lg-6 col-md-12'>
                 
                <div className='weight-loss-img'>
                     <Image src="/all/weight-loss-1.jpg" width={500} height={300} style={{width:'100%', height:'auto'}} alt="banner"/>

                     <div className='mt-4 text-center iv_nutrient'>
                     <Link  href="/post-testimonial" class="btn btn-skyblue-fill text-white">Post Your Testimonial </Link>

                        <p className='mt-3'>Have You Also Had Success With Our Northshore Medical Weight Loss Team? <br/>
<b>The First 50 Clients Who Submit Their Weight Loss Success Story, </b><br></br>
You Will Receive A <span className='text-blue'><b>Special Spamedica Gift From Us!</b></span></p>
                     </div>
                 </div>

                </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default WeightLoss

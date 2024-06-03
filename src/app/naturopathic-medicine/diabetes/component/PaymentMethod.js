import React from 'react'
import PaymentForm from './PaymentForm'

const paymentMethod = () => {
  return (
    <>
       <div className='row'>
           <div className='col-lg-10 col-md-12 m-auto'>
                <PaymentForm/>

              <div className='payment'>
                  <h2>Don&#39;t Have Insurance ?  </h2>
                  <h3>$100 </h3>
                  <p className='service-para text-center mb-2 mt-3'>Great Option - 1 Payment </p>

                  <div className='mt-4'>
                  <p className='service-para text-center mb-2'>Uninsured? No worries! Or simply want to pay for it yourself.</p>
                  <p className='service-para text-center mb-2'>Good news you can access this course for just $100, making your well-being a top priority.</p>
                    <div class="text-center mt-3">
                        <a target="_blank" class="btn btn-skyblue-fill text-white" href="/naturopathic-medicine/checkout/">REGISTER TODAY</a>
                    </div>
                    <p className='service-para text-center mb-2 mt-3'><b>Note:  Non-refundable </b></p>
                  </div>
              </div>
           </div>
       </div>
    </>
  )
}

export default paymentMethod

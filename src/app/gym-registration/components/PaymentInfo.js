'use client'

import  Image  from "next/image";
import Link from "next/link"

const PaymentInfo = () => {
  return (
    <div className="payment-info">
      <div id="header-details">
        <div id="header-logo">
          <Image alt="merchant-logo" src={'/images/logo.png'} width={60} height={64} />
        </div>
        <div id="merchant-name">NORTHSHORE MEDICAL LABORATORY</div>
      </div>

      <div id="description" className="details-value text-line mt-3">
    
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
              form of a document or a typeface without relying on meaningful content. 
            </p>

            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
              form of a document or a typeface without relying on meaningful content. 
            </p>
           
            <p>For more information, please contact</p>
            <p className="mb-1"><strong>CALL : </strong> +1 441 293-5476</p>
            <p><strong>WEB : </strong> <Link href='https://nmaclab.com/'>  https://nmaclab.com/</Link>  </p>
      
 
</div>

    </div>
  );
};

export default PaymentInfo;

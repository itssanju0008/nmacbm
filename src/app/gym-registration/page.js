'use client'
import PaymentForm from "./components/PaymentForm";
import Image from "next/image";
import Link from "next/link";
import BannerSection from "../../app/shared/BreadCrum"

export default function Home() {
  return (
  <>
   <BannerSection imageUrl={"/slider/slider.jpg"} title={'Gym Registration'} />
   <section className="py-2 py-md-4 ">
         <div className="container-fluid">
              <div className="col-xl-10 col-lg-12 col-md-12 m-auto px-3 px-xl-0">
                <div className="row">
                   {/* <div className="col-lg-12">
                      <h3 className="payment-heading">payments Portal</h3>
                   </div> */}
                   <div className="col-lg-12">
                      <PaymentForm/>
                    </div>
              </div>
               
            </div>
         </div>
      </section>
  </>
     
         
  
  )
}

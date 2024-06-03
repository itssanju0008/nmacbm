// import './faq.css';
import Image from  'next/image';
import FaqCard from "./component/FaqCard";
import Link from "next/link";

const Faq = () => {

  const faqItems = [
    {
      title: "1. Order Related",
      content:
        "If you wish to change the shipping address or phone number, you can do it through 'My Order' section before the products are dispatched. You will see an edit icon on the order detail page.",
    },
    {
      title: "2. Can I return part of my order?",
      content:
        "Yes. A return can be created at the item level, and if you have ordered multiple items, you can initiate a return/replacement for any individual item. Returns/Replacements on Nykaa are currently accepted only in the following cases: 1. You have received a damaged product 2. You have received a defective product 3. Wrong product was delivered to you 4. The product ordered was missing in the delivered shipment In any of these cases, you could either request for a replacement or a refund within 15 days of receiving the order. Follow either of these steps: b. Via Help Center - Click on 'Have a Concern', Click on 'Submit a Request' > Provide us with your order ID details and your request to return/replace/refund your order. Kindly share an image of the product/s for our reference.",
    },
    {
      title: "3. Order Placement",
      content:
        "Just add all the products you wish to buy in your shopping bag and click on the 'Proceed' button for payment options.",
    },
    {
      title: "4. Order Placement",
      content:
        "Just add all the products you wish to buy in your shopping bag and click on the 'Proceed' button for payment options.",
    },
  ];
  
  return (
    <>
      <section>
         <div className='row'>
            <div className='col-lg-6 col-md-12 p-md-0'>
              <Image src={'/all/faq.jpg'}  width={500} height={500} style={{width:'100%', height:'100%',objectFit: 'cover'}} alt="Frequently Asked Questions" />
            </div>

            <div className='col-lg-6 col-md-12 ps-md-0'>
              <div className='bg-dusky py-6 h-100 side-right'>
              <div className="ps-3 ps-md-5">
                <div className="faq-heading">
                  <h3 className="mb-4">Patient Information</h3>
                </div>
                <FaqCard faqItems={faqItems}/>

                <div className='ps-3 px-md-5 mt-4 mt-md-5'>
                    <Link href="#" className="btn btn-skyblue ">
                        Ask Question
                    </Link>
                </div>
                </div>
              </div>

            </div>
         </div>
      </section>
    </>
  );
};

export default Faq;

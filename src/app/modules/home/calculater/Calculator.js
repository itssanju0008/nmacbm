import "./calculator.css";
import Image from "next/image";
import Link from "next/link"
import BmiCalculator from "./component/BmiCalculator";

const Calculator = () => {
    return (
      <>
        <section>
          <div >
            <div className='row cal-items-center'>
              <div className='col-lg-6 col-md-12 pe-md-0'>
                <div className="side-left side-right py-6" style={{ backgroundImage: `url('./all/bg-calculater.jpg')`, height:'100%' }}>
                  <div className="bmi-content">
                     <h3>Weight Loss is Not Just about the Calories and Exercise</h3>

                     <p>We pride ourselves in offering programs designed in accordance with healthy weight-loss practices. 
                        Our staff provide you with professional guidance AND behavior modification.</p>

                        <div className="bmi-list">
                            <ul>
                                <li>Access to the latest drugs and treatments</li>
                                <li>Over 10 years’ experience</li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-block d-xl-flex align-items-center gap-0 gap-sm-5">
                       <div className="bmi-info">
                          <h4>What are You Weighting for? <br></br>
                           Let’s Get Started</h4>
                        </div>
                          <div className="bmi-info-details mt-3">
                             <div className="d-flex gap-3">

                                 <div className="bmi-call-img">
                                   <Image src="/all/call.png" alt="call" width={50} height={50} />
                                 </div>
                                 <div>
                                    <h4>Free 15 Mins Consultation</h4>
                                    <p>Use the form to book your FREE 15 min telephone consultation.</p>

                                    <div className="mt-2 mt-sm-3">
                                    <p className="bmi-phone">441 - 293-5476</p>
                                    <Link href="#" className="btn btn-white w-90 mt-2">book Consultation</Link>
                                 </div>
                                 </div>
                                 
                             </div>
                          </div>
                       </div>
                </div>
              </div>
  
              <div className='col-lg-6 col-md-12 d-flex align-items-center'>
                <div className="side-right">
                   <BmiCalculator/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Calculator;
  
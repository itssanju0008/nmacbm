import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image"; 

const MedicalWeightLossProgram = () => {
  return (
    <>
      <section>
        <div>
          <div className="all-common-heading mb-4">
            <h3>Medical Weight Loss Program</h3>
            <div className="line"></div>
          </div>

          <div className="hcg-jump">

            <div className="hcg-image img-border my-3">
                 <Image src={'/service-img/medical-weight-loss-2.jpg'} alt="iamge" width={600} height={300} className="img-fluid" style={{width:'100%', height:'auto'}}/>
            </div>
            <p>
              The Medical Weight Loss Program is a 12-Month medically-supervised
              program designed to help those who are having a difficult time
              losing weight and require medical therapy and coaching support.
              Patients complete a full medical examination and are presented
              with their weight loss options. Options include but are not
              limited to mood elevators, appetite suppressors, bio-identical
              hormones and bariatric medications. Alongside medical therapy,
              participants also receive dietary support, coaching, and are given
              a meal plan tailored to help them see positive results. NMAC
              Medical Weight Loss Program Features:
            </p>

            <ul className="patient-info-list">
              <li>
                <IoMdCheckmark className="me-3 link-text arrow-size" />
                Active Medical Management by Medical Practitioners
              </li>
              <li>
                <IoMdCheckmark className="me-3 link-text arrow-size" />
                One-On-One Sessions with a Health & Lifestyle Coach
              </li>
              <li>
                <IoMdCheckmark className="me-3 link-text arrow-size" />
                Worsening or improving of acne
              </li>
            </ul>

            <div className="hcg-image img-border my-3">
                 <Image src={'/service-img/medical-weightloss.jpg'} alt="iamge" width={600} height={300} className="img-fluid" style={{width:'100%'}}/>
            </div>
          </div>

          <div className="mt-5">
            <div className="all-common-heading mb-4">
              <h3>
                Which Patients Are Eligible? To participate, patients must
              </h3>
              <div className="line"></div>
            </div>

            <div className="hcg-info">
              <ul className="patient-info-list">
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Be at least 18 years old
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Have a BMI greater than or equal to 30, or a waist
                  circumference greater than or equal to 35 inches in women/ 40
                  inches in men, or have a BMI greater than or equal to 27 with
                  underlying obesity-related conditions (e.g. Type II Diabetes,
                  hypertension, high cholesterol, coronary heart disease)
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Have established risk factors for chronic diseases and is
                  clinically obese
                </li>
                <li>
                  <IoMdCheckmark className="me-3 link-text arrow-size" />
                  Has been diagnosed with a chronic disease and is clinically
                  obese
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicalWeightLossProgram;

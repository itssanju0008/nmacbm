import React from 'react';
import BannerSection from '@/app/shared/BreadCrum';
import "./online-education.css";
import OnlineCourse from './component/OnlineCourse';
import { IoMdCheckmark } from "react-icons/io";
import ContactInfo from './component/ContactInfo';
import Image from 'next/image';

const OnlineEducation = () => {
    const bannerData = {
        imageUrl: "/slider/slider.jpg",
        title: "Online Education & Events",
        description:`"Naturopathic Medicines "`
      };

    //    online courses

      const courses = [
        {
          sr:1,
          badgeColor: '#0087a0',
          bgColor: '#d1ecf14d',
          borderColor:'#0087a0',
          title: 'Controlling Hypertension',
          description: ' will teach you how medications work, how supplement can help, and how dietary and lifestyle changes can bring your blood pressure numbers under control for once and for all. Reduce your risk of stroke, heart disease and even dementia by lowering your blood pressure and keeping it within the normal range'
        },

        {
            sr:2,
            badgeColor: '#97b74a',
            bgColor: '#f4fff6',
            borderColor:'#098a20',
            title: 'Understanding Cholesterol',
            description: ' will help you determine the true risk of heart attack and heart disease based upon your test scores, and how dietary and lifestyle changes can help you reduce those risks and improve your scores. Is medication the only way? Is it the right way for you? These questions will be explored and answered.'
          },

          {
            sr:3,
            badgeColor: '#ffc107',
            bgColor: '#fff6dc',
            borderColor:'#ffc107',
            title: 'Reversing Type 2 Diabetes',
            description: ' means achieving blood sugar and HbA1c values within the normal ranges for diabetics. You may be able to reduce your medications and once again enjoy the foods you love by using newer natural sweeteners and learning recipe and dietary modifications. Learn how glucose testing and newer devices can help you achieve success.'
          },

          {
            sr:4,
            badgeColor: '#e93e4d',
            bgColor: '#ffe8ea',
            borderColor:'#e93e4d',
            title: 'LEARN THE BEST WEIGHT LOSS OPTIONS FOR YOU! GET COACHED! ',
            description: ' The Science of Weight Loss will help you understand how diets work, how to choose the right meal plan for you, and how monitoring is the key. It will introduce you to what\s really going on in your body when you try to lose weight, and teach you how to overcome the obstacles to your success. WEIGHT LOSS THAT ACTUALLY WORKS!'
          },


          {
            sr:5,
            badgeColor: '#0074e9',
            bgColor: '#dfefff',
            borderColor:'#0074e9',
            title: 'Improve Your Digestion ',
            description: ' is for those with acid reflux, heartburn, experiencing gas and bloating after eating, constipation, diarrhea, diverticulitis, food sensitivities, Irritable bowel syndrome or Inflammatory bowel disease.'
          },

          {
            sr:6,
            badgeColor: '#01a2c4',
            bgColor: '#e8fbff',
            borderColor:'#01a2c4',
            title: 'Better Sleep and Relaxation, ',
            description: ' is for those with insomnia, difficulty falling asleep, unable to fully relax or unable to fall asleep and stay asleep all night.',
          },

          

          {
            sr:7,
            badgeColor: '#8d6105',
            bgColor: '#fff0ec8a',
            borderColor:'#8d6105',
            title: 'Women\s Hormones & Fat Gain,',
            description: '  is for females who find their waistline expanding no matter what they do.',
          },

          {
            sr:8,
            badgeColor: '#9865f4',
            bgColor: '#ede3ff',
            borderColor:'#9865f4',
            title: 'Have a Happy, Healthy Vagina ',
            description: ' is for women who suffer from recurring vaginal or urinary tract infections, frequent yeast infections, dryness, pain and those who want to understand their female anatomy better.',
          },

          {
            sr:9,
            badgeColor: '#21aab2',
            bgColor: '#edfeff',
            borderColor:'#21aab2',
            title: 'Fight Disease with Food ',
            description: ' is for anyone who wants to understand the connection between what they eat and how they feel, and those who want to learn how to eat to live a long and healthy life',
          },
          
          {
            sr:10,
            badgeColor: '#b8c724',
            bgColor: '#fdffec',
            borderColor:'#b8c724',
            title: 'Introduction to Intuitive Eating ',
            description: '  is for those who want to learn how to choose the right foods for them to achieve their weight and other health goals and how to generally feel better about themselves and their chosen diet.',
          },
      ];

  return (
    <>
            {/* banner */}
            <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description} />
            {/* banner */}

           <section className='side-space py-6'>
               <div className='row mx-0'>
                  <div className='col-lg-10 col-md-12 m-auto px-0'>
                     <div className='online-education'>
                       <h3 className='service-Common-heading'>Join Us For Our Online Health Sessions </h3>
                       <p className='service-para'>The launch of our Online Health Education programme has been a success and will be ongoing,
                         due to patients expressing their gratitude for the opportunity to improve upon their health.
                          We invite you join in so you can Learn about your health from the comfort of your home via Zoom</p>
                          

                          <div className='row mt-4'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='img-border mb-3'>
                                  <Image src="https://nmac.bm/images/special/nmac-online-course-square.jpg" width="100" height="100" alt="course image" style={{height:'auto', width:'100%'}}/>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-12'>
                                <div className='img-border mb-3'>
                                    <Image src="https://nmac.bm/naturopathic-medicine/images/online-education-both-doctors.jpg" width="100" height="100" alt="course image" style={{height:'auto', width:'100%'}}/>
                                </div>                            
                            </div>
                        </div>


                        <div class="peach-bg p-2 p-md-5 mt-5">
                            <h3 class="sub-common-title text-center"><b> OUR ONLINE COURSES</b></h3>
                        <div class="text-center mt-3">
                            <a target="_blank" class="btn btn-skyblue-fill text-white" 
                            href="/naturopathic-medicine/diabetes">CLICK TO REGISTER FOR COURSE</a>
                            </div>
                        </div> 


                          <h3 className='service-Common-heading mt-5'>Learn About Our Online Courses </h3>
                          <p className='service-para text-center'><b>Sign-up to Know When They Will be Offered Next</b></p>
                     </div>

                    
                     <div className='course-row mt-5 px-3'>
                        {courses.map((course, index) => (
                            <div className='course-inner' key={index}>
                            <OnlineCourse 
                                sr={course.sr}
                                badgeColor={course.badgeColor}
                                bgColor={course.bgColor}
                                title={course.title}
                                borderColor={course.borderColor}
                                description={course.description}
                            />
                            </div>
                        ))}
                     </div>

                     <div className='mt-5'>
                        <p className='service-para text-center'>All of our courses are <b>interesting, fun and easy to follow</b>. The content will focus on the basics and <b>teach you the simple things you can do to improve your overall health</b>. You can participate at your own comfort level, with your video on or off.</p>
                        <p className='service-para text-center'>Handouts, recipes, charts, logs and other materials will be provided. </p>
                        
                        
                        <div className="list">
                            <h4>This is your chance to... </h4>
                            <ul className="medical-fe-list">
                                <li>
                                   <IoMdCheckmark className="me-3 check-icon"/> Understand your treatment plan better
                                </li>

                                <li>
                                   <IoMdCheckmark className="me-3 check-icon"/> Learn about your condition and what it means for your overall health
                                </li>

                                <li>
                                   <IoMdCheckmark className="me-3 check-icon"/> Get the tools you need to get the results you want
                                </li>
                            
                            </ul>
                            <p className='service-para text-start'><b>Join in and <span className='text-danger'>BE THE CHANGE</span> you want to see in your health.</b></p>
                            
                            <div className='mt-4 mt-sm-5'>
                                <ContactInfo/>
                            </div>
                        </div>
                       
                     </div>
                  </div>
               </div>
           </section>

    </>
  )
}

export default OnlineEducation;

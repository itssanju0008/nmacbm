import React from 'react'
import DoctorCard from './DoctorCard'

const OurDoctor = () => {

  const doctors = [
    {
      name: 'Dr. Amani Flood',
      title: 'Board Certified Doctor of Naturopathic Medicine',
      image: '/all/Amani.jpg',
      bio: 'Dr. Amani Flood is a board certified Naturopathic Doctor providing Naturopathic Primary Care. Her practice blends evidence-based alternative therapies with conventional medical protocols, providing the safest and most effective solution to each patient\'s needs. She will listen to you and design a naturopathic treatment plan tailored to your health goals. Dr. Flood delivers first class naturopathic medical care based on your treatment choices. She is a cancer survivor who used only naturopathic medicine to survive lymphoma. Dr. Flood\'s education and experience make me uniquely qualified to be a valuable member of your healthcare team. Dr. Flood graduated from Southwest College of Naturopathic Medicine in Tempe, Arizona, a fully accredited naturopathic medical school http://www.scnm.edu. The medical curriculum emphasizes diet, nutritional supplements, herbal medicine, Acupuncture, Homeopathy and other drugless therapies. While at school she founded the "Docere Times" student newsletter to foster community among students and help integrate new students. She was the 2012 winner of the SCNM Alumni Scholarship award in the amount of $500.00 for her essay on the naturopathic approach to cancer. After graduation Dr. Flood founded the International Association of Black Naturopathic Doctors as a means to broaden the understanding and encourage the use of preventive medicine among at-risk populations.',
      specializations: ['Natural Medicines', 'Annual Physical Exams', 'Detoxification', 'Nutritional Support','Acupuncture',"Women's Medicines","IV Nutrient Therapy","Natural Cancer Support","Naturopathic Weight Loss","Anti - Aging","Medical Hypnosis","Natural Treatment for Mood Disorders i.e. Depression and Anxiety","Men's Natural Prostate & ED Support","Micronutrient Analysis","Corporate Wellness Services"]
    },

    {
      name: 'Dr. Amani Flood',
      title: 'Board Certified Doctor of Naturopathic Medicine',
      image: '/all/Katherine.png',
      bio: 'As a board certified Naturopathic Doctor providing Naturopathic Primary Care, my practice blends evidence-based alternative therapies with conventional medical protocols, providing the safest and most effective solution to each patient\'s needs. I will listen to you and design a naturopathic treatment plan tailored to your health goals. My goal is to deliver first class naturopathic medical care based on your treatment choices. As a cancer survivor, I used only naturopathic medicine to survive lymphoma. My education and experience make me uniquely qualified to be a valuable member of your healthcare team.',
      specializations: ['Family Medicine', 'Dermatology', 'Aesthetic Medicine', 'Medical Weight Loss']
    },
  ];


  return (
    <>
       <div className='side-space padding-info'>
        <div className='row justify-content-center'>
            <div className='col-lg-12 mb-5'>
                <h3 className='service-Common-heading'> Meet Our Naturopathic Practioners  </h3>
            </div>
                {doctors.map((doctor, index) => (
                  <div className='col-xl-3 col-lg-4  col-md-6 col-sm-12' key={index}>
                     <DoctorCard  doctor={doctor} />
                   </div>
                ))}
        </div>
      </div>
    </>
  )
}

export default OurDoctor

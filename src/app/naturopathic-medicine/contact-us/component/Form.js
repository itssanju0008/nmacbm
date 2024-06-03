'use client'
import React from 'react';
import Select from 'react-select';

const Form = () => {
  const options = [
    { value: 'Hypertension', label: 'Hypertension' },
    { value: 'Cholesterol', label: 'Cholesterol' },
    { value: 'Natural Health for the Family', label: 'Natural Health for the Family' },
    { value: 'Diabetes', label: 'Diabetes' },
    { value: 'Weight Loss', label: 'Weight Loss' }
  ];

  return (
    <div className="form-bg">
      <div>
        <h4 className="sub-common-title text-center">
          WANT TO LEARN MORE? OR SIGN-UP HERE TO REGISTER OR HAVE OUR TEAM CONTACT YOU WITH MORE INFORMATION
        </h4>
        <hr />
      </div>
      <div className='row'>
        <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
          <label>First Name</label>
          <input type="text" className="form-control" placeholder="First name" style={{ backgroundColor: '#fff', borderColor: '#d9d9d9' }} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control" placeholder="Last name" style={{ backgroundColor: '#fff', borderColor: '#d9d9d9' }} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Email" style={{ backgroundColor: '#fff', borderColor: '#d9d9d9' }} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
          <label>Phone</label>
          <input type="text" className="form-control" placeholder="Phone No." style={{ backgroundColor: '#fff', borderColor: '#d9d9d9' }} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
          <label>Insurance (list company or list no insurance)</label>
          <input type="text" className="form-control" placeholder="Insurance" style={{ backgroundColor: '#fff', borderColor: '#d9d9d9' }} />
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
          <label>What seminar topics would you love to learn more about?</label>
          <Select
            options={options}
            placeholder="-- select --"
            isMulti
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: '#fff',
                borderColor: '#d9d9d9'
              })
            }}
          />
        </div>

        <div className='col-lg-12 col-md-12 mb-3'>
          <label>Select the services you are interested in:</label>
          <div className='checklist mt-3'>
            {[
              "Annual Wellness Exams", "Detoxification", "Sleep Difficulties", "Weight Loss Programs", 
              "Natural Cancer Support", "Mental Well-Being", "Health Education Seminars", 
              "Naturopathic Medicine Services", "Anti-Aging", "Pain Reduction", "Supplementation", 
              "Natural Prostate and ED Support", "Meditation & Stress Management", "Acupuncture", 
              "Corporate Wellness Services", "Sexual Wellness", "Natural Medicine, Vitamins, Herbs and Homeopathy", 
              "Nutritional Support", "IV Nutrient Infusion", "Hair and Stool Analysis", 
              "Colon Hydrotherapy", "Medical Testing", "Women's Health", "Digestive Complaints", "Thyroid Health"
            ].map((service, index) => (
              <div className="form-check" key={index}>
                <input className="form-check-input" type="checkbox" id={`check${index}`} name="option1" />
                <label className="form-check-label" htmlFor={`check${index}`}>{service}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-3">
          <label>Message</label>
          <textarea className="form-control" placeholder="Write Message" style={{ backgroundColor: '#fff', borderColor: '#d9d9d9' }}></textarea>
        </div>

        <div className='col-lg-12 col-md-12 col-sm-12 mb-3'>
          <label>Security Code</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Security Code" style={{ backgroundColor: '#fff', borderColor: '#d9d9d9' }} />
            <span className="input-group-text" id="basic-addon2">
              12345
            </span>
          </div>
        </div>

        <div className="mt-3 text-center">
          <button className="btn btn-skyblue-fill">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Form;

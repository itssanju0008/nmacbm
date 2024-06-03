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
    <>
      <div className="post-form">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="First Name
"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name
"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-12">
            <input type="text" className="form-control" placeholder="Email" />
          </div>

          <div className="mb-3 col-lg-6 col-md-12">
            <input type="text" className="form-control" placeholder="Phone" />
          </div>

          <div className="mb-3 col-lg-6 col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Insurance (list company or list no insurance)
"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-12">
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

          <div className="mb-3 col-lg-12 col-md-12">
            <label className="mb-3 mt-2">Select the services you are interested in :</label>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Annual Wellness Exams</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
                
              />
              <label className="form-check-label">Weight Loss Programs
</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              
              />
              <label className="form-check-label">Health Education Seminars
</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Dr. Browns Laboratory Supplements/Supplementation
 </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Naturopathic Medicine Services
</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Aesthetics/ Body Contouring with SpaMedica
</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
                
              />
              <label className="form-check-label">Hair Restoration Clinic
</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Rheumatology</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Dermatology</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Urology & Sexual Wellness
</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Covid-19 Testing/Treatments
</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">IV Nutrient Infusion
</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
              />
              <label className="form-check-label">Colon Hydrotheraphy
</label>
            </div>
           
</div>
          <div className="mb-3 col-lg-12 col-md-12">
            <textarea
              className="form-control"
              id=""
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="input-group mb-3 col-lg-12 col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Security Code"
            />
            <span className="input-group-text" id="basic-addon2">
              12345
            </span>
          </div>

         

          <div className="mt-3 text-center">
            <button className="btn btn-skyblue-fill">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

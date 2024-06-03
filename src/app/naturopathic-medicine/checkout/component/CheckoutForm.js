"use client";
import React, { useState } from "react";
const initialState = {
  patient_first_name: "",
  patient_last_name: "",
  patient_dob: "",
  patient_email: "",
  patient_phone: "",
  patient_address: "",
  patient_city: "",
  patient_state: "",
  patient_zipcode: "",
  patient_country: "",
  grand_total: "",
  card_number: "",
  payment_proof: "",
  added_by: "",
  invoice_no: "",
  service_provider: "",
  service: "",
  note: "",
};
const months = [
  { st: "January", no: 1 },
  { st: "February", no: 2 },
  { st: "March", no: 3 },
  { st: "April", no: 4 },
  { st: "May", no: 5 },
  { st: "June", no: 6 },
  { st: "July", no: 7 },
  { st: "August", no: 8 },
  { st: "September", no: 9 },
  { st: "October", no: 10 },
  { st: "November", no: 11 },
  { st: "December", no: 12 },
];
const years = [
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
];
const CheckoutForm = () => {
  const [form,setForm]=useState(initialState);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryError, setExpiryError] = useState('');
 
  const handleExpiryDateChange = (e) => {
    let value = e.target.value;

    // Remove any non-digit characters
    value = value.replace(/\D/g, '');

    // If length exceeds 4 characters, truncate it
    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    // Format the value as MM/YY
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }

    setExpiryDate(value);
  }
  return (
    <>
      <div className="checkout-form">
        <div>
          <h4 className="service-Common-heading text-center">$100.00 USD </h4>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Coupon Code"
              />
              <span className="input-group-text" id="basic-addon2">
                Apply
              </span>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input type="text" className="form-control" placeholder="First Name" value={form?.patient_first_name} onChange={(e)=>setForm({...form,patient_first_name:e.target.value})} />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input type="text" className="form-control" placeholder="Last Name" value={form?.patient_last_name} onChange={(e)=>setForm({...form,patient_last_name:e.target.value})} />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input type="text" className="form-control" placeholder="Email" value={form?.patient_email} onChange={(e)=>setForm({...form,patient_email:e.target.value})} />
          </div>

       

          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Address Line 1 "
              value={form?.p} onChange={(e)=>setForm({...form,patient_first_name:e.target.value})}
            />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Apt, Suite, Etc"
            />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input type="text" className="form-control" placeholder="City" />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <select className="form-control">
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Åland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
            </select>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <select className="form-control">
              <option value="">State/Province/Region</option>
            </select>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Zip/Postal Code"
            />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="divider border mb-3"></div>
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Card Number"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <select
              className="form-control"
            >
              <option value="">Expiry Month</option>
              {months?.map((row)=><option key={row?.no} value={row?.no}> {row?.st} </option>)}
            </select>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          {/* <input
          type="text"
          id="expiry-date"
          name="expiry-date"
          className="form-control"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          placeholder="MM/YY"
          maxLength={5}
        /> */}

            <select
              className="form-control"
            >
              <option value="">Expiry Year</option>
              {years?.map((row,index)=><option key={index} value={row}> {row} </option>)}
            </select>
          </div>
         
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="CVV"
              maxLength={3}
            />
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label className="form-check-label" for="flexCheckChecked">
                Subscribe to our email list.
              </label>
            </div>
          </div>

          <div className="mt-3 text-center">
            <button className="btn btn-skyblue-fill">Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;

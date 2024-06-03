"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./payments.css";
import axios from "axios";
import { APIBASE } from "@/Api/apiConfig";
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
  grand_total: 0,
  card_number: "",
  expiry_month: "",
  expiry_year: "",
  cvv: "",
  added_by: "",
  note: "",
  invoice_no: "",
  service_provider: "",
  service: "",
};
const PaymentForm = () => {
  const [state, setState] = useState(initialState);
  const [saving, setSaving] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await axios.post(`${APIBASE}make-other-payment`, state);
      setSaving(false);
      if (res?.data?.error) {
        toast.error(res?.data?.error);
      } else {
        toast.success("Payment successful.");
        setState(initialState);
      }
    } catch (error) {
      setSaving(false);
      toast.error(error?.response?.data?.message);
    }
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
    "23",
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

  const cities = [
    "Sandys",
    "Southampton",
    "Warwick",
    "Pembroke",
    "Paget",
    "Devonshire",
    "Smith's",
    "Hamilton",
    "St. George's",
  ];
  return (
    <>
      <ToastContainer />
      <div className="payment_form">
        <h3 className="payment-heading mb-3 text-center"> Payment Details</h3>
        <div className="">
          <form onSubmit={(e) => handleSubmit(e)}>
            <p className="text-left fw-bold fa-18 py-1">Patient Detail</p>
            <div className="mb-3 row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label className="form-label mb-2">Patient First Name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Patient first name"
                  onChange={(e) =>
                    setState({ ...state, patient_first_name: e.target.value })
                  }
                  value={state?.patient_first_name}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label className="form-label">Patient Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Patient last name"
                  value={state?.patient_last_name}
                  onChange={(e) =>
                    setState({ ...state, patient_last_name: e.target.value })
                  }
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) =>
                    setState({ ...state, patient_dob: e.target.value })
                  }
                  value={state?.patient_dob}
                />
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address
"
                  onChange={(e) =>
                    setState({ ...state, patient_email: e.target.value })
                  }
                  value={state?.patient_email}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Number
"
                  onChange={(e) => {
                    if (e.target.value.toString().length <= 10) {
                      setState({ ...state, patient_phone: e.target.value });
                    }
                  }}
                  value={state?.patient_phone}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label className="form-label"> Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address
"
                  onChange={(e) =>
                    setState({ ...state, patient_address: e.target.value })
                  }
                  value={state?.patient_address}
                />
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">Country</label>
                <select
                  className="form-control"
                  onChange={(e) =>
                    setState({ ...state, patient_country: e.target.value })
                  }
                  value={state?.patient_country}
                >
                  <option value="">Select</option>
                  <option value="bermuda">Bermuda</option>
                </select>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">City/Parish</label>
                <select
                  required
                  value={state?.patient_city}
                  className="form-control"
                  onChange={(e) =>
                    setState({ ...state, patient_city: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  {cities?.map((ele, index) => (
                    <option value={ele} key={index}>
                      {ele}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">State</label>
                <select
                  className="form-control"
                  onChange={(e) =>
                    setState({ ...state, patient_state: e.target.value })
                  }
                  value={state?.patient_state}
                >
                  <option value="">Select</option>
                  <option value="bermuda">Bermuda</option>
                </select>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">Zip code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Zip code"
                  onChange={(e) =>
                    setState({ ...state, patient_zipcode: e.target.value })
                  }
                  value={state?.patient_zipcode}
                />
              </div>
            </div>
            <p className="text-left fw-bold fa-18 py-1">Card Detail</p>
            <div className="mb-3 row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">Card Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Card Number
"
                  required
                  onChange={(e) => {
                    if (e.target.value.toString().length <= 16)
                      setState({ ...state, card_number: e.target.value });
                  }}
                  value={state?.card_number}
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder="CVV"
                  onChange={(e) => {
                    if (e.target.value.toString().length <= 3)
                      setState({ ...state, cvv: e.target.value });
                  }}
                  value={state?.cvv}
                />
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">Expiry Year</label>
                <select
                  className="form-control"
                  required
                  onChange={(e) =>
                    setState({ ...state, expiry_year: e.target.value })
                  }
                  value={state?.expiry_year}
                >
                  <option value="">Select</option>
                  {years?.map((row, index) => (
                    <option value={row} key={index}>
                      {row}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">Expiry Month</label>
                <select
                  required
                  className="form-control"
                  onChange={(e) =>
                    setState({ ...state, expiry_month: e.target.value })
                  }
                  value={state?.expiry_month}
                >
                  <option value="">Select</option>
                  {months?.map((row, index) => (
                    <option value={row?.no} key={index}>
                      {row?.st}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-left fw-bold fa-18 py-1">Service Detail</p>
            <div className="mb-3 row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label"> Invoice Number</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="invoice number"
                  onChange={(e) => {
                    setState({ ...state, invoice_no: e.target.value });
                  }}
                  value={state?.invoice_no}
                />{" "}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label"> Service Provider</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="service provider"
                  onChange={(e) => {
                    setState({ ...state, service_provider: e.target.value });
                  }}
                  value={state?.service_provider}
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label"> Service</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="service"
                  onChange={(e) => {
                    setState({ ...state, service: e.target.value });
                  }}
                  value={state?.service}
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <label className="form-label">Note/Comment</label>
                <textarea
                  className="form-control"
                  placeholder="note...
"
                  onChange={(e) => {
                    setState({ ...state, note: e.target.value });
                  }}
                  value={state?.note}
                />
              </div>
            </div>
            <p className="text-left fw-bold fa-18 py-1">Amount</p>
            <div className="mb-3">
              <label className="form-label">
                <b>Amount</b>{" "}
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Amount
"
                required
                onChange={(e) => {
                  const inputValue = e.target.value;
                  // Remove leading zeros
                  const sanitizedValue = inputValue.replace(/^0+/, "");

                  // Check if the sanitized value is a valid number
                  if (!isNaN(sanitizedValue)) {
                    setState({ ...state, grand_total: sanitizedValue });
                  }
                  // if (e.target.value >= 0) {
                  //   setState({ ...state, grand_total: e.target.value });
                  // }
                }}
                value={state?.grand_total}
              />
            </div>
            <div className="mt-3 text-center">
              <button className="btn btn-skyblue-fill" disabled={saving} type="submit">
                {saving ? "Processing" : "Pay"} ${state?.grand_total}
              </button>
              {/* <button type="submit" className="btn btn-pay" disabled={saving}>
                {saving ? "Processing" : "Pay"} ${state?.grand_total}
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;

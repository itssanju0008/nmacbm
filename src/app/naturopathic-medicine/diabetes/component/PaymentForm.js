import React from "react";

const PaymentForm = () => {
  return (
    <>
      <div className="form-bg peach-bg p-4">
        <div>
          <h4 className="service-Common-heading text-center">
            Using Your Insurance?{" "}
          </h4>
          <p className="service-para text-center">
            Please complete this form, and you&#39;ll receive an email with
            access details once your insurance validation has be completed.
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Patients Name"
              style={{
                backgroundColor: "#fff !important",
                borderColor: "#d9d9d9!important",
                borderColor: "#d9d9d9!important",
              }}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <label>Date of Birth </label>
            <input
              type="text"
              className="form-control"
              placeholder="Date of Birth "
              style={{
                backgroundColor: "#fff !important",
                borderColor: "#d9d9d9!important",
              }}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <label>Email </label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              style={{
                backgroundColor: "#fff !important",
                borderColor: "#d9d9d9!important",
              }}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <label>Name on Insurance Card</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name on Insurance Card"
              style={{
                backgroundColor: "#fff !important",
                borderColor: "#d9d9d9!important",
              }}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <label>Insurance Provider</label>
            <input
              type="text"
              className="form-control"
              placeholder="Insurance Provider"
              style={{
                backgroundColor: "#fff !important",
                borderColor: "#d9d9d9!important",
              }}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <label> Insurance Certificate Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Insurance Certificate Number"
              style={{
                backgroundColor: "#fff !important",
                borderColor: "#d9d9d9!important",
              }}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <label>Insurance Group Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Insurance Group Number"
              style={{
                backgroundColor: "#fff !important",
                borderColor: "#d9d9d9!important",
              }}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <label>Security Code</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Security Code"
                style={{
                  backgroundColor: "#fff !important",
                  borderColor: "#d9d9d9!important",
                }}
              />
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
    </>
  );
};

export default PaymentForm;

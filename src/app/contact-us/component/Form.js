"use client";
import { LuRefreshCcw } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import authApi from "@/Api/authApi";
import { toast } from "react-toastify";
const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};
const Form = () => {
  const [form, setForm] = useState(initialState);
  const [captcha, setCaptcha] = useState("");
  const [agree, setAgree] = useState(false);
  const [saving,setSaving]=useState(false)
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captchaLength = 6; // You can adjust the length of the captcha here
    let captchaValue = "";
    for (let i = 0; i < captchaLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captchaValue += characters[randomIndex];
    }
    setCaptcha(captchaValue); // Set the generated captcha
  };
  useEffect(() => {
    generateCaptcha();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true)
    try {
      if (enteredCaptcha == captcha) {
        await authApi.post(`contactuses`, form);
        toast.success("Thank you for contacting us. We will get back to you as soon as possible.");
        setForm(initialState);
        setAgree(false)
        setEnteredCaptcha("");
        generateCaptcha();
      }
      setSaving(false)
    } catch (error) {
      setSaving(false)
    }
  };
  return (
    <>
      <div className="post-form">
        <div>
          <h4 className="sub-common-title">Have a Question?</h4>
          <hr />
          <p className="form-text">
            Email us at info@nmac.bm or fill in the form below. We&#39;ll get
            back to you within 24 hours (typically sooner!) to arrange a time to
            speak.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                required
                value={form?.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                required
                className="form-control"
                placeholder="Phone No."
                value={form?.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                required
                value={form?.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                required
                id=""
                rows="3"
                placeholder="Write Message"
                value={form?.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                required
                placeholder="Captcha"
                value={enteredCaptcha}
                onChange={(e) => setEnteredCaptcha(e.target.value)}
              />
              <span className="input-group-text" id="basic-addon2">
                {captcha}{" "}
                <span>
                  <LuRefreshCcw
                    className="ml-2"
                    style={{
                      cursor: "pointer",
                      fontSize: "24px",
                      marginLeft: "10px",
                    }}
                    onClick={() => generateCaptcha()}
                  />
                </span>
              </span>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
                required
                checked={agree}
                onChange={(e) => setAgree(e.target)}
              />
              <label className="form-check-label" for="flexCheckChecked">
                By submitting this form, you have read and agreed to our{" "}
                <b> Terms of Use</b>
              </label>
            </div>

            <div className="mt-3 text-center">
              <button className="btn btn-skyblue-fill" disabled={saving} type="submit">
                {" "}
                {saving?"Submitting":'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;

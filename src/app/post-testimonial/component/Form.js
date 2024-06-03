"use client";
import authApi from "@/Api/authApi";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { toast } from "react-toastify";
const initialState = {
  name: "",
  email: "",
  ratings: "",
  image: "",
  service: "",
  description: "",
};
const Form = () => {
  const [form, setForm] = useState(initialState);
  const [allServices,setAllServices]=useState([]);
  const [rating, setRating] = useState(0);
  const [agree,setAgree]=useState(false);
  const [captcha,setCaptcha]=useState('');
  const [saving,setSaving]=useState(false);
  const [enteredCaptcha,setEnteredCaptcha]=useState('');
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
  const getAllServices = async () => {
    try {
      const res = await authApi.get(`services`);
      const data = res?.data;
      setAllServices(
        data?.map((ele) => ({ label: ele?.name, value: ele?.id }))
      );
    } catch (error) {}
  };
  useEffect(() => {
    getAllServices();
  }, []);
  const handleStarClick = (selectedRating) => {
   
    setRating(selectedRating);
  };
useEffect(()=>{
  if(rating){
    setForm({...form,ratings:rating})
  }else{
    setForm({...form,ratings:0})
  }

},[rating])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true)
    try {
      if (enteredCaptcha == captcha) {
        await authApi.post(`testimonials`, form);
        toast.success("Thank you for contacting us. We will get back to you as soon as possible.");
        setForm(initialState);
        setAgree(false)
        setRating(0)
        setEnteredCaptcha("");
        generateCaptcha();
      }else{
        toast.warn('Entered Captcha is wrong!')
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
          <h4 className="post-title">Post Your Valuable Review</h4>
        </div>
<form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-12 col-md-12 mb-3">
            <p className="mb-2">Rate your experience:</p>
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <span
                  key={index}
                  onClick={() => handleStarClick(ratingValue)}
                  style={{ cursor: "pointer" }}
                >
                  {ratingValue <= rating ? (
                    <FaStar color="#ffc107" className="rating-icon" />
                  ) : (
                    <FaStar className="rating-icon" />
                  )}
                </span>
              );
            })}
          </div>

          <div className="col-lg-12 col-md-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={form?.name}
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="col-lg-12 col-md-12 mb-3">
            <input type="mail" className="form-control" placeholder="Email" 
            required
              value={form?.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="col-lg-12 col-md-12 mb-3">
            <select className="form-control"
              value={form?.service}
              required
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value=''>--select category--</option>
              {allServices?.map((ele)=>
               <option key={ele?.value} value={ele?.value}>{ele?.label}</option>
            )}
            </select>
          </div>

          <div className="col-lg-12 col-md-12 mb-3">
            <textarea
              className="form-control"
              id=""
              required
              rows="3"
              placeholder="Testimony/Your Story"
              value={form?.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            ></textarea>
          </div>
          <div className="mbottom-4">
            <div className="custom-file">
              <input
                type="file"

                className="custom-file-input"
                onChange={(e)=>setForm({...form,image:e.target.files[0]})}
                id="customFile"
                name="filename"
              />
              <label className="custom-file-label" for="customFile">
                {form?.image?.name?form?.image?.name:'Choose file'}
              </label>
            </div>
          </div>

          <div className="input-group col-lg-12 col-md-12 mb-3">
            <input
              type="text"
              className="form-control"
              required
              placeholder="Captcha"
              value={enteredCaptcha}
              onChange={(e) => setEnteredCaptcha(e.target.value)}
            />
            <span className="input-group-text" id="basic-addon2">
         {captcha}
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
          <div className="input-group col-lg-12 col-md-12 mb-3">
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
          </div>

          <div className="mt-3 text-center">
            <button className="btn btn-skyblue-fill" disabled={saving} type="submit">{saving?"Processing":'Submit'}</button>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Form;

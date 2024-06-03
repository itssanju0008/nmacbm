"use client";
import "./footer.css";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import authApi from "@/Api/authApi";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  phone: "",
  email: "",
};
const Footer = () => {
  const [form, setForm] = useState(initialState);
  const [saving, setSaving] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await authApi.post(`subscribers`, form);
      toast.success("You have subscribed successfully.");
      setForm(initialState);
      setSaving(false);
    } catch (error) {
      setSaving(false);
    }
  };
  return (
    <>
      <footer className="pt-4 pb-3">
        <div className="side-space">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="footer-heading mb-0">
                <span style={{ fontFamily: "poppins" }}> Call Us Today : </span>{" "}
                (441)293-5476
              </h3>
            </div>
          </div>
          <hr />
          <div className="mt-4 row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div class="newsletters">
                <h4>NEWSLETTER</h4>
                <p>
                  We love to keep our clients updated on events, new services,
                  and special offers. Sign-Up today!
                </p>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padd-lr0">
                  <form class="newsletter-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-12 mb-3">
                        <input
                          type="text"
                          required
                          placeholder="Name"
                          name="name"
                          value={form?.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="form-control special-form"
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 mb-3">
                        <input
                          type="text"
                          placeholder="Phone"
                          required
                          name="phone"
                          value={form?.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className="form-control special-form"
                        />
                      </div>
                      <div className="col-lg-12 mb-3">
                        <input
                          type="text"
                          required
                          placeholder="Email"
                          name="email"
                          value={form?.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="form-control special-form"
                        />
                      </div>
                      <div className="col-lg-12 text-center mt-2">
                        <button
                          type="submit"
                          disabled={saving}
                          className="btn-skyblue-fill"
                        >
                          {saving ? "Processing" : "Subscribe"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="follow-us">
                <h4>Quick Links</h4>
                <div className="quick-liks">
                  <ul class="list-inline main-footer">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    {/* <li>
                      <Link href="#">Our Services</Link>
                    </li> */}
                    <li>
                      <Link href="/specials-&-deals">
                        Events &amp; Specials{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="/media">In The Media</Link>
                    </li>
                    <li>
                      <Link href="/testimoinal">Testimonials</Link>
                    </li>
                  </ul>

                  <ul class="list-inline main-footer">
                    <li>
                      <Link href="#" target="_blank">
                        NMAC Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-letter">Newsletters</Link>
                    </li>
                    <li>
                      <Link href="/download">Downloads</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    {/* <li>
                      <Link href="#">Privacy Policy</Link>
                    </li> */}
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="contact-us">
                <h4>NORTHSHORE MEDICAL & AESTHETICS CENTER </h4>
                <p className="mb-1">
                  7 North Shore Road Devonshire DV01 Bermuda{" "}
                </p>
                <p className="mb-1">
                  <b>Telephone:</b>  293-5476
                </p>
                <p className="mb-1">
                  <b>Email </b>
                  <Link href="mailto:info@nmac.bm" className="text-skyblue">
                    &nbsp; info@nmac.bm
                  </Link>
                </p>
              </div>

              <div className="follow-us">
                <h4>FOLLOW US</h4>
                <ul className="follow-list">
                  <li>
                    <Link href="https://www.facebook.com/NMACBermuda/" target="_blank">
                      {" "}
                      <FaFacebookSquare className="facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/channel/UCtzA3es_bKyC6IwPPf5Qesw" target="_blank">
                      {" "}
                      <FaYoutube className="youtube" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/nmac_bda/" target="_blank">
                      {" "}
                      <FaInstagram className="insta" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row  mt-4">
            <div className="col-lg-7 col-md-12 text-center m-auto">
              <Image
                src={"/all/client-logo.png"}
                alt="prtner"
                width={300}
                height={100}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="col-lg-6 col-md-12 text-center m-auto">
              <p className="mt-3 mb-0 copyright-text">
                © Copyright 2022-2023. Northshore Medical & Aesthetics Center.
                All Rights Reserved.
              </p>
              <div class="designed-by">
                Made With &nbsp;{" "}
                <Image
                  src={"/all/heart.svg"}
                  class="footerimg"
                  height={15}
                  width={15}
                  alt="heart"
                />
                <Link
                  href="https://www.designdot.co.in/"
                  target="_blank"
                  class="designdot-link"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

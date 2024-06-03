import './footer.css';
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare  ,FaYoutube , FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className='pt-5 pb-3'>
          <div className='side-space'>
              <div className='row'>
                  <div className='col-lg-12'>
                      <h3 className='footer-heading'>Call Us Today : (441)293-5476</h3>
                        <div className='quick-link my-4 text-center'>
                          <ul class="list-inline main-footer">
                              <li><Link href="/">Home</Link></li>
                              <li><Link href="/about-us">About Us</Link></li>
                              <li><Link href="#">Our Services</Link></li>
                              <li><Link href="/events-and-specials">Events &amp; Specials </Link></li>
                              <li><Link href="/media">In The Media</Link></li>
                              <li><Link href="/testimoinal">Testimonials</Link></li>
                              <li><Link href="#" target="_blank">NMAC Jobs</Link></li>
                              <li><Link href="/news-letter">Newsletters</Link></li>
                              <li><Link href="/download">Downloads</Link></li>
                              <li><Link href="/blog">Blog</Link></li>
                              <li><Link href="#">Privacy Policy</Link></li>
                              <li><Link href="/contact-us">Contact Us</Link></li>
                          </ul>
                        </div>
                  </div>

              </div>

              <div className='mt-4 row'>
                  <div className='col-lg-4 col-md-12'>
                    <div class="newsletters">
                      <h4>NEWSLETTER</h4>
                      <p>We love to keep our clients updated on events, new services, and special offers. Sign-Up today!</p>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padd-lr0">
                      <form class="newsletter-form" action="#">
                          <input type="text" placeholder="Search.." name="search"/>
                          <button type="submit">GO</button>
                          </form>
                      </div>
                  </div>

                  </div>

                  <div className='col-lg-4 col-md-12'>
                      <div className='follow-us'>
                        <h4>FOLLOW US</h4>
                        <ul className='follow-list'>
                          <li><Link href="#"> <FaFacebookSquare  className='facebook'/></Link></li>
                          <li><Link href="#"> <FaYoutube  className='youtube' /></Link></li>
                          <li><Link href="#"> <FaInstagram  className='insta'/></Link></li>
                        </ul>
                      </div>
                  </div>

                  <div className='col-lg-4 col-md-12'>
                      <div className='contact-us'>
                        <h4>NORTHSHORE MEDICAL & AESTHETICS CENTER </h4>
                      <p className='mb-1'>7 North Shore Road Devonshire DV01 Bermuda </p>
                      <p><b>Telephone: 293-5476</b> 

                      <Link href="mailto:info@nmac.bm" className='text-skyblue'> <b> info@nmac.bm</b></Link></p>

                      </div>
                  </div>
              </div>

              <div className='row  mt-4'>
                <div className='col-lg-8 col-md-12 text-center m-auto'>
                  <Image src={'/all/client-logo.png'} alt="prtner" width={300} height={100} style={{width:'100%',height:'auto'}}/>
                </div>

                <div className='col-lg-6 col-md-12 text-center m-auto'>
                  <p className='mt-3 mb-0 copyright-text'>© Copyright 2022-2023. Northshore Medical & Aesthetics Center. All Rights Reserved.
                  </p>
                  <div class="designed-by">
                        Made With &nbsp; <Image src={'/all/heart.svg'} class="footerimg" height={15} width={15} alt="heart"/>
                        <Link href="https://www.designdot.co.in/" target="_blank" class="designdot-link"></Link>
                    </div>
                </div>
              </div>
          </div>
      </footer>

    
    </>
  )
}

export default Footer

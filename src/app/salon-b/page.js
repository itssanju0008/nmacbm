'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./salon_b.css";
// import SpamedicaImage from "./component/SalonBGallery"
// import NMACVideos from "./component/NMACVideos";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";
import ImageCard from "../shared/ImageCard";
import ResImageCard from "./components/ImageCard"
import { FaLongArrowAltRight } from "react-icons/fa";
import BannerSection from "../shared/BreadCrum";
import authApi from "@/Api/authApi";


const SalonB = () => {
  const [data,setData]=useState(null);
  const getData=async()=>{
    try {
      const res=await authApi.get(`service/salon-b-hair-styling-barber`);
      setData(res?.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData();
  },[])
  const Amoryhairresult = [
    {
      id: 1,
      title: 'Salon B - Hair Styling & Barber ',
      imgUrl: "/service-img/amory_client1.jpg",
    },
    {
      id: 2,
      title: 'Salon B - Hair Styling & Barber ',
      imgUrl: "/service-img/amory_client2.jpg",
    },
    {
      id: 3,
      title: 'Salon B - Hair Styling & Barber ',
      imgUrl: "/service-img/amory_client3.jpg",
    },
    {
      id: 4,
      title: 'Salon B - Hair Styling & Barber ',
      imgUrl: "/service-img/amory_client4.jpg",
    },
  ];
  
  const HairClient = [
    {
      id: 1,
      title: 'Hair Clients Love',
      imgUrl: "/service-img/hair_client1.jpg",
    },
    {
      id: 2,
      title: 'Hair Clients Love',
      imgUrl: "/service-img/hair_client2.jpg",
    },
    {
      id: 3,
      title: 'Hair Clients Love',
      imgUrl: "/service-img/hair_client3.jpg",
    },
  
    {
      id: 4,
      title: 'Hair Clients Love',
      imgUrl: "/service-img/hair_client4.jpg",
    },
   
  ];

  const bannerData = {
    imageUrl: "/slider/slider.jpg",
    title: "Salon B - Hair Styling & Barber",
    description:`"Book Us, We Specialize In Achieving Healthy Hair For All
    Hair Types."`
  };

  return (
    <>

     {/* banner */}

      <BannerSection imageUrl={bannerData.imageUrl} title={bannerData.title} description={bannerData.description}/>

     {/* banner */}

    

      <section className="side-space py-6">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-common-heading mb-3">
              <h3>About Salon B</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="salonb-info">
              <p>
                Welcome to Salon B! We specialize in achieving healthy hair for
                all hair types. Located upstairs of NorthShore Medical &
                Aesthetics Center, floor the SpaMedica floor, we provide hair
                stylist, barbering, and hair restoration services for men, women
                and all hair types. Book us today and enjoy quality, reliable
                hair services on your journey to look amazing with healthy hair.
              </p>

              <div className="row mt-4">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="/service-img/hairstyling.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="/service-img/barbering.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="/service-img/hairrestoration.jpg"
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>
                  Meet Our Celebrity Hair Stylist! Hair Styling for Men & Women{" "}
                </h3>
                <div className="line"></div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4 col-md-6 col-sm-12  mb-3 mb-lg-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="/service-img/healthy-hair.png"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12  mb-3 mb-lg-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="/service-img/shampoo-blowdry.jpg"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12  mb-3 mb-lg-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="/service-img/blowdry.jpg"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>Sheri Burgess </h3>
                <div className="line"></div>
              </div>

              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="profile-border">
                    <Image
                      src="/service-img/sheri-photo.jpg"
                      className="img-fluid rounded"
                      width={200}
                      height={200}
                      alt="image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                <div className="col-lg-10 col-md-8 col-sm-12">
                  <div className="salonb-info mt-3 mt-md-0">
                    <h3>Certified Trichologist & Hair Stylist </h3>
                    <p className="mt-3">
                      Sheri Burgess is a Cosmetologist and Hair Restoration
                      Practitioner in Salon B at Northshore Medical & Aesthetics
                      Centre. She earned her cosmetology diploma from Dudley
                      Beauty College in Charlotte, North Carolina in 2004, and
                      her past 16 years in the hair industry has proven her to
                      be an accomplished Hair Stylist. With a passion for hair
                      and enhancing a client’s confidence, Sheri is capable of
                      achieving the look her client’s want - whether it’s a
                      dramatic cut, pop of color, or the newest hair trend. As a
                      Hair Restoration Practitioner, her services include
                      administering treatments that care for and improve hair
                      and scalp health. In addition to this, Sheri brings a
                      holistic approach to hair care. She looks at her client’s
                      lifestyles and identifies the effects those habits have on
                      the health of their hair and scalp and provides
                      nutritional advice to help. Sheri is experienced in
                      various hair conditions such as alopecia, informally known
                      as hair loss, and is currently completing her
                      certification in Trichology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>Our Main Hair Services We Offer : </h3>
                <div className="line"></div>
              </div>

              <div className="patient-info d-block d-md-flex gap-5  ">
                <ul className="patient-info-list">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Shampoo Blow Dry
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Shampoo long Blow Dry
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Moisture Treatment
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Protien Treatment
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Semi / Demi Colour
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Natural Hair Press
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Colour & Trim
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Natural Shampoo Style
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Permanent Colour
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Dry Cut
                  </li>
                </ul>

                <ul className="patient-info-list ms-0 ms-md-3 ms-lg-5">
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Shampoo Trim
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Shampoo & Curls
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Relaxer or Texturizer Retouch Blowdry or / Set
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Relaxer & Treatment / Colour
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    The works (relaxer treatment colour trim)
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Wig / Weave Customization (style & cut)
                  </li>
                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    LED Photo Laser Therapy Treatment
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    LED Photo Laser Therapy Treatment with an hair service added
                    Only
                  </li>

                  <li>
                    <IoMdCheckmark className="me-3 link-text arrow-size" />
                    Hair loss and scalp makeover treatment
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-3 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>Our Hair Clients Love us </h3>
                <div className="line"></div>
              </div>
              <div className="video-row">
                  {data?.photo_gallery?.map((imageData) => (
                    <ResImageCard
                      key={imageData.id}
                      imageData={imageData}
                    />
                  ))}
                </div>

                {/* view more */}
                <div className="text-end mt-4">
                  {/* Use the correct Link component syntax */}
                  <Link href="/photo-gallery" className="btn btn-skyblue-fill">
                    View More &nbsp;
                    <FaLongArrowAltRight className="video-right-icon" />
                  </Link>
                </div>
            </div>
            <div className="mt-3 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>Products we Specialize In:  </h3>
                <div className="line"></div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4 col-md-6 col-sm-12  mb-3 mb-md-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="https://nmac.bm/salonb/images/product01.jpg"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-md-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="https://nmac.bm/salonb/images/product02.jpg"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                      alt="image"
                    />
                  </div>
                </div>

             
              </div>
             
              </div>
          

             <div className="hair_restor text-center  mt-3 mt-md-4">
              <h3 className="sub-common-title">INTERESTED ALSO IN OUR HAIR RESTORATION & HAIR GROWTH SERVICES? </h3>
              <Link href="/hair-restoration" className="btn btn-skyblue-fill text-white px-5">Learn More</Link>
             </div>

             <div className="mt-3 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>We Also Offer Barbering Services for Men & Women  </h3>
                <div className="line"></div>

                <div className="row mt-4">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
                  <div className="img-border img-zoomv ">
                    <Image
                      src="/service-img/Barbering-Services1.jpg"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12  mb-3 mb-lg-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="/service-img/Barbering-Services2.jpg"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                      alt="image"
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12  mb-3 mb-lg-0">
                  <div className="img-border img-zoom">
                    <Image
                      src="/service-img/Barbering-Services3.jpg"
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                      }}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
            
          <div className="mt-3 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>Amory Boyce </h3>
                <div className="line"></div>
              </div>

              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="profile-border">
                    <Image
                      src="/service-img/Amory.jpg"
                      className="img-fluid rounded"
                      width={200}
                      height={200}
                      alt="image"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                <div className="col-lg-10 col-md-8 col-sm-12">
                  <div className="salonb-info mt-3 mt-md-0">
                    <h3>Certified Barber & Hair Restoration Specialist </h3>
                    <p className="mt-3">
                    Amory had been a barber for over 15 years. Amory trained at the American Barber Institute.
                     His favorite style cut is the Basic everyday cut. Amory has always had a passion for transformation cuts and now has 
                     added to his skillset, Men installments. Call the office for a consultation. Appointments available upon request.
                     </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 mt-md-5">
              <div className="all-common-heading mb-4">
                <h3>OUR RESULTS  </h3>
                <div className="line"></div>
              </div>

              <div className="video-row">
                  {data?.result_gallery?.map((imageData) => (
                    <ResImageCard
                      key={imageData.id}
                      imageData={imageData}
                    />
                  ))}
                </div>

                {/* view more */}
                <div className="text-end mt-3 mt-md-4">
                  {/* Use the correct Link component syntax */}
                  <Link href="/photo-gallery" className="btn btn-skyblue-fill">
                    View More &nbsp;{" "}
                    <FaLongArrowAltRight className="video-right-icon" />
                  </Link>
                </div>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SalonB;

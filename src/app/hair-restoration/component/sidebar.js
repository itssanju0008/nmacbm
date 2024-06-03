import React from "react";
import Link from "next/link";
import { AiOutlineLine } from "react-icons/ai";
import "./Sidebar.css";

const Sidebar = () => {
  const servicesData = [
    {
      title: "Services for Men & Women Body Contouring & Weight Loss",
      services: [
        { name: "Laser Slimming", link: "/spamedica-aesthetics/laser" },
        { name: "Ultrasound Slimming", link: "/spamedica-aesthetics/ultrasound" },
        { name: "Freezesculpting", link: "/spamedica-aesthetics/freezesculpting" },
        { name: "Sure Sculpt", link: "/spamedica-aesthetics/sure-sculpt" },
        { name: "Muscle Sculpting", link: "/spamedica-aesthetics/muscle-sculpting" },
      ]
    },
    {
      title: "Skin Tightening",
      services: [
        { name: "Radio Frequency Skin Tightening", link: "/spamedica-aesthetics/skin" },
        { name: "Endolift Laser", link: "/spamedica-aesthetics/endolift" },
      ]
    },
    {
        title: "Aesthetic Services",
        services: [
          { name: "Laser Teeth Whitening", link: "/spamedica-aesthetics/laser-teeth-whitening" },
          { name: "ViPeel", link: "/spamedica-aesthetics/vipeel" },
          { name: "Microdermabrasions", link: "/spamedica-aesthetics/microdermabrasions" },
          { name: "Chemical Peels", link: "/spamedica-aesthetics/chemical" },
          { name: "New Bio Active Peel", link: "/spamedica-aesthetics/newbioactive" },
          { name: "Laser Hair Removal", link: "/spamedica-aesthetics/laser-hair" },
          {name:"Laser Spot Removal",link:"/spamedica-aesthetics/laser-spot-removal"},
          {name:"Acne Treatments",link:"/spamedica-aesthetics/laser-acne-therapy"},
          {name:"Dermafac Treatments",link:"/spamedica-aesthetics/dermafrac"},
          {name:"Dermafac Facials",link:"/spamedica-aesthetics/dermafrac-facials"},
          {name:"Tattoo Removal",link:"/spamedica-aesthetics/tatto"},
          {name:"Waxing",link:"/spamedica-aesthetics/Waxing"},
          {name:"Botox",link:"/spamedica-aesthetics/botox"},
          {name:"Dermal Fillers",link:"/spamedica-aesthetics/dermal"},
          {name:"Vampire Facial",link:"/spamedica-aesthetics/vampire-facial"},
          {name:"Platelet Rich Plasma",link:"/spamedica-aesthetics/platelet-plasa"},
        ]
      },
      {
        title: "Aesthetic Procedures",
        services: [
          { name: "Vein Treatments (Sclerotheraphy)", link: "/spamedica-aesthetics/vein-treatments" },
          { name: "Scar & Keloid Removal", link: "/spamedica-aesthetics/scar" },
          // {name:"Removal of Skin Tags",link:"/spamedica-aesthetics/removal-of-skin-tags"},
          {name:"Acne Scar Removal",link:"/spamedica-aesthetics/scar-removal"},
          {name:"PDO Thread List",link:"/spamedica-aesthetics/pdo-thread-lift"},
          {name:"Liquid Face Lift",link:"/spamedica-aesthetics/liquid-face-lift"},
          {name:"Carboxytherapy",link:"/spamedica-aesthetics/carboxytherapy"},
         
        ]
      },
  ];

  return (
    <>

      <div className="service-btn-link ms-md-3 ms-0 mb-3">
          <Link href="/spa" className="btn bg-skyblue w-100">SPA TOUR </Link>
          <Link href="/before-after-gallery" className="btn bg-outiline-skyblue w-100">BEFORE & AFTERS </Link>
      </div>
      
      <div className="service-sidebar ms-3">
        {servicesData.map((set, index) => (
          <div key={index}>
            <div className="">
            <h4>{set.title}</h4>
            <div className="h-decor"></div>
            </div>
            <div className="service-list">
              <ul>
                {set.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link href={service.link} >
                      <AiOutlineLine className="me-2" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

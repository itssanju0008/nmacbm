import React from "react";
import Link from "next/link";
import { AiOutlineLine } from "react-icons/ai";
import "../../shared/service_sidebar.css";


const ServiceSidebar = () => {
  const servicesData = [
    {
      title: "Pain Management Services",
      services: [
        { name: "Medicated Manual Therapy", link: "/medicated-manual-therapy" },
        { name: "Trigger Point Injections", link: "#" },
        { name: "How are Trigger Point Injections used?", link: "#" },
        { name: "Nerve Blocks", link: "#" },
        { name: "Scar Infiltration", link: "#" },
        { name: "Blood Typing", link: "#" },
      ]
    },

  
  ];


  return (
    <>

      
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
                    <Link href={service.link}>
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

export default ServiceSidebar;

import React from "react";
import Link from "next/link";
import { AiOutlineLine } from "react-icons/ai";
import "../../shared/service_sidebar.css";


const ServiceSidebar = () => {
  const servicesData = [
    {
      title: "Medical Hair Restoration",
      services: [
        { name: "Hair Check Measuring Device", link: "/hair-restoration/hair-check" },
        { name: "Laser Hair Loss Therapy", link: "/hair-restoration/laser-hair-loss-therapy" },
        { name: "PRP + A-Cell for Hair Restoration", link: "/hair-restoration/prp" },
        { name: "Laser Cap", link: "/hair-restoration/laser-cap" },
      ]
    },];


  return (
    <>

      
      <div className="service-sidebar ms-0 ms-md-3 mb-3 mb-md-0">
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

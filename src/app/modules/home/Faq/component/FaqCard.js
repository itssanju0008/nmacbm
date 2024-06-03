'use client'
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "../faq.css";

const FAQ = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
        <span> {isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const FaqList = ({ faqItems }) => (
 
    <div className=" md:w-[80%] lg:w-[70%] m-auto">
      {faqItems.map((item, index) => (
        <FAQ key={index} title={item.title} content={item.content} />
      ))}
    </div>
);

export default FaqList;

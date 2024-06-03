import React from "react";
import Select from "react-select";

const NewsLetterFillter = () => {
  const yearOptions = [
    { value: "all", label: "All" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
  ];

  const monthOptions = [
    { value: "all", label: "All" },
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0">
          <Select
            options={yearOptions}
            className="custom-select"
            isSearchable={true} 
          />
        </div>
        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
          <Select
            options={monthOptions}
            className="custom-select"
            isSearchable={true} 
          />
        </div>
      </div>
    </>
  );
};

export default NewsLetterFillter;

import React from "react";
import Select from "react-select";

const EventFillter = () => {
  const options = [
    { value: "all", label: "All" },
    { value: "1", label: "Patient Portal" },
    { value: "2", label: "Medical" },
  ];

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0">
          <Select
            options={options}
            className="custom-select"
            isSearchable={false} 
          />
        </div>
      </div>
    </>
  );
};

export default EventFillter;

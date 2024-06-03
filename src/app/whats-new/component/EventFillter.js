import React from "react";
import Select from "react-select";

const EventFillter = () => {
  const options = [
    { value: "all", label: "All" },
    { value: "1", label: "Events Gallery" },
    { value: "2", label: "Events Video" },
  ];

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-lg-2 col-md-6 col-sm-12">
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

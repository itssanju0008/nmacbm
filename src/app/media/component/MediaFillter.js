"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const NewsLetterFillter = ({ filter, setFilter }) => {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const years = [
    { label: 2020, value: 2020 },
    { label: 2021, value: 2021 },
    { label: 2022, value: 2022 },
    { label: 2023, value: 2023 },
    { label: 2024, value: 2024 },
  ];

  const months = [
    { label: "Jan", value: 1 },
    { label: "Feb", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "May", value: 5 },
    { label: "Jun", value: 6 },
    { label: "Jul", value: 7 },
    { label: "Aug", value: 8 },
    { label: "Sept", value: 9 },
    { label: "Oct", value: 10 },
    { label: "Nov", value: 11 },
    { label: "Dec", value: 12 },
  ];

  useEffect(() => {
    const obj = {};
    if (year) {
      obj.year = year.value;
    } else {
      delete obj.year;
    }
    if (month) {
      obj.month = month.value;
    } else {
      delete obj.month;
    }
    setFilter(obj);
  }, [year, month]);

  const handleClear=()=>{
    setFilter(null);
    setMonth(null)
    setYear(null)
  }

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-lg-2 col-md-6 col-sm-12">
          <Select
            options={years}
            className="custom-select"
            isSearchable={true}
            value={year}
            onChange={(value) => setYear(value)}
          />
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 ">
          <Select
            options={months}
            className="custom-select"
            isSearchable={true}
            value={month}
            onChange={(value) => setMonth(value)}
          />
        </div>
        {(filter?.year || filter?.month) && (
          <div className="col-lg-1 col-md-6 col-sm-12 text-right">
            <button className="btn btn-info text-white ml-1" onClick={()=>handleClear()} >X Clear</button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsLetterFillter;

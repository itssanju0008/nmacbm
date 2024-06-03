"use client";
import authApi from "@/Api/authApi";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const ServicewiseFillter = ({ filter, setFilter }) => {
  const [allServices, setAllServices] = useState([]);
  const [service, setService] = useState(null);
  const getAllServices = async () => {
    try {
      const res = await authApi.get(`services`);
      const data = res?.data;
      setAllServices(
        data?.map((ele) => ({ label: ele?.name, value: ele?.id }))
      );
    } catch (error) {}
  };
  useEffect(() => {
    getAllServices();
  }, []);

  useEffect(() => {
    const obj = {};
    if (service) {
      obj.service_id = service?.value;
    } else {
      delete obj.service_id;
    }
    setFilter(obj);
  }, [service]);

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0">
          <Select
            options={allServices}
            value={service}
            className="custom-select"
            isSearchable={true}
            onChange={(value) => setService(value)}
          />
        </div>

        {filter?.service_id && (
          <div className="col-lg-2 col-md-6 col-sm-12 text-right mb-3 mb-md-0">
            <button
              className="btn btn-info text-white ml-1"
              onClick={() => {
                setService(null);
                setFilter(null);
              }}
            >
              X Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ServicewiseFillter;

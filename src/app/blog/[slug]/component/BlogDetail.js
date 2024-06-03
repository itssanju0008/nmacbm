"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./blogdetails.css";
import Link from "next/link";
import authApi from "@/Api/authApi";
import { IMAGEURL } from "@/Api/apiConfig";

const BlogDetail = ({ slug }) => {
  const [detail, setDetail] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const getData = async () => {
    try {
      const res = await authApi.get(`blog-details/${slug}`);
      setDetail(res?.data);
    } catch (error) {}
  };
  const getRecentData = async () => {
    try {
      const res = await authApi.get(`recent-blogs`);
      setRecentBlogs(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
    getRecentData();
  }, []);
  console.log({ slug });
  return (
    <div>
      <section className="side-space py-6">
        <div className="blog-details-container">
          <div className="blog-details blog-detail-content">
            <p>{detail?.added_date}</p>
            <h3>{detail?.title}</h3>
            <Image
              src={detail?.banner?`${IMAGEURL}${detail?.banner}`:"/all/no-img.avif"}
              alt="blog"
              className="img-fluid"
              width={600}
              height={400}
            />
            <div>
              <p>{detail?.description}</p>
            </div>
          </div>
          <div className="blog-sidebar blog-details">
            <div className="blog-heading">
              <h3>Recent Blog</h3>
            </div>
            <div className="side-blog">
              {recentBlogs?.map((row,index) => (
                <div className="blog-card blog-border mt-2" key={index}>
                  <Link
                    className="d-block d-sm-flex align-items-start text-decoration-none"
                    href={`/blog/${row?.slug}`}
                  >
                    <div className="sideblog-img">
                      <Image
                        src={row?.thumbnail?`${IMAGEURL}${row?.thumbnail}`:"/all/no-img.avif"}
                        className="img-fluid"
                        alt="blog"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="blog-content blog-width mt-3 mt-sm-0 px-sm-3">
                      <p className="mb-0">
                     {row?.title}
                      </p>
                      <p className="mb-0 mt-1">{row?.added_date}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

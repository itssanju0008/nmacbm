"use client";
import React from "react";
import Image from "next/image";
import { saveAs } from 'file-saver'
import Link from "next/link";
import { LiaDownloadSolid } from "react-icons/lia";
import { IMAGEURL } from "@/Api/apiConfig";
import axios from "axios";

const DownloadCard = ({row,index}) => {
  // const handleDownload = () => {
  //   const link = document.createElement('a');
  //   link.href = IMAGEURL+row?.image;
  //   link.download = 'image.jpg'; // Set the filename for download
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const downloadImage = () => {
    saveAs(IMAGEURL+row?.image, 'image.jpg') // Put your image URL here.
  }
  // const downloadImage=async()=>{
  //   axios.get(IMAGEURL+row?.image,
  //       {
  //           responseType: 'arraybuffer',
  //           headers: {
  //               'Content-Type': 'application/json',
  //               'Accept': 'application/pdf'
  //           }
  //       })
  //       .then((response) => {
  //           const url = window.URL.createObjectURL(new Blob([response.data]));
  //           const link = document.createElement('a');
  //           link.href = url;
  //           link.setAttribute('download', 'file.pdf'); //or any other extension
  //           document.body.appendChild(link);
  //           link.click();
  //       })
  //       .catch((error) => console.log(error));
  // }
  // const handleDownload = async () => {
  //   try {
  //     const response = await fetch(IMAGEURL+row?.image);
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(new Blob([blob]));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', 'image.jpg');
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error('Error downloading image:', error);
  //   }
  // };
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12  mt-3">
        <div className="download-card position-relative">
          <Image
            src={row?.image?`${IMAGEURL}${row?.image}`:''}
            width={300}
            height={300}
            style={{ height: "auto", width: "100%" }}
            alt="download"
          ></Image>
          <div className="download-info">
            <h4>{row?.title}</h4>
            {/* <p>Last Updated - 1-19-2022</p> */}
          </div>

          <div className="download-overlay">
            <div className="download-back-text">
              <Link href="#" className="btn btn-white-fill " onClick={downloadImage}>
                {" "}
                <LiaDownloadSolid className="font-18" /> Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadCard;

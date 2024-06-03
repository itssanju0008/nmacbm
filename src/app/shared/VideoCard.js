// Video.js
"use client";
import React from "react";
import { FaLongArrowAltRight  } from "react-icons/fa";
import Link from "next/link";

const VideoCard = ({ mediaData }) => {
  return (
    // <Link href="/video-details" key={patientdata?.id}>
    //   <div className="media-card">
    //     <div className="text-center m-auto">
    //       {patientdata?.patientdata?.video_link ? (
    //         <div className="media-iframe">
    //           <iframe
    //             title={`${patientdata?.id}`}
    //             width="100%"
    //             height="250"
    //             src={patientdata?.video_link}
    //             frameBorder="0"
    //             allowFullScreen
    //           ></iframe>
    //         </div>
    //       ) : (
    //         <div className="media-video">
    //           <video width="100%" height="250" controls>
    //             <source src={patientdata?.video_link} type="video/mp4" />
    //             Your browser does not support the video tag.
    //           </video>
    //         </div>
    //       )}
    //     </div>
    //     <div className="media-content">
    //       <h3>{patientdata?.title}</h3>
    //     </div>
    //   </div>
    // </Link>
    <>
    <div className="media-card">
     <Link href="/video-details">
     <div className="media-img">
        <iframe
          width="100%"
          height="100%"
          src={mediaData?.video_link}
          title={mediaData?.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      { mediaData?.title!=='NT' &&  <div className="media-content">
          <h3>{mediaData?.title}</h3>
          {/* <p>Date : {mediaData.date}</p> */}
        </div>}
     </Link>
    </div>     
  </>
  );
};

export default VideoCard;

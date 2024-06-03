// Video.js
"use client";
import React from "react";
import { FaLongArrowAltRight  } from "react-icons/fa";
import Link from "next/link";

const Video = ({ videodata }) => {
  return (
    <Link href="/video-details" key={videodata.id}>
      <div className="media-card mb-3 mb-lg-0">
        <div className="text-center m-auto">
            <div className="media-iframe">
              <iframe
                title={`${videodata.id}`}
                width="100%"
                height="250"
                src={videodata.videoUrl}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
        </div>
        <div className="media-content">
          <h3><b>Story About </b> : {videodata.title}</h3>
          <p> {videodata.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;

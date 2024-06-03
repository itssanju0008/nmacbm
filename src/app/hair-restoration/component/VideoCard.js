"use client";
import React from "react";
import { FaLongArrowAltRight  } from "react-icons/fa";
import Link from "next/link"

const PatientData = [
  {
    id: 1,
    title:'See How It All Works & All You Can Access!',
    videoUrl: "https://www.youtube.com/embed/gZT_mLkNxgw?si=wiw3v8tn_mAoWC4t",
    isYouTube: true,
  },
  {
    id: 2,
    title:'This Is How You Log In & Book Appointments',
    // videoUrl: "/service-img/nmac.mp4",
    isYouTube: false,
  },

  {
    id: 3,
    title:'See How It All Works & All You Can Access!',
    videoUrl: "https://www.youtube.com/embed/gZT_mLkNxgw?si=wiw3v8tn_mAoWC4t",
    isYouTube: true,
  },
  {
    id: 4,
    title:'This Is How You Log In & Book Appointments',
    videoUrl: "/service-img/nmac.mp4",
    isYouTube: false,
  },
 
];

const Video = () => {
  return (
    <>
      <div className="video-row">
        {PatientData.map((patientdata) => (
          <Link href="/video-details" key={patientdata.id}>
            <div className="media-card">
              <div className="text-center m-auto">
                {patientdata.isYouTube ? (
                  <div className="media-iframe">
                  <iframe
                    title={`${patientdata.id}`}
                    width="100%"
                    height="250"
                    src={patientdata.videoUrl}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  </div>
                ) : (
                  <div className="media-video">
                      <video width="100%" height="250" controls>
                        <source src={patientdata.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                  </div>
                 
                )}
              </div>
              <div className="media-content">
                <h3>{patientdata.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* view more */}
      <div className="text-end mt-4">
        <Link href="/video-gallery" className="btn btn-skyblue-fill">
          View More &nbsp; <FaLongArrowAltRight className="video-right-icon" />
        </Link>
      </div>
    </>
  );
};

export default Video;

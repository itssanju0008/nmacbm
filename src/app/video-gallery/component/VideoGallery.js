import React from "react";
import Link from "next/link"


const VideoGallery = ({ mediaData }) => {

  return (
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

export default VideoGallery;

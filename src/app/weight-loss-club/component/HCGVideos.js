"use client";
import React , {useState} from "react";
import { FaTimesCircle} from "react-icons/fa"

const NmacData = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/sRTJv--hOuw?si=2YMLpjgeTcYYfUIo",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/RxvzRUzf71s?si=SCkpJBVotb-A2Ntx",
  },
 
];

const HCGVideos = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null); // Track the current video

  const openLightbox = (video) => {
    setIsLightboxOpen(true);
    setCurrentVideo(video);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div className="video-row">
        {NmacData.map((data) => (
          <div className="media-card" key={data.id} onClick={() => openLightbox(data)}>
            <div className="text-center m-auto">
              <iframe
                title={`${data.id}`}
                width="100%"
                height="250"
                src={data.videoUrl}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
           
          </div>
        ))}
      </div>

      {isLightboxOpen && currentVideo && (
        <div className="lightbox">
          <div className="lightbox-content">
            <iframe
              width="600"
              height="400"
              src={currentVideo.videoUrl}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
           
            <button onClick={closeLightbox}>
              <FaTimesCircle /> 
            </button>
          </div>
        </div>
      )}

      {/* view more */}
      {/* <div className="text-end mt-4">
          <Link href="/video-gallery" className="btn btn-skyblue-fill">
            View More &nbsp; <FaLongArrowAltRight className="video-right-icon" />
          </Link>
      </div> */}
    </>
  );
};

export default HCGVideos;

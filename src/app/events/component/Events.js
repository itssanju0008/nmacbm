import { useState } from "react";
import Image from "next/image";
import "../../events/eventspecials.css";
import { RxCrossCircled } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import { IMAGEURL } from "@/Api/apiConfig";

const Events = ({ contents }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState({});

  const openLightbox = (content) => {
    setCurrentContent(content);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentContent({});
    setLightboxIsOpen(false);
  };

  return (
    <>
      {contents.map((content, index) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3" key={index}>
          <div
            key={index}
            className="media-card content-thumbnail position-relative p-0"
            onClick={() => openLightbox(content)}
          >
            <div>
              {!content.video_link && (
                <>
                  <div 
                  className="media-img event__thumb"
                  >
                    <Image
                      src={`${IMAGEURL}${content?.image}`}
                      alt="Content Thumbnail"
                      width={500}
                      height={400}
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="media-content">
                    <h3 className="mb-0">{content.title}</h3>
                  </div>
                </>
              )}
              {content?.video_link && (
                <>
                <div  className="media-img event__thumb">
                  <Image
                   src={`${IMAGEURL}${content?.image}`} className="img-fluid"
                    alt="Content Thumbnail" width={500} height={400}
                    style={{ width: "100%" }}
                  />
                  </div>
                  <div className="media-content">
                    <h3 className="mb-0">{content.title}</h3>
                  </div>
                </>
              )}
            </div>
            <div className="">
              {content.type === "video" && (
                <div className="play-icon">
                  <FaPlay className="play" />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {lightboxIsOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
          {!currentContent.video_link  && (
              <>
                <Image
                src={`${IMAGEURL}${currentContent?.image}`}
                  alt="Content Thumbnail"
                  width={800}
                  height={500}
                  style={{ width: "100%", objectFit: 'contain', objectPosition: 'top' }}
                />
                <h3>{currentContent.title}</h3>
              </>
            )}
            {currentContent.video_link  && (
              <>
                <div className="video-container">
                  <iframe
                    width="600"
                    height="400"
                    src={currentContent?.video_link}
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3>{currentContent?.title}</h3>
              </>
            )}
            <button onClick={closeLightbox}>
              <RxCrossCircled />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
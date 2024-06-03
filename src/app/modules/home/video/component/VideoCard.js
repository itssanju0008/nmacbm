import { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from "react-icons/fa";
import "../video.css";

const VideoModal = ({ videoUrl, thumbnailUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="video-thumbnail" onClick={openModal}>
          <div  style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
            {/* <Image src={'/video/video-1.png'} alt="Video Thumbnail" layout="fill" objectFit="cover" /> */}
        </div>
        <div className=''>
            <div className="play-icon">
              <FaPlay  className='play'/>
            </div>
        </div>
      </div>
      
      <div className={`modal fade ${modalIsOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: modalIsOpen ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-transparent">
             <div className='text-end'> <button type="button" className="btn-close" onClick={closeModal}></button></div>
            <div className="modal-body p-0">
              <div className="video-container">
                <iframe className='iframe'
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;

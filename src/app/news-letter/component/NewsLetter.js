
import Image from "next/image";
import "../../events/eventspecials.css";
import Link from "next/link"
import { IMAGEURL } from "@/Api/apiConfig";

const NewsLetter = ({ contents }) => {

  return (
    <>
      {contents?.map((content, index) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
          <Link href="#" className="link-style">
          <div
            key={index}
            className="media-card position-relative"
          >
            <div className="content__thumb media-img">
                <div style={{
                    position: "relative",
                    width: "100%",
                    height: '100%',
                  }}  className=""> 
                <Image
                  src={`${IMAGEURL}${content?.image}`}
                  alt="Content Thumbnail"
                  width={500} height={500}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
              
            </div>
              <div className="news-heading">
                 <h3>{content?.title}</h3>
              </div>
          </div>
          </Link>
        </div>
      ))}
      
    </>
  );
};

export default NewsLetter;

import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import "../../modules/home/team/team.css";
import { IMAGEURL } from "@/Api/apiConfig";

const StaffCard = ({staff}) => {

  return (
    <div className="our-team mb-3">
      <div className="pic">
        <Image
          src={staff?.image?`${IMAGEURL}${staff?.image}`:"/all/no-img.avif"}
          alt={`Team Member - ${name}`}
          height={250}
          width={300}
          className="img-fluid"
        />
        <ul className="social">
          <li>
            <Link href={staff?.facebook_link??''}>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href={staff?.instagram_link??''}>
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href={staff?.linkedin_link??''}>
              <CiLinkedin />
            </Link>
          </li>
        </ul>
      </div>
      <div className="team-content">
        <h3 className="title mb-0">{staff?.first_name} {" "}{staff?.last_name}</h3>
        <span className="post">{staff?.specialist}</span>
      </div>
    </div>
  );
};

export default StaffCard;

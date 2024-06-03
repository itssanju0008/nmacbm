import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import "../team.css";
import { IMAGEURL } from "@/Api/apiConfig";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

const TeamCards = ({ member,setDoctor, handleReadMoreClick }) => {
  
  return (
    <>
      <div className="our-team">
        <div className="pic">
          <Image
            src={
              member?.image ? `${IMAGEURL}${member?.image}` : "/all/team.jpg"
            }
            alt="Team Member"
            height={300}
            width={300}
            className="img-fluid"
          />
          <ul className="social">
            <li>
              <Link
                target={member?.facebook_link ? "_blank" : ""}
                href={member?.facebook_link ?? "#"}
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                target={member?.instagram_link ? "_blank" : ""}
                href={member?.instagram_link ?? "#"}
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                target={member?.linkedin_link ? "_blank" : ""}
                href={member?.linkedin_link ?? "#"}
              >
                <CiLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div className="team-content">
          <h3 className="title">
            {member?.first_name ?? ""} {member?.last_name ?? ""}{" "}
          </h3>
          <span className="post line-clamp-1">{member?.qualification}</span>
          {member?.profile_data &&   <span
            className="read-more mt-2 pointer"
            
            onClick={()=>{setDoctor(member); handleReadMoreClick()}}
          >
            Read More <IoIosArrowRoundForward />
          </span>}
        </div>
      </div>
    
    </>
  );
};

export default TeamCards;

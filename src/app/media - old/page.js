"use client";
import React from "react";
import Image from "next/image";
import MediaCard from "./component/MediaCard";

const Media = () => {
  const media = [
    {
      title:
        "Jade Richardson, NMAC Scholarship Recipient & SGU Medical Student Interviews on The Daily Hour",
      content: (
        <>
          <p>
            Speaking at the event, Premier David Burt commended Dr Brown for
            establishing “this incredible facility that has provided high
            quality healthcare services to its patients and fulfilling careers
            to all that joined the staff.”
          </p>
          <p>
            Update 12.00pm: A spokesperson said, “Saturday, July 15th 2023,
            Northshore Medical & Aesthetics Center [NMAC] celebrated 10 years of
            service on their 7 Northshore Road, Devonshire campus featured by
            various celebrity guests from The Hon. Premier David Burt, Deputy
            Premier Hon. Walter Roban, Rev. Dr. Milton Burgess, JP, Chairman Dr.
            Rev. Carlton Crockwell, and local Designer Shanna Hollis. The event
            also consisted of their patients, clients, staff both current and
            alumni, vendors, Board members, those they sponsor in the community,
            neighbors, Dr Brown’s family and friends, and the Bermuda community
            at large.”
          </p>
        </>
      ),
      image: "",
      video: "https://www.youtube.com/embed/ozzOIHTaquA?si=4KOWibgIi2jEoTNT",
      link: "https://www.example.com/section1",
    },

    {
      title: "EG5 a new variant of COVID-19 is highly transmissible...",
      content:
        "EG5 a new variant of COVID-19 is highly transmissible and the World Health Organization is keeping a close eye on its progress. The symptoms are largely the same as other variants and doctors believe anti-virals currently available should be able to treat it. Eloisa Mayers spoke with Dr. Kyjuan Brown of NorthShore Medical for an update on the latest strain.",
      image: "/all/team.jpg",
      video: "https://www.youtube.com/embed/ozzOIHTaquA?si=4KOWibgIi2jEoTNT",
      link: "https://www.example.com/section1",
    },

    {
      title: "Bermuda BBC evening News Interview with Dr Kyjuan Brown",
      content:
        "Bermuda BBC evening News Interview with Dr Kyjuan Brown on The rise of respiratory illnesses in the community.",
      image: "",
      video: "",
      links: [
        {
          text: "Part 1 aired Video | Facebook",
          url: "https://www.facebook.com/watch/?v=748202240513481&ref=sharing",
        },
        {
          text: "Part 2 aired: January 2nd 2024 Initial broadcast by BBC here",
          url: "https://www.facebook.com/watch/live/?ref=search&v=1316008512404302",
        },
      ],
    },
    // Add more sections as needed
  ];

  return (
    <>
      <section className="position-relative">
        <div className="after_slider breadcrum-banner">
          <Image
            src={"/slider/slider.jpg"}
            alt="banner"
            width={1920}
            height={500}
            className="img-responsive"
          />

          <div className="breadcrum-title text-center">
            <h3>IN THE MEDIA</h3>
            <p>
              &quot;Lights, camera , action - As an industry leader, read all
              about how we are transforming <br /> lives in Barmuda&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="side-space py-6">
        <div className="row">
          <MediaCard media={media} />
        </div>
      </section>
    </>
  );
};

export default Media;

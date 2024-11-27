"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import drop from '../../../public/assets/img/airdrop.jpeg'
import Airdrop2 from "@/components/homes/home-3/Airdrop2";
import Link from "next/link";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set deadline to 22 hours from now
    const deadline = new Date(Date.now() + 22 * 60 * 60 * 1000);

    const updateTimeLeft = () => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        });
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(updateTimeLeft, 1000);
    updateTimeLeft(); // Call immediately to set initial state

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
<style jsx global>{`
  @media screen and (max-width: 992px) {
    .breadcumb {
      padding-top: 100px !important;  /* Ensure enough space below the header */
      padding-bottom: 10px !important;
    }

    .airdrop-image {
      width: 100%;
    }
  
    .page-heading h1 {
      font-size: 26px;  /* Adjust font size for smaller screens */
      text-align: center;  /* Center the heading */
    }
  }
`}</style>


      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains" >
        <div
          className="breadcumb"
          data-bg-src=""
          style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
        >
          <div className="container">
            <div
              className="page-heading"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <h1
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{ color: "white" }}
              >
                Exclusive Airdrop
              </h1>
            </div>
          </div>
        </div>
        <Airdrop2 />
      </main>
      <Footer2 />
    </>
  );
}
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import drop from '../../../public/assets/img/airdrop.jpeg'
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
  /* Responsive Layout Styles */
  .airdrop-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 30px;
  }

  .airdrop-content {
    flex: 1;  /* This ensures the text takes up half of the available space */
    padding-right: 20px;
    width: 50%; /* Each part takes up 50% width */
  }

  .airdrop-image {
    flex: 1;  /* This ensures the image takes up half of the available space */
    text-align: center;
    width: 50%;
  }

  /* Animation Keyframes */
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
    perspective: 1000px;
  }

  /* Responsive Adjustments */
  @media screen and (max-width: 958px) {
    .airdrop-container {
      flex-direction: column;  /* Stack the content vertically on small screens */
      margin-left: 15px;
      margin-right: 15px;
    }

    .airdrop-content,
    .airdrop-image {
      width: 100%;  /* Make both content and image take full width on small screens */
      padding-right: 0;
      margin-bottom: 30px;
      margin-left: -13px !important;
    }

    .airdrop-image {
      order: -1;  /* Move image above text on small screens */
    }
  }

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
      <main className="main position-relative" id="mains">
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
        <section className="airdrop-details">
          <div className="container airdrop-container">
            {/* Text Content */}
            <div className="airdrop-content">
              <h1>Get 5000 Free CryptoX Tokens!</h1>
              <p>
                Don't miss out on this limited-time opportunity to earn 5000 free CryptoX
                tokens. Join our airdrop campaign now and start earning rewards!
              </p>

              <div className="urgency">
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Hurry! Offer ends in:
                </p>
                <div
                  className="countdown"
                  style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}
                >
                  <span className="time-box">{timeLeft.hours}h</span> :
                  <span className="time-box">{timeLeft.minutes}m</span> :
                  <span className="time-box">{timeLeft.seconds}s</span>
                </div>
              </div>

              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                Only <span style={{ fontSize: "25px" }}>50</span> spots are available. Act now
                to secure your spot and get your free tokens before it's too late!
              </p>

              {/* Additional Details About Airdrop */}
              <div className="airdrop-details">
                <h3>How to Participate:</h3>
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  <li>Sign up for the CryptoX platform.</li>
                  <li>Complete your KYC verification.</li>
                  <li>Share the campaign with your friends to earn even more rewards!</li>
                </ul>
              </div>

              <div className="cta">
                <a href="/#form" className="gt-btn primary mt-3">
                  Claim My Tokens Now!
                </a>
              </div>
            </div>

            {/* Image with Animation */}
            <div className="airdrop-image">
              <Image 
                src={drop} 
                alt="Airdrop" 
                className="animate-float"
                style={{ 
                  maxWidth: "100%", 
                  height: "auto" 
                }} 
              />
            </div>
          </div>
        </section>
      </main>
      <Footer2 />
    </>
  );
}
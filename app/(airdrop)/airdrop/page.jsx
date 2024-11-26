"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
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

  // Helper function to pad single digits with a leading zero
  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <>
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
        <section className="airdrop-details" style={{ marginTop: "100px", marginBottom: "100px", marginLeft: "30px" }}>
          <div className="container">
            <div className="airdrop-content">
              <h1>Get 5000 Free CryptoX Tokens!</h1>
              <p>
                Don't miss out on this limited-time opportunity to earn 5000 free CryptoX tokens. Join our airdrop campaign now and start earning rewards!
              </p>

              <div className="urgency">
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Hurry! Offer ends in:</p>
                <div className="countdown" style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>
                  <span className="time-box">{timeLeft.hours}h</span> :
                  <span className="time-box">{timeLeft.minutes}m</span> :
                  <span className="time-box">{timeLeft.seconds}s</span>
                </div>
              </div>

              <p style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
                Only <span style={{ fontSize: "25px" }}>50</span> spots are available. Act now to secure your spot and get your free tokens before it's too late!
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
          </div>
        </section>
      </main>
      <Footer2 />
    </>
  );
}

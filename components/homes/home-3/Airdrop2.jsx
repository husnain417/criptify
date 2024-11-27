"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Airdrop2() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date(Date.now() + 22 * 60 * 60 * 1000);
  
    const updateTimeLeft = () => {
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();
  
      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        setTimeLeft({ hours, minutes, seconds });
      }
    };
  
    // Initial update and setInterval for the countdown
    updateTimeLeft();
    const intervalId = setInterval(updateTimeLeft, 1000);
  
    const observer = new MutationObserver(() => {
      updateTimeLeft();
    });
  
    // Observe the Google Translate container
    const translateElement = document.getElementById("google_translate_element");
    if (translateElement) {
      observer.observe(translateElement, { childList: true, subtree: true });
    }
  
    // Cleanup
    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);
  

  return (
    <>    
    <style jsx global>{`
        @media screen and (max-width: 992px) {
            .about-thumb-box {
            order: -1; /* Place the image above the text */
            }
        }
        .responsive-image {
            width: 100%; /* Default size for smaller screens */
            height: auto;
        }

        @media screen and (max-width: 1200px) and (min-width: 500px) {
            .about-wrapper {
              padding-right: 100px;
            }
          }
          

        @media screen and (min-width: 1200px) {
            .responsive-image {
            width: 600px; /* Larger size for larger screens */
            }

            .about-wrapper
            {
                padding-right: 100px;
            }
        }

        @media screen and (min-width: 1600px) {
            .responsive-image {
            width: 700px; /* Even larger size for very large screens */
            }
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
        `}</style>

    <section className="about-area space fix">
      <div className="container">
        <div className="about-wrapper style4">
          <div className="about-content wow fadeInUp" data-wow-delay=".6s">
            <div className="title-area">
              <h5 className="subtitle text-start">
                <span>
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
                Limited Time Offer{" "}
                <span>
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>
              </h5>
              <h3 className="title text-start">
                Get 5000 Free CryptoX Tokens!
              </h3>
              <p className="text">
                Don't miss out on this limited-time opportunity to earn 5000 free CryptoX
                tokens. Join our airdrop campaign now and start earning rewards!
              </p>

              <div className="urgency">
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Hurry! Offer ends in:
                </p>
                <div
                    className="countdown notranslate"
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

              <div className="airdrop-details">
                <h3>How to Participate:</h3>
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                  <li>Sign up for the CryptoX platform.</li>
                  <li>Complete your KYC verification.</li>
                  <li>Share the campaign with your friends to earn even more rewards!</li>
                </ul>
              </div>

              <Link scroll={true} href="/#form" className="gt-btn gt-btn-icon">
                Claim My Tokens Now!
              </Link>
            </div>
          </div>
          <div className="about-thumb-box wow fadeInUp" data-wow-delay=".3s">
              {/* Thumbnail images */}
              <div className="about-thumb-box about-thumb1">
                <Image
                  data-tilt=""
                  data-tilt-max={10}
                  alt="thumb"
                  src="/assets/img/about/aboutThumb4_1.png"
                  width="465"
                  height="230"
                />
              </div>
              <div className="about-thumb-box about-thumb2">
                <Image
                    data-tilt=""
                    data-tilt-max={20}
                    alt="thumb"
                    src="/assets/img/airdrop.jpeg"
                    className="responsive-image animate-float"
                    width="482"
                    height="474"
                />
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}
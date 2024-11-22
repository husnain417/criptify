"use client";

import { features } from "@/data/features";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Service2() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date().getTime() + 22 * 60 * 60 * 1000;

    const updateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="about-area space fix">
      <div className="container">
        <div className="about-wrapper style4">
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
                src="/assets/img/about/drop.png"
                width="382"
                height="474"
              />
            </div>
          </div>
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
                Exclusive Airdrops – Join Before Time Runs Out!
              </h3>
              <p className="text">
                Unlock the best rewards with our exclusive airdrop program. 
                Limited spots are available, so act fast to secure your place.
              </p>
            </div>

            <div className="urgency">
              <p className="text" style={{ color: "#FF5733" }}>Hurry! Offer ends in:</p>
              <div className="countdown" style={{ color: "#FF5733" }}>
                <span className="time-box">{timeLeft.hours}h</span> :
                <span className="time-box">{timeLeft.minutes}m</span> :
                <span className="time-box">{timeLeft.seconds}s</span>
              </div>
              <p className="text" style={{ color: "#FF5733" }}>
                Only 50 spots left for this exclusive opportunity!
              </p>
            </div>

            <div className="checklist">
              {features.map((feature, index) => (
                <ul className="ps-0" key={index}>
                  <li>
                    <Image
                      src={feature.icon}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </li>
                  <li>{feature.description}</li>
                </ul>
              ))}
            </div>

            {/* Link to Get Started */}
            <Link scroll={false} className="gt-btn gt-btn-icon" href={`/contact`}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

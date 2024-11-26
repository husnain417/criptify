"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Airdrop() {
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
    <section className="airdrop-details">
      <div className="container">
        <div className="airdrop-content">
          <h1>Exclusive Airdrop Campaign</h1>
          <p>Join our exclusive airdrop program and unlock incredible rewards!</p>

          <div className="urgency">
            <p>Hurry! Offer ends in:</p>
            <div className="countdown">
              <span className="time-box">{timeLeft.hours}h</span> :
              <span className="time-box">{timeLeft.minutes}m</span> :
              <span className="time-box">{timeLeft.seconds}s</span>
            </div>
          </div>

          <p>Only 50 spots are available. Act now to secure your spot!</p>

          {/* Additional Details About Airdrop */}
          <div className="airdrop-details">
            <h3>How to Participate:</h3>
            <ul>
              <li>Sign up for our platform.</li>
              <li>Complete your profile verification.</li>
              <li>Share the campaign to earn extra rewards!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

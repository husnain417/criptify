import { progressItems } from "@/data/skills";
import React from "react";
import Image from "next/image";
import Progress from "@/components/common/Progress";

export default function Profits() {
  return (
    <section className="about-area">
      <div className="about-wrap style5">
        <div className="container">
          <div className="about-wrapper style5 space fix">
            <div className="about-content wow fadeInLeft" data-wow-delay=".6s">
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
                  How to Make 300% Profit on Crypto{" "}
                  <span>
                    <Image
                      alt="icon"
                      src="/assets/img/icon/titleIcon.png"
                      width="28"
                      height="12"
                    />
                  </span>{" "}
                </h5>
                <h3 className="title text-start mb-30">
                Maximize Your Crypto Profits: A Step-by-Step Guide
                </h3>
              </div>

              {/* Guide to Make 300% Profit on Crypto */}
              <div className="crypto-guide">
                <h3 className="title text-start mb-30">
                  Guide: How to Make 300% Profit on Crypto
                </h3>
                <p className="text-start">
                  Cryptocurrency can be a volatile and exciting investment. Here's a simple guide to help you make 300% profit:
                </p>
                <ol className="crypto-steps">
                  <li>
                    <strong>Step 1: Research and Choose the Right Crypto</strong>
                    <p>Focus on promising new coins with solid technology and a growing community.</p>
                  </li>
                  <li>
                    <strong>Step 2: Diversify Your Portfolio</strong>
                    <p>Spread your investments across multiple cryptocurrencies to mitigate risk and maximize potential growth.</p>
                  </li>
                  <li>
                    <strong>Step 3: Use Leverage and Margin Trading</strong>
                    <p>If you're experienced, margin trading can help amplify your gains. Be cautious, as it can also increase losses.</p>
                  </li>
                  <li>
                    <strong>Step 4: Stay Updated with Market News</strong>
                    <p>Monitor cryptocurrency news to make informed decisions about your investments.</p>
                  </li>
                  <li>
                    <strong>Step 5: Set Entry and Exit Points</strong>
                    <p>Strategically time your buys and sells, setting clear profit and loss targets.</p>
                  </li>
                </ol>
                <p className="text-start">
                  By following these steps and being patient, you can maximize your chances of achieving substantial returns in the crypto market.
                </p>
              </div>
            </div>

            <div
              className="about-thumb-box d-md-block d-none wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="about-thumb-box about-bg">
                <Image
                  data-tilt=""
                  data-tilt-max={10}
                  alt="thumb"
                  src="/assets/img/bg/aboutBg5_1.png"
                  width="465"
                  height="316"
                />
              </div>
              <div className="about-thumb-box shape">
                <Image
                  alt="thumb"
                  src="/assets/img/shape/lineShape.png"
                  width="405"
                  height="716"
                />
              </div>


              <div className="about-thumb-box icon jump">
                <Image
                  alt="icon"
                  src="/assets/img/icon/bubbleIcon.png"
                  width="73"
                  height="68"
                />
              </div>
              <div className="about-thumb-box icon2 spin">
                <Image
                  alt="icon"
                  src="/assets/img/icon/starIcon3_1.png"
                  width="34"
                  height="34"
                />
              </div>
              <div className="about-thumb-box icon3 rotate360">
                <Image
                  alt="icon"
                  src="/assets/img/icon/starIcon3_2.png"
                  width="24"
                  height="24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

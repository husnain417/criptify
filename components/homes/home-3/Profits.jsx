import React from "react";
import Image from "next/image";
import { cryptoContent } from "../../../data/guide";

export default function Profits() {
  const { title, subtitle, guideTitle, description, conclusion } =
    cryptoContent;

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
                  {title}{" "}
                  <span>
                    <Image
                      alt="icon"
                      src="/assets/img/icon/titleIcon.png"
                      width="28"
                      height="12"
                    />
                  </span>{" "}
                </h5>
                <h3 className="title text-start mb-30">{subtitle}</h3>
              </div>

              {/* Guide Content */}
              <div className="crypto-guide">
                <h3 className="title text-start mb-30">{guideTitle}</h3>
                <p className="text-start">{description}</p>
                <p className="text-start">{conclusion}</p>
                <a href="#form" className="gt-btn primary mt-3">
                  Subscribe
                </a>                           
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

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Features() {
  return (
    <section className="wcu-tab-area">
      <div
        className="wcu-tab-wrap space"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/bg/wcuBg1_1.png)" }}
      >
        <div className="shape1_1 d-none d-xl-block">
          <Image
            alt="shape"
            src="/assets/img/shape/wcuShape1_1.png"
            width="270"
            height="733"
          />
        </div>
        <div className="shape1_2 d-none d-xl-block">
          <Image
            alt="shape"
            src="/assets/img/shape/wcuShape1_2.png"
            width="248"
            height="321"
          />
        </div>
        <div className="container">
          <div className="wcu-wrap style1">
            <div className="title-area mx-auto">
              <h5 className="subtitle text-center">
                {" "}
                <span className="me-2">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
                Why Choose Our Platform{" "}
                <span className="ms-2">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
              </h5>
              <h2 className="title text-center mb-50">
              Exclusive Crypto Airdrops &amp; Profit-Boosting Guides for Enthusiasts
              </h2>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-12">
                <div
                  className="wcu-tab-area wow fadeInLeft"
                  data-wow-delay="500ms"
                >
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="real-time-activity-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#real-time-activity"
                        type="button"
                        role="tab"
                        aria-controls="real-time-activity"
                        aria-selected="true"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/wcuIcon1_1.png"
                          width="50"
                          height="50"
                        />{" "}
                        Exclusive Airdrops
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="easy-integration-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#easy-integration"
                        type="button"
                        role="tab"
                        aria-controls="easy-integration"
                        aria-selected="false"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/wcuIcon1_2.png"
                          width="50"
                          height="50"
                        />{" "}
                        Profit-Boosting Guides
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="instant-deploy-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#instant-deploy"
                        type="button"
                        role="tab"
                        aria-controls="instant-deploy"
                        aria-selected="false"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/wcuIcon1_3.png"
                          width="50"
                          height="50"
                        />{" "}
                        Community Support{" "}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="software-services-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#software-services"
                        type="button"
                        role="tab"
                        aria-controls="software-services"
                        aria-selected="false"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/wcuIcon1_4.png"
                          width="50"
                          height="50"
                        />{" "}
                        Secure & Trusted Platform
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-12">
                <div className="wcu-tab-details-area">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="real-time-activity"
                      role="tabpanel"
                      aria-labelledby="real-time-activity-tab"
                      tabIndex={0}
                    >
                      <div className="wcu-tab-content">
                        <div className="shape d-none d-xl-block">
                          <Image
                            alt="shape"
                            src="/assets/img/wcu/wcuShape1.png"
                            width="396"
                            height="269"
                          />
                        </div>
                        <div className="wcu-thumb">
                          <Image
                            alt="thunmb"
                            src="/assets/img/gen1.png"
                            width="368"
                            height="603"
                          />
                        </div>
                        <div className="wcu-content">
                        <div className="title">Exclusive Airdrops</div>
                        <div className="text">
                          Get free tokens directly into your wallet! Participate in our exclusive
                          cryptocurrency airdrops and explore new projects with real potential.
                        </div>
                        <div className="checklist">
                          <ul className="ps-0">
                            <li>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Free tokens for early adopters</li>
                          </ul>
                          <ul className="ps-0">
                            <li>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Opportunities to join promising projects</li>
                          </ul>
                          <ul className="ps-0">
                            <li>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Simple participation steps</li>
                          </ul>
                        </div>
                        <Link
                          scroll={true}
                          className="gt-btn gt-btn-icon"
                          href={`#form`}
                        >
                          Get Started
                        </Link>
                      </div>
                      </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="easy-integration"
                        role="tabpanel"
                        aria-labelledby="easy-integration-tab"
                        tabIndex={0}
                      >
                      <div className="wcu-tab-content">
                        <div className="shape d-none d-xl-block">
                          <Image
                            alt="shape"
                            src="/assets/img/wcu/wcuShape1.png"
                            width="396"
                            height="269"
                          />
                        </div>
                        <div className="wcu-thumb">
                        <Image
                            alt="thunmb"
                            src="/assets/img/gen2.png"
                            width="368"
                            height="603"
                          />
                        </div>
                        <div className="wcu-content">
                          <div className="title">Profit-Boosting Guides</div>
                          <div className="text">
                          Discover strategies to maximize your cryptocurrency profits. Our expertly crafted guides help you make informed investment decisions.
                          </div>
                          <div className="checklist">
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Step-by-step tutorials</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Insights from top experts</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Real-world case studies</li>
                            </ul>
                          </div>
                          <Link
                          scroll={true}
                          className="gt-btn gt-btn-icon"
                          href={`#form`}
                        >
                          Get Started
                        </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="instant-deploy"
                      role="tabpanel"
                      aria-labelledby="instant-deploy-tab"
                      tabIndex={0}
                    >
                      <div className="wcu-tab-content">
                        <div className="shape d-none d-xl-block">
                          <Image
                            alt="shape"
                            src="/assets/img/wcu/wcuShape1.png"
                            width="396"
                            height="269"
                          />
                        </div>
                        <div className="wcu-thumb">
                        <Image
                            alt="thunmb"
                            src="/assets/img/gen3.png"
                            width="368"
                            height="603"
                          />
                        </div>
                        <div className="wcu-content">
                        <div className="title">Community Support</div>
                        <div className="text">
                          Join a thriving community of crypto enthusiasts and investors. Our support
                          network ensures you're never alone in navigating the world of cryptocurrency.
                        </div>
                        <div className="checklist">
                          <ul className="ps-0">
                            <li>
                              <Image 
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Active forums for real-time discussions</li>
                          </ul>
                          <ul className="ps-0">
                            <li>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Expert advice from industry leaders</li>
                          </ul>
                          <ul className="ps-0">
                            <li>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Exclusive insights for active participants</li>
                          </ul>
                        </div>
                        <Link
                          scroll={true}
                          className="gt-btn gt-btn-icon"
                          href={`#form`}
                        >
                          Get Started
                        </Link>
                      </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="software-services"
                      role="tabpanel"
                      aria-labelledby="software-services-tab"
                      tabIndex={0}
                    >
                      <div className="wcu-tab-content">
                        <div className="shape d-none d-xl-block">
                          <Image
                            alt="shape"
                            src="/assets/img/wcu/wcuShape1.png"
                            width="396"
                            height="269"
                          />
                        </div>
                        <div className="wcu-thumb">
                        <Image
                            alt="thunmb"
                            src="/assets/img/gen4.png"
                            width="368"
                            height="603"
                          />
                        </div>
                        <div className="wcu-content">
                        <div className="title">Secure & Trusted Platform</div>
                        <div className="text">
                          Trust and security are at the core of our platform. Participate in airdrops
                          and access profit-boosting guides with confidence.
                        </div>
                        <div className="checklist">
                          <ul className="ps-0">
                            <li>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Bank-grade security for your data</li>
                          </ul>
                          <ul className="ps-0">
                            <li>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Verified and trusted partnerships</li>
                          </ul>
                          <ul className="ps-0">
                            <li>
                              <Image
                                alt="icon"
                                src="/assets/img/icon/signIcon2.png"
                                width="20"
                                height="20"
                              />
                            </li>
                            <li>Transparent processes for all users</li>
                          </ul>
                        </div>
                        <Link
                          scroll={false}
                          className="gt-btn gt-btn-icon"
                          href={`/contact`}
                        >
                          Get Started
                        </Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

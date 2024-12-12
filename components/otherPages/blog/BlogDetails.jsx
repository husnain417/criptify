import React from "react";
import Sidebar from "./Sidebar";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Image from "next/image";
import './blogdetail.css'

export default function BlogDetails({ blogItem }) {
  return (
    <section className="news-standard fix space-top pb-425">
      <div className="container">
        <div className="news-details-area">
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <div className="blog-post-details">
                <div className="single-blog-post">
                  <div
                    className="post-featured-thumb"
                    style={{
                      backgroundImage: `url(${blogItem.thumb})`,
                    }}
                  />
                  <div className="post-content">
                    <ul
                      className="post-list d-flex align-items-center wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <li>
                        <i className="fa-light fa-user" />
                        By Criptify Team
                      </li>
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/tagIcon.png"
                          width="20"
                          height="20"
                        />
                        {blogItem.meta[1].text}
                      </li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">
                      {blogItem.title}
                    </h3>
                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                      {blogItem.content}
                    </p>
                    {/* Add more detailed content sections as needed */}
                    <div
                      className="hilight-text mt-4 mb-4 wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <p>
                        Explore the depths of {blogItem.title} and uncover 
                        insights that can transform your understanding of 
                        cryptocurrency and blockchain technologies.
                      </p>
                      <svg
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z"
                          fill="#3C72FC"
                        />
                      </svg>
                    </div>
                    <div className="row tag-share-wrap mt-4 mb-30 wow fadeInUp" data-wow-delay=".8s">
                      <div className="col-lg-8 col-12">
                        <div className="tagcloud">
                          <h6 className="d-inline me-2">Tags:</h6>
                          {blogItem.meta.map((meta, index) => (
                            <a href="#" key={index}>{meta.text}</a>
                          ))}
                        </div>
                      </div>
                      <div
                        className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end wow fadeInUp"
                        data-wow-delay="1.2s"
                      >
                        <div className="social-share">
                          <span className="me-3">Share:</span>
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                          <a href="#"><i className="fab fa-twitter" /></a>
                          <a href="#"><i className="fab fa-linkedin-in" /></a>
                          <a href="#"><i className="fab fa-youtube" /></a>
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
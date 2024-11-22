import React from "react";

export default function Faq1() {
  return (
    <div className="accordion" id="accordion">
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
            aria-expanded="true"
            aria-controls="faq1"
          >
            Is my data secure when I sign up?
          </button>
        </h5>
        <div
          id="faq1"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Yes, we prioritize your privacy. All your personal data is securely encrypted and protected using industry-standard security protocols to ensure your information remains safe.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
            aria-expanded="false"
            aria-controls="faq2"
          >
            Am I eligible for the airdrop or incentives?
          </button>
        </h5>
        <div
          id="faq2"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            To qualify for our airdrop or incentives, you must meet certain eligibility criteria. These include being a registered user and completing specific tasks or actions on the platform. Make sure to check the terms and conditions for full details.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
            aria-expanded="false"
            aria-controls="faq3"
          >
            How do I redeem my incentive or airdrop entry?
          </button>
        </h5>
        <div
          id="faq3"
          className="accordion-collapse show"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            To redeem your airdrop or incentive entry, simply follow the instructions provided after you complete the required actions on the platform. Once you're eligible, your entry or incentive will be processed and delivered within the specified timeframe.
          </div>
        </div>
      </div>
      <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq4"
            aria-expanded="false"
            aria-controls="faq4"
          >
            Which crypto platforms are supported for the airdrop?
          </button>
        </h5>
        <div
          id="faq4"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            We support a variety of popular crypto platforms. Ensure your account is connected to the supported platforms listed in the terms, and follow the necessary steps to participate in the airdrop or incentive program.
          </div>
        </div>
      </div>
    </div>
  );
}

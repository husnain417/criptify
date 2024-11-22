import React from "react";

export default function Faq2() {
  return (
    <div className="accordion" id="accordion1">
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq5"
            aria-expanded="true"
            aria-controls="faq5"
          >
            Is my data safe with you?
          </button>
        </h5>
        <div
          id="faq5"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            Yes, your privacy and security are our top priorities. We use end-to-end encryption and industry-standard security protocols to ensure that your data is always protected.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq6"
            aria-expanded="false"
            aria-controls="faq6"
          >
            How do I qualify for the airdrop?
          </button>
        </h5>
        <div
          id="faq6"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            To qualify for the airdrop, ensure that you’ve signed up on our platform, completed required actions, and linked your crypto wallet or platform account. Full eligibility criteria are listed on the promotion page.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq7"
            aria-expanded="false"
            aria-controls="faq7"
          >
            How can I redeem my airdrop rewards?
          </button>
        </h5>
        <div
          id="faq7"
          className="accordion-collapse show"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            After qualifying for the airdrop, you will receive instructions in your registered email to claim your reward. Ensure to follow the steps carefully to successfully redeem your incentive.
          </div>
        </div>
      </div>
      <div className="accordion-item wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq8"
            aria-expanded="false"
            aria-controls="faq8"
          >
            Which platforms are eligible for the airdrop?
          </button>
        </h5>
      </div>
    </div>
  );
}

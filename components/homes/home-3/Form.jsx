"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../../../public/assets/css/form.css";
import Select from "react-select"; // Import react-select
import Confetti from "react-confetti"; // Import Confetti
import { useWindowSize } from "react-use";

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1); // Track the step
  const [formData, setFormData] = useState({
    name: "",
    phone: { countryCode: "+33", number: "" }, // Separate countryCode and number
    email: "",
    usesCrypto: "", // Yes or No
    platform: "", // Selected platform
    otherPlatform: "", // Custom platform
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // To track submission status
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  // Step Validation
  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.phone.number.trim()) newErrors.phone = "Phone is required.";
    } else if (currentStep === 2) {
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Valid email is required.";
    }
    return newErrors;
  };

  // Validate Step 3
  const validateStep3 = () => {
    const newErrors = {};
    if (formData.usesCrypto === "") newErrors.usesCrypto = "Please select Yes or No.";
    if (formData.usesCrypto === "Yes" && formData.platform === "") {
      newErrors.platform = "Please select a platform.";
    }
    if (formData.platform === "Other" && !formData.otherPlatform.trim()) {
      newErrors.otherPlatform = "Please specify your platform.";
    }
    return newErrors;
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("phone")) {
      const field = name.split(".")[1]; // Get the field (countryCode or number)
      setFormData((prev) => ({
        ...prev,
        phone: {
          ...prev.phone,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear the error on change
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      platform: selectedOption ? selectedOption.value : "",
    }));
    setErrors((prev) => ({ ...prev, platform: "" })); // Clear the error
  };

  // Handle Next Step
  const handleNextStep = (e) => {
    e.preventDefault();
    const stepErrors = validateStep();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
    } else {
      setCurrentStep((prev) => prev + 1); // Move to next step
    }
  };

  // Handle Previous Step
  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const step3Errors = validateStep3();
    if (Object.keys(step3Errors).length > 0) {
      setErrors(step3Errors);
    } else {
      alert("Form submitted successfully!");
      console.log("Submitted Data:", formData);
      setIsSubmitted(true); // Mark as submitted
      setShowConfetti(true); // Show confetti
  
      setTimeout(() => {
        setIsSubmitted(false); // Reset submission status
        setShowConfetti(false); // Hide confetti
        setCurrentStep(1); // Navigate back to step 1
        setFormData({
          name: "",
          phone: { countryCode: "+33", number: "" },
          email: "",
          usesCrypto: "",
          platform: "",
          otherPlatform: "",
        });
        setErrors({}); 
      }, 5000); 
    }
  };
  

  const platformOptions = [
    { value: "Binance", label: (
        <div className="platform-option">
          <Image src="/assets/img/binance.png" alt="Binance" width={20} height={20} />
          <span className="platform-name">Binance</span>
        </div>
      ) 
    },
    { value: "Kraken", label: (
        <div className="platform-option">
          <Image src="/assets/img/kraken.jpg" alt="Kraken" width={20} height={20}  />
          <span className="platform-name">Kraken</span>
        </div>
      ) 
    },
    { value: "Other", label: "Other" }
  ];

  return (
    <section className="lead-capture-section container-space fix">
      <div className="container">
      <div className="section-header mx-auto">
          <h5 className="subheading text-center">
            <span className="me-2">
              <Image
                alt="icon"
                src="/assets/img/icon/titleIcon.png"
                width="28"
                height="12"
              />
            </span>
            <span className="sub">
            FORM
            </span>
            <span className="ms-2">
              <Image
                alt="icon"
                src="/assets/img/icon/titleIcon.png"
                width="28"
                height="12"
              />
            </span>
          </h5>
          <h2 className="main-title text-center mb-50">Get In Touch</h2>
        </div>
        <div className="form-container mt-5" style={{ position: "relative" }}>
          {currentStep === 1 && (
            <form onSubmit={handleNextStep}>
              <h4 className="step-title">Step 1 (1/3): Basic Information</h4>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`input-field ${errors.name ? "input-error" : ""}`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </div>
              <div className="input-group phone-input-group">
                <label htmlFor="phone">Phone</label>
                <div className="phone-field">
                  <div className="phone-prefix">
                    <Image
                      src="/assets/img/french-flag.png"
                      alt="French Flag"
                      width={20}
                      height={14}
                    />
                    <span className="divider"></span>
                    <input
                      type="text"
                      name="phone.countryCode"
                      value={formData.phone.countryCode}
                      onChange={handleInputChange}
                      className={`input-field country-code ${errors.phone ? "input-error" : ""}`}
                      placeholder="Enter country code"
                    />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone.number"
                    value={formData.phone.number}
                    onChange={handleInputChange}
                    className={`input-field phone-number ${errors.phone ? "input-error" : ""}`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>
              <button type="submit" className="gt-btn primary mt-3">
                Next
              </button>
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleNextStep}>
              <h4 className="step-title">Step 2 (2/3): Email</h4>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`input-field ${errors.email ? "input-error" : ""}`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
              <div className="button-group">
                <button
                  type="button"
                  className="gt-btn secondary mt-3"
                  onClick={handlePreviousStep}
                >
                  Back
                </button>
                <button type="submit" className="gt-btn primary mt-3">
                  Next
                </button>
              </div>
            </form>
          )}

{currentStep === 3 && (
            <form onSubmit={handleSubmit}>
              <h4 className="step-title">Step 3 (3/3): Crypto Platforms</h4>
              <div className="input-group">
                <label>Do you already use crypto?</label>
                <select
                  name="usesCrypto"
                  value={formData.usesCrypto}
                  onChange={handleInputChange}
                  className={`input-field ${errors.usesCrypto ? "input-error" : ""}`}
                >
                  <option value="">Select Yes or No</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.usesCrypto && <div className="error-message">{errors.usesCrypto}</div>}
              </div>

              {formData.usesCrypto === "Yes" && (
                <div className="input-group">
                  <label>Select your platform(s):</label>
                  <Select
                    options={platformOptions}
                    value={platformOptions.find(
                      (option) => option.value === formData.platform
                    )}
                    onChange={handleSelectChange}
                    placeholder="Select a platform"
                    className={`input-select ${errors.platform ? "input-error" : ""}`}
                  />
                  {errors.platform && <div className="error-message">{errors.platform}</div>}
                  {formData.platform === "Other" && (
                    <div className="input-group">
                      <label>Other Platform</label>
                      <input
                        type="text"
                        name="otherPlatform"
                        value={formData.otherPlatform}
                        onChange={handleInputChange}
                        className={`input-field ${errors.otherPlatform ? "input-error" : ""}`}
                        placeholder="Please specify your platform"
                      />
                      {errors.otherPlatform && <div className="error-message">{errors.otherPlatform}</div>}
                    </div>
                  )}
                </div>
              )}

              <div className="button-group">
                <button
                  type="button"
                  className="gt-btn secondary mt-3"
                  onClick={handlePreviousStep}
                >
                  Back
                </button>
                <button type="submit" className="gt-btn primary mt-3">
                  Submit
                </button>
              </div>
            </form>
          )}

          {showConfetti && (
            <Confetti
              width={width}
              height={height}
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          )}     
        </div>
      </div>
    </section>
  );
}

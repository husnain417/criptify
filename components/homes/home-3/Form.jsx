"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../../../public/assets/css/form.css";
import Select from "react-select";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { appendDataToSheet } from "./googleSheets"; 

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: { countryCode: "+33", number: "" },
    email: "",
    usesCrypto: "",
    platform: "",
    platforms: [],
    otherPlatform: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  const calculateProgress = () => {
    switch(currentStep) {
      case 1: return 0;
      case 2: return 33.3;
      case 3: return 66.7;
      case 4: return 100;
      default: return 0;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "platforms") {
      setFormData((prev) => ({ 
        ...prev, 
        platforms: value || [] 
      }));
      setErrors((prev) => ({ ...prev, platforms: "" }));
    } else if (name.includes("phone")) {
      const field = name.split(".")[1];
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
    
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.number.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    
    if (formData.usesCrypto === "") 
      newErrors.usesCrypto = "Please select Yes or No.";
    
    if (formData.usesCrypto === "Yes" && (!formData.platforms || formData.platforms.length === 0)) {
      newErrors.platforms = "Please select at least one platform.";
    }
    
    if (formData.platforms && formData.platforms.some(p => p.value === "Other") && !formData.otherPlatform.trim()) {
      newErrors.otherPlatform = "Please specify your platform.";
    }
    
    return newErrors;
  };

  const handleNextStep = async (e) => {
    e.preventDefault();
      setCurrentStep((prev) => prev + 1);
    }
  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    try {
      // Wrap the submission data in a structure that matches formatSheetData
      const stepData = {
        step1: {
          name: formData.name,
          phone: formData.phone
        },
        step2: {
          email: formData.email
        },
        step3: {
          usesCrypto: formData.usesCrypto,
          platforms: formData.platforms,
          otherPlatform: formData.otherPlatform
        }
      };
  
      console.log(stepData);
      // Send data to Google Sheets
      await appendDataToSheet(stepData);
  
      // Handle successful submission
      setIsSubmitted(true);
      setShowConfetti(true);
  
      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setShowConfetti(false);
        setFormData({
          name: "",
          phone: { countryCode: "+33", number: "" },
          email: "",
          usesCrypto: "",
          platform: "",
          platforms: [],
          otherPlatform: "",
        });
        setErrors({}); 
        setCurrentStep(1);
      }, 4000); 
    } catch (error) {
      console.error('Submission error:', error);
      // Optionally show an error message to the user
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const step3Errors = validateStep3();
  //   if (Object.keys(step3Errors).length > 0) {
  //     setErrors(step3Errors);
  //   } else {
  //     console.log("Submitted Data:", {
  //       ...formData,
  //       platforms: formData.usesCrypto === "Yes" 
  //         ? (formData.platforms || []).map(p => p.value) 
  //         : [] // Empty array if not using crypto
  //     });
  //     setIsSubmitted(true);
  //     setShowConfetti(true);
  //     setCurrentStep(4);

  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //       setShowConfetti(false);
  //       setCurrentStep(1);
  //       setFormData({
  //         name: "",
  //         phone: { countryCode: "+33", number: "" },
  //         email: "",
  //         usesCrypto: "",
  //         platform: "",
  //         otherPlatform: "",
  //       });
  //       setErrors({}); 
  //     }, 4000); 
  //   }
  // };

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
          <Image src="/assets/img/kraken.png" alt="Kraken" width={20} height={20} />
          <span className="platform-name">Kraken</span>
        </div>
      )
    },
    { value: "Coinbase", label: (
        <div className="platform-option">
          <Image src="/assets/img/coinbase.png" alt="Coinbase" width={20} height={20} />
          <span className="platform-name">Coinbase</span>
        </div>
      )
    },
    { value: "Gemini", label: (
        <div className="platform-option">
          <Image src="/assets/img/gemini.png" alt="Gemini" width={20} height={20} />
          <span className="platform-name">Gemini</span>
        </div>
      )
    },
    { value: "Huobi", label: (
        <div className="platform-option">
          <Image src="/assets/img/houbi.png" alt="Huobi" width={20} height={20} />
          <span className="platform-name">Huobi</span>
        </div>
      )
    },
    { value: "OKX", label: (
        <div className="platform-option">
          <Image src="/assets/img/okx.png" alt="OKX" width={20} height={20} />
          <span className="platform-name">OKX</span>
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
              <div className="cont-info">
                <h4 className="step-title">1. Basic Information</h4>
                <div className="progress-bar-wrapper small">
                  <CircularProgressbar
                    value={calculateProgress()}
                    text={`${calculateProgress().toFixed(1)}%`}
                    styles={buildStyles({
                      pathColor: "#8139FA",
                      textColor: "#8139FA",
                      trailColor: "#d6d6d6",
                      textSize: "16px",
                    })}
                  />
                </div>
              </div>
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
              <div className="cont-info">
                <h4 className="step-title">2. Email</h4>
                <div className="progress-bar-wrapper small">
                  <CircularProgressbar
                    value={calculateProgress()}
                    text={`${calculateProgress().toFixed(1)}%`}
                    styles={buildStyles({
                      pathColor: "#8139FA",
                      textColor: "#8139FA",
                      trailColor: "#d6d6d6",
                      textSize: "16px",
                    })}
                  />
                </div>
              </div>
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
              <div className="cont-info">
                <h4 className="step-title">3. Crypto Platforms</h4>
                <div className="progress-bar-wrapper small">
                  <CircularProgressbar
                    value={calculateProgress()}
                    text={`${calculateProgress().toFixed(1)}%`}
                    styles={buildStyles({
                      pathColor: "#8139FA",
                      textColor: "#8139FA",
                      trailColor: "#d6d6d6",
                      textSize: "16px",
                    })}
                  />
                </div>
              </div>
              <div className="input-group">
                <label>Do you already use crypto?</label>
                <div className="button-group g">
                  <button
                    type="button"
                    className={`choice-button ${formData.usesCrypto === "Yes" ? "selected" : ""}`}
                    onClick={() => handleInputChange({ target: { name: "usesCrypto", value: "Yes" } })}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`choice-button ${formData.usesCrypto === "No" ? "selected" : ""}`}
                    onClick={() => handleInputChange({ target: { name: "usesCrypto", value: "No" } })}
                  >
                    No
                  </button>
                </div>
                {errors.usesCrypto && <div className="error-message">{errors.usesCrypto}</div>}
              </div>

              {formData.usesCrypto === "Yes" && (
            <div className="input-group form3">
              <div className="dropdown-cont">
              <label className="plat">Select your platform(s):</label>
              <Select
                options={platformOptions}
                value={formData.platforms} // Pass the array of selected platforms
                onChange={(selected) =>
                  handleInputChange({
                    target: { name: "platforms", value: selected || [] },
                  })
                }
                isMulti // Enable multi-select
                placeholder="Select one or more platforms"
                className={`input-select ${errors.platforms ? "input-error" : ""}`}
              />
              </div>
              {errors.platforms && <div className="error-message">{errors.platforms}</div>}

              {formData.platforms && formData.platforms.length > 0 && (
              <div className="selected-platforms">
                <h5>Selected Platforms:</h5>
                <ul>
                  {formData.platforms.map((platform) => (
                    <li key={platform.value} className="platform-item">
                      <Image
                        src={`/assets/img/${platform.value.toLowerCase()}.png`}
                        alt={platform.label}
                        width={20}
                        height={20}
                      />
                      <span>{platform.label.props ? platform.label.props.children[1].props.children : platform.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {formData.platforms && formData.platforms.some((p) => p.value === "Other") && ( 
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

          {currentStep === 4 && (
            <div className="form-completed-container centered-completion">
              <div className="progress-bar-wrapper down small">
                <CircularProgressbar
                  value={100}
                  text="100%"
                  styles={buildStyles({
                    pathColor: "#8139FA",
                    textColor: "#8139FA",
                    trailColor: "rgba(76, 175, 80, 0.3)",
                    textSize: "24px",
                  })}
                />
              </div>
              <h3 className="completion-message fade-in">Form Submitted Successfully!</h3>
            </div>
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
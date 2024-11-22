"use client";

import React, { useState } from "react";
import Image from "next/image";
import '../../../public/assets/css/form.css'

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    platform: "Binance",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear the error on change
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("Form submitted successfully!");
      // Add your form submission logic here
    }
  };

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
            Lead Capture
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
        <div className="form-container mt-5">
          <form onSubmit={handleFormSubmit}>
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
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`input-field ${errors.phone ? "input-error" : ""}`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <div className="error-message">{errors.phone}</div>
              )}
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
            <div className="input-group">
              <label htmlFor="platform">Preferred Crypto Platform</label>
              <select
                id="platform"
                name="platform"
                value={formData.platform}
                onChange={handleInputChange}
                className="input-field"
              >
                <option>Binance</option>
                <option>Coinbase</option>
                <option>Crypto.com</option>
                <option>Ledger</option>
                <option>Kraken</option>
                <option>Bitpanda</option>
                <option>Trust</option>
                <option>Metamask</option>
              </select>
            </div>
            <button type="submit" className="gt-btn primary mt-3">
              Submit
            </button>
          </form>
          <p className="gdpr-notice mt-2 text-center">
            Your data is safe with us. We adhere to GDPR compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

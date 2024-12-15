"use client";
import React, { useEffect } from "react";
import '../../public/assets/css/headertop.css';

export default function HeaderTop() {
  useEffect(() => {
    // Remove Google Translate cookies and set the language to French
    const resetLanguageToFrench = () => {
      // Clear existing cookies
      document.cookie
        .split(";")
        .forEach((cookie) => {
          const cookieName = cookie.split("=")[0].trim();
          if (cookieName.startsWith("googtrans")) {
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          }
        });

      // Set cookie to force French language
      document.cookie = "googtrans=/en/fr; path=/;";
    };

    // Load the Google Translate script
    const loadGoogleTranslate = () => {
      const existingScript = document.querySelector(
        'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Original language of your website
            includedLanguages: "en,fr", // Languages you want to support
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Layout style
          },
          "google_translate_element" // The container ID
        );
      };
    };

    // Clear cookies, set French language, and load the script
    resetLanguageToFrench();
    loadGoogleTranslate();
  }, []);

  useEffect(() => {
    // Force the language to French after Google Translate initializes
    const setLanguageToFrench = () => {
      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (iframe) {
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        const frenchOption = innerDoc.querySelector('a[lang="fr"]');
        if (frenchOption) {
          frenchOption.click(); // Simulate a click to switch to French
        }
      }
    };

    // Wait for the iframe to load and apply the language setting
    const intervalId = setInterval(() => {
      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (iframe) {
        setLanguageToFrench();
        clearInterval(intervalId);
      }
    }, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header-top-section style1 fix">
      <div className="container">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <a href="mailto:info@example.com" className="link">
                info@example.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume" />
              <a href="tel:2086660112">+208-666-0112</a>
            </li>
          </ul>

          <div className="top-right">
          <span className="text-white">Languages:</span>
          <div
            id="google_translate_element"
            style={{
              zIndex: 9999,
            }}
          ></div>
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us:</span>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

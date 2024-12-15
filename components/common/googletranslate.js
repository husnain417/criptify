// utils/googleTranslate.js
export const initializeGoogleTranslate = () => {
    // Remove existing script to prevent multiple loads
    const existingScript = document.querySelector(
      'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
    );
    if (existingScript) {
      existingScript.remove();
    }
  
    // Clear existing Google Translate cookies
    document.cookie
      .split(";")
      .forEach((cookie) => {
        const cookieName = cookie.split("=")[0].trim();
        if (cookieName.startsWith("googtrans")) {
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      });
  
    // Set default French translation cookie
    document.cookie = "googtrans=/en/fr; path=/;";
  
    // Load Google Translate script
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  
    // Global initialization function
    window.googleTranslateElementInit = () => {
      // Initialize first translator
      if (document.getElementById('google_translate_element1')) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element1"
        );
      }
  
      // Initialize second translator
      if (document.getElementById('2')) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "2"
        );
      }
    };
  };
  
  export const forceLanguageToFrench = () => {
    const iframe = document.querySelector("iframe.goog-te-menu-frame");
    if (iframe) {
      const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      const frenchOption = innerDoc.querySelector('a[lang="fr"]');
      if (frenchOption) {
        frenchOption.click(); // Simulate a click to switch to French
      }
    }
  };
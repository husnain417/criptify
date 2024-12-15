"use client";
import { menuItems } from "@/data/menu";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function MobileNav() {
  const [activeParent, setActiveParent] = useState(-1);
  const [activeParent2, setActiveParent2] = useState(-1);
  const pathname = usePathname();
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
        const element2 = document.getElementById("google_translate_element2");
        if (element2 && !element2.hasChildNodes()) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,fr",
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element2"
          );
        }
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
  
  const handleScroll = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    
    // Only handle scroll for anchor links
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const menuAreaRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        mobileMenuRef.current.contains(event.target) &&
        menuAreaRef.current &&
        !menuAreaRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isMenuActive = (menu) => {
    // Simplify active menu detection
    return pathname === menu.href || 
           (menu.href.includes('#') && pathname === '/');
  };

  const handleClick = (e, href) => {
    // If not on homepage and link is a section
    if (href.includes('/#') && pathname !== '/') {
      window.location.href = href;
      return;
    }

    // If it's a hash link (section navigation)
    if (href.startsWith("/#") || href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          // Find and update active menu item
          document.querySelectorAll(".main-menu a").forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href")?.endsWith(`#${sectionId}`)) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const renderMenuItem = (item) => {
    if (item.subMenu) {
      return (
        <>
          {item.subMenu.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link
                scroll={false}
                href={subItem.href}
                onClick={(e) => handleClick(e, subItem.href)}
                className={isMenuActive(subItem) ? "active" : ""}
              >
                {subItem.title}
              </Link>
            </li>
          ))}
          </>
      );
    }
    return null;
  };

  return (
    <div
      id="mobileMenu"
      ref={mobileMenuRef}
      className="gt-menu-wrapper onepage-nav"
    >
      <div ref={menuAreaRef} className="gt-menu-area text-center">
        <button onClick={closeMobileMenu} className="gt-menu-toggle">
          <i className="fal fa-times"></i>
        </button>
        <div className="mobile-logo">
          <Link href="/">
            <Image
              alt="techo"
              src="/assets/img/logo2_dark.png"
              width="199"
              height="42"
            />
          </Link>
        </div>
        <div className="gt-mobile-menu">
          <ul>
        {menuItems.map((item, index) => (
        <li 
          key={index} 
          className={item.subMenu ? "menu-item-has-children" : ""}
        >
          <Link
            scroll={false}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={isMenuActive(item) ? "active" : ""}
          >
            {item.title}
          </Link>
          {renderMenuItem(item)}
        </li>
      ))}
      <li>          <span className="text-white">Languages:</span>
          <div
            id="google_translate_element2"
            style={{
              zIndex: 9999,
            }}
          ></div></li>
      </ul>
        </div>
      </div>
    </div>
  );
}
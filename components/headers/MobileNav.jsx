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
      </ul>
        </div>
      </div>
    </div>
  );
}
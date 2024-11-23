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
                <a
                  href={item.href}
                  onClick={(e) => {
                    handleScroll(e, item.href);
                    setActiveParent((pre) => (pre == index ? -1 : index));
                  }}
                >
                  {item.title}
                  {item.subMenu && <span className="gt-mean-expand"></span>}
                </a>
                {item.subMenu && (
                  <ul
                    className={`sub-menu ${
                      index == activeParent ? "active" : ""
                    }`}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={
                          subItem.subMenu ? "menu-item-has-children" : ""
                        }
                      >
                        <a
                          href={subItem.href}
                          onClick={(e) => {
                            handleScroll(e, subItem.href);
                            setActiveParent2((pre) =>
                              pre == index ? -1 : index
                            );
                          }}
                        >
                          {subItem.title}
                        </a>
                        {subItem.subMenu && (
                          <ul
                            className={`sub-menu ${
                              index == activeParent2 ? "active" : ""
                            }`}
                          >
                            {subItem.subMenu.map((subSubItem, subSubIndex) => (
                              <li key={subSubIndex}>
                                <a
                                  href={subSubItem.href}
                                  onClick={(e) =>
                                    handleScroll(e, subSubItem.href)
                                  }
                                >
                                  {subSubItem.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
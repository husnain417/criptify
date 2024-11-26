"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();

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
        <ul className="sub-menu">
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
        </ul>
      );
    }
    return null;
  };

  return (
    <>
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
    </>
  );
}
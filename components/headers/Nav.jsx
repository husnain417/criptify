"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isMenuActive = (menu) => {
    let isActive = false;
    if (menu.href !== "#") {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    return isActive;
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            scroll={false}
            className={`${isMenuActive(item) ? "menuActive" : ""}`}
            href={item.href}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
}

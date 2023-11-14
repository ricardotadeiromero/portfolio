import React from "react";
import Link from "next/link";
import { NavLink } from "./NavLink";

const Links = [
  {
    href: "#About",
    title: "About",
  },
  {
    href: "#Projects",
    title: "Projects",
  },
  {
    href: "#Contact",
    title: "Contact",
  },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="menu">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {Links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.href} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

"use client";
import { useState } from "react";
import style from "../styles/MobileNav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      {!navOpen && <GiHamburgerMenu className={style.open} onClick={openNav} />}
      {navOpen && (
        <nav className={style.mobile_nav}>
          <ul>
            <AiFillCloseCircle className={style.close} onClick={closeNav} />
            <Link href="/" onClick={closeNav}>
              <li>Home</li>
            </Link>
            <Link href="/about" onClick={closeNav}>
              <li>about us</li>
            </Link>
            <Link href="/services" onClick={closeNav}>
              <li>services</li>
            </Link>
            <Link href="/contact" onClick={closeNav}>
              <li>contact us</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileNav;

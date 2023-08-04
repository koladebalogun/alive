"use client";
import { useState } from "react";
import style from "../styles/MobileNav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

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
      <div className={style.mobile_navbar}>
      <Image width={150} height={130} src="/alive.png" alt="logo" className={style.mobile_logo} />

        {!navOpen && <GiHamburgerMenu className={style.open} onClick={openNav} />}
      </div>
      
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

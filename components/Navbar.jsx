"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const navBar = useRef();
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(navBar.current, { duration: 0, css: { visibility: "visible" } });
      tl.from(navBar.current, 0.7, {
        delay: 0.3,
        opacity: 0,
        y: 20,
        ease: "Expo.easeInOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
    <nav className={style.navbar} ref={navBar}>
      <div className={style.logo}>
        <Image width={100} height={100} src="/alive.png" alt="logo" />
      </div>
      <div className={style.menuItem}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/about">
            <li>About Us</li>
          </Link>
          <Link href="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </nav>
    <MobileNav />
    </>
  );
};

export default Navbar;

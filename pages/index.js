"use client";

import React, {useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import style from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  const tl = gsap.timeline();
  const wrapper = useRef();
  const bg = useRef();
  const media = useRef();
  const header = useRef();
  const text = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(wrapper.current, { duration: 0, css: { visibility: "visible" } });

      tl.to(bg.current, 2, {
        width: "100%",
        ease: "Expo.easeInOut",
      });

      if(window.innerWidth < 1000){
        tl.to(bg.current, 2, {
          height: "100%",
          ease: "Expo.easeInOut",
        });
      }

      tl.from(media.current, 0.7, {
        delay: 0.3,
        opacity: 0,
        x: -30,
        ease: "Expo.easeInOut",
      });

      tl.from(header.current, 1.2, {
        delay: 0.3,
        y: "100%",
        ease: "Expo.easeInOut",
      });

      tl.from(text.current, 1.5, {
        delay: 0.3,
        opacity: 0,
        y: "100%",
        ease: "Expo.easeInOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={style.wrapper} ref={wrapper}>
      <div className={style.bg} ref={bg}></div>
      <Navbar />

      <div className={style.media} ref={media}>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>

      <div className={style.imageWrapper}>
        <div className={style.img}></div>
        <div className={style.block}></div>
      </div>

      <div className={style.text}>
        <h1>
          <span className={style.textBar} ref={header}>
            Property Investment <br />& <label>Consultancy Firm</label>
          </span>
        </h1>
        <p>
          <span className={style.textBar} ref={text}>
            We are dedicated to helping clients maximize their capital value
            &amp; achieve consistent cashflow utilizing creative Property
            Investment Strategies in the United Kingdom. Our approach to
            achieving these goals for our clients is to sustain and maintain the
            lifecycle of their properties through effective property management
            processes.
          </span>
        </p>
      </div>

      {/* <footer className={style.bottomNav}>

      </footer> */}
    </div>
  );
}

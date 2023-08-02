"use client";
import { useLayoutEffect, useRef } from "react";
import style from "../styles/About.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutBanner = () => {
  const bgImage = useRef();
  const introImage = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top",
          end: "+500px",
          scrub: true,
        },
      });

      tl.from(bgImage.current, { clipPath: "inset(10%)" }).to(
        introImage.current,
        { height: "200px" },
        0
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={style.intro}>
      <div className={style.backgroundImage} ref={bgImage}>
        <Image src="/a1.jpg" fill={true} />
      </div>

      <div className={style.introContainer}>
        <div
          className={style.introImage}
          data-scroll
          data-scroll-speed="0.3"
          ref={introImage}
        >
          <Image src="/a1.jpg" fill={true} />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutBanner;

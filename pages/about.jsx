"use client";
import React, { useLayoutEffect, useRef, useEffect } from "react";
import style from "../styles/About.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutBanner from "@/components/AboutBanner";
import Navbar from "@/components/Navbar";
import MobileAbout from "@/components/MobileAbout";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const content = useRef();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);
    })();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(content.current, { duration: 0, css: { visibility: "visible" } });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="content" ref={content}>
        <Navbar />
        <AboutBanner />
        <div className={style.wrapper}>
          <div className={style.inner_section}>
            <div>
              <div className={style.section_content}>
                <h3>WHO WE ARE</h3>
                <p>
                  Alive Assets is a Property Investment and Consultancy Firm
                  operating in the United Kingdom. We adopt a creative and
                  innovative approach to real estate investment and real asset
                  management in the United Kingdom.
                </p>
              </div>

              <div className={style.section_content2}>
                <h3>WHY US</h3>
                <p className={style.text__block__text}>
                  Our team provides a bespoke service to first-time home buyers
                  looking for their ideal home, existing homeowners looking to
                  buy another property, UK-based investors looking to expand and
                  diversify their portfolio, and foreign investors looking to
                  seize the exciting opportunities in the UK Real Estate Market.
                  <br />
                  <br />
                  We help clients with all aspects of the property investment
                  process, from providing personalized advice that meets our
                  clients needs to sourcing suitable properties, conducting
                  thorough research & due diligence, and then assisting with the
                  entire acquisition and development process until the property
                  is ready to be put on the market.
                </p>
              </div>

              <div className={style.section_content3}>
                <h3>OUR MISSION</h3>
                <p>
                  Our mission is to help you maximize your capital value and
                  achieve consistent cashflow when investing in property through
                  our creative property investment approach.
                  <br />
                  <br />
                  Our approach combined with our guarantee to deliver
                  exceptional results drives us to make sure our client’s
                  investment goals are achieved.
                  <br />
                  <br />
                  Our innovative approach is tailored to meet the needs of
                  diverse clients including first-time home buyers, existing
                  homeowners, UK-based or foreign property investors and working
                  professionals, with the ultimate goal of maximizing the
                  capital value of their investments.
                </p>
              </div>
            </div>

            <Image
              src="/s3.jpg"
              width={550}
              height={400}
              className={style.inner_section_image}
              data-scroll
              data-scroll-speed="0.1"
            />
          </div>
  
        </div>
      </div>
      <MobileAbout />
    </>
  );
};

export default About;

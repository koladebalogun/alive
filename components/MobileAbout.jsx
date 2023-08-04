"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import style from "../styles/About.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileAbout = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);
    })();
  }, []);
  
  return (
    <div className={style.mobileWrapper}>
      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/a4.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.2"
            >
              WHO WE ARE
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll></h3>
            <p>
              Alive Assets is a Property Investment and Consultancy Firm
              operating in the United Kingdom. We adopt a creative and
              innovative approach to real estate investment and real asset
              management in the United Kingdom.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/s14.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              OUR MISSION
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              Our mission is to help you maximize your capital value and achieve
              consistent cashflow when investing in property through our
              creative property investment approach.
              <br />
              <br />
              Our approach combined with our guarantee to deliver exceptional
              results drives us to make sure our client’s investment goals are
              achieved.
              <br />
              <br />
              Our innovative approach is tailored to meet the needs of diverse
              clients including first-time home buyers, existing homeowners,
              UK-based or foreign property investors and working professionals,
              with the ultimate goal of maximizing the capital value of their
              investments.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/s4.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.1"
            >
              WHY US
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              Our team provides a bespoke service to first-time home buyers
              looking for their ideal home, existing homeowners looking to buy
              another property, UK-based investors looking to expand and
              diversify their portfolio, and foreign investors looking to seize
              the exciting opportunities in the UK Real Estate Market.
              <br />
              <br />
              We help clients with all aspects of the property investment
              process, from providing personalized advice that meets our
              clients & needs to sourcing suitable properties, conducting
              thorough research & due diligence, and then assisting with the
              entire acquisition and development process until the property is
              ready to be put on the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;

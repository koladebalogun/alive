"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import style from "../styles/Servcies.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileServices = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);
    })();
  }, []);

  return (
    <div className={style.mobileWrapper}>
      <h3>Our Services</h3>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/s5.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.4"
            >
              Investment
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              We provide comprehensive guidance to clients in the UK real estate
              market, helping them make informed property investment decisions.
              This includes guiding them on suitable and creative property
              investment strategies that fit their investment criteria, creating
              realistic investment plans, facilitating collaboration with
              necessary stakeholders needed for the completion of their
              projects, and managing the refurbishment or development projects
              to meet established standards.
              <br />
              <br />
              We manage our client’s requirements through the complete
              investment life-cycle: <br />- Strategy <br />- Market Research{" "}
              <br />- Investment & Development Plan <br />- Property Sourcing{" "}
              <br />- Mortgage <br />- Property Selection <br />- Conveyancing{" "}
              <br />- Acquisition <br />- Construction (Property Restructure or
              Renovations) <br />- Lettings &Management.
              <br />
              <br /> We also offer investors who are interested in fixed returns
              on their capital invested in our property investment projects.
              These returns range from 7 – 12% for a 12-month period, depending
              on the capital invested.
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
              data-scroll-speed="0.4"
            >
              Property Asset Management
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              At Alive Assets, maintaining the lifespan of built properties is
              at the core of our business. Our approach is to provide excellent
              customer service and to be open and honest with our tenants. As a
              result, this guarantees that the assets we manage are well cared
              for by tenants who live in them.
              <br />
              <br />
              We provide unique, innovative property asset management solutions
              as well as processes that enable the value of your property
              investments to be maximized and sustained.
              <br />
              <br /> We deliver the full lifecycle of the asset management
              process, which ranges from lettings, property compliance,
              day-to-day management, rent collection, routine inspections,
              maintenance & value-added renovation work.
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
              data-scroll-speed="0.4"
            >
              Project Management
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              At Alive Assets, maximizing your capital value through our
              creative property investment approach involves assessing numerous
              options where value can be added to any property acquired. This
              can include but is not limited to renovating, remodeling,
              extending, enhancing, or changing the property from one use type
              to another.
              <br />
              <br />
              We take full ownership of all development and refurbishment works
              to increase the value of acquired properties, negotiate contracts
              with service contractors to deliver the project within the agreed
              budget and timeline, advise on an appropriate exit strategy, and
              ensure that the project is completed within the agreed scope of
              work.
              <br />
              <br /> We partner with skilled construction and contracting teams
              to ensure that each project complies with all applicable building
              legislation and safety standards. From conception to completion,
              we lead the build team, give guidance and assistance to our
              clients. We maintain a single point of contact with the client at
              all times and adopt an integrated approach while managing and
              balancing financial responsibilities and project ambitions,
              regardless of the size and scope of the project being delivered.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/s7.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.4"
            >
              Consultancy
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              At Alive Assets, we always strive to give the best advice and
              services for our clients. We provide property investment
              consultancy, property sourcing, and development consultancy to our
              clients and investors.
              <br />
              <br />
              As part of our consultancy service, we develop and provide our
              clients with realistic investment and project plans to make sure
              projects are completed within their expected timeline.
              <br />
              <br /> We support our clients and investors with the planning and
              development of their investment projects, in addition to providing
              them with market-backed analysis to help them make the right
              decision based on their investment objectives.
              <br />
              <br />
              We bring value, a broader context and data-backed knowledge to all
              phases of acquiring, developing, and managing real estate. We stay
              on top of every element impacting the real estate industry, and we
              are not hesitant to push, innovate, and question in order to make
              sure our clients maximize their returns on investment.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/s12.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.4"
            >
              Co-Living Spaces & Serviced Accommodation
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              We provide one-of-a-kind co-living spaces as well as all-inclusive
              living accommodations for working professionals. We work with
              landlords to take on their properties on a 3–5-year lease using
              our GUARANTEED RENT model, ensuring that their revenue is safe
              while also effectively managing their asset.
              <br />
              <br />
              As part of our consultancy service, we develop and provide our
              clients with realistic investment and project plans to make sure
              projects are completed within their expected timeline.
              <br />
              <br />
              Through this model, we also offer serviced accommodation to a wide
              range of guests, from tourists to business people, and those
              looking for somewhere to stay either between house moves or during
              renovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServices;

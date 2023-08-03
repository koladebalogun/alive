"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "../styles/Servcies.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MobileServices from "@/components/MobileServices";

const services = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);
    })();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const girlImage = images.firstElementChild;
      const boyImage = images.lastElementChild;

      const headlineFirst = content.children[0].children[0];

      const contentP = content.children[1];
      const contentButton = content.children[2];

      gsap.to(app, 0, { css: { visibility: "visible" } });

      tl.from(girlImage, 1.2, { y: 40, ease: "Power3.easeOut" }, "Start")
        .from(
          girlImage.firstElementChild,
          2,
          { scale: 1.6, ease: "Power3.easeOut" },
          0.2
        )
        .from(boyImage, 1.4, { y: 1280, ease: "Power3.easeOut" }, 0.2)
        .from(
          boyImage.firstElementChild,
          2,
          { scale: 1.6, ease: "Power3.easeOut" },
          0.2
        );

      //Content Animation
      tl.from(
        [headlineFirst.children],
        1,
        {
          y: 44,
          ease: "Power3.easeOut",
          delay: 0.8,
        },
        0.15,
        "Start"
      )
        .from(contentP, 1, { y: 20, opacity: 0, ease: "Power3.easeOut" }, 1.4)
        .from(
          contentButton,
          1,
          { y: 20, opacity: 0, ease: "Power3.easeOut" },
          1.6
        );
    });

    return () => ctx.revert();
  }, [tl]);

  return (
    <>
      <Navbar />
      <div className={style.hero} ref={(el) => (app = el)}>
        <div className={style.container}>
          <div className={style.hero_inner}>
            <div className={style.hero_content}>
              <div
                className={style.hero_content_inner}
                ref={(el) => (content = el)}
              >
                <h1 data-scroll data-scroll-speed=".4">
                  <div className={style.hero_content_line}>
                    <div className="hero-content-line-inner">Our Services</div>
                  </div>
                </h1>
                <p>
                  We provide comprehensive guidance to clients in the UK real
                  estate market, helping them make informed property investment
                  decisions. This includes guiding them on suitable and creative
                  property investment strategies that fit their investment
                  criteria, creating realistic investment plans, facilitating
                  collaboration with necessary stakeholders needed for the
                  completion of their projects, and managing the refurbishment
                  or development projects to meet established standards.
                </p>
                <div className={style.btn_row}>
                  <button className={style.explore_button}>
                    Explore
                    <div className={style.arrow_icon}>
                      <Image src="/arrow-right.svg" fill={true} alt="row" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={style.hero_images}>
              <div
                ref={(el) => (images = el)}
                className={style.hero_images_inner}
              >
                <div
                  className={`${style.hero_image} ${style.girl}`}
                  data-scroll
                  data-scroll-speed=".3"
                >
                  <Image src="/serviceImg1.jpg" alt="girl" fill={true} />
                </div>
                <div className={`${style.hero_image} ${style.boy}`} data-scroll>
                  <Image src="/svc.webp" alt="boy" fill={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class={style.section}>
        <div className={style.inner_section}>
          <div className={style.section_content}>
            <h3 data-scroll data-scroll-speed="0.2">
              Investment
            </h3>
            <p data-scroll data-scroll-speed="0.3">
              We manage our client’s requirements through the complete
              investment life-cycle: <br />- Strategy <br />- Market Research{" "}
              <br />- Investment and Development Plan <br />- Property Sourcing{" "}
              <br />- Mortgage <br />- Property Selection <br />- Conveyancing{" "}
              <br />- Acquisition - Construction (Property Restructure or
              Renovations) <br />- Lettings and Management.
              <br />
              <br />
              We also offer investors who are interested in fixed returns on
              their capital invested in our property investment projects. These
              returns range from 7 – 12% for a 12-month period, depending on the
              capital invested.
            </p>
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

        <div className={style.inner_section}>
          <Image
            src="/s12.JPG"
            width={550}
            height={400}
            className={style.inner_section_image}
            data-scroll
            data-scroll-speed="0.1"
          />
          <div className={style.section_content}>
            <h3 data-scroll data-scroll-speed="0.2">
              Property Asset Management
            </h3>
            <p data-scroll data-scroll-speed="0.3">
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
              <br />
              We deliver the full lifecycle of the asset management process,
              which ranges from lettings, property compliance, day-to-day
              management, rent collection, routine inspections, maintenance &
              value-added renovation work.
            </p>
          </div>
        </div>

        <div className={style.inner_section}>
          <div className={style.section_content}>
            <h3 data-scroll-speed="0.2">Project Management</h3>
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
              <br />
              We partner with skilled construction and contracting teams to
              ensure that each project complies with all applicable building
              legislation and safety standards. From conception to completion,
              we lead the build team, give guidance and assistance to our
              clients. We maintain a single point of contact with the client at
              all times and adopt an integrated approach while managing and
              balancing financial responsibilities and project ambitions,
              regardless of the size and scope of the project being delivered.
            </p>
          </div>
          <Image
            src="/mgt.webp"
            width={550}
            height={400}
            className={style.inner_section_image}
            data-scroll
            data-scroll-speed="0.1"
          />
        </div>

        <div className={style.inner_section}>
          <Image
            src="/s7.jpg"
            width={550}
            height={400}
            className={style.inner_section_image}
            data-scroll
            data-scroll-speed="0.1"
          />
          <div className={style.section_content}>
            <h3 data-scroll data-scroll-speed="0.2">
              Consultancy
            </h3>
            <p data-scroll data-scroll-speed="0.3">
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
              <br />
              We support our clients and investors with the planning and
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

        <div className={style.inner_section}>
          <div className={style.section_content}>
            <h3 data-scroll data-scroll-speed="0.2">
              Co-Living Spaces & Serviced Accommodation
            </h3>
            <p data-scroll data-scroll-speed="0.3">
              We provide one-of-a-kind co-living spaces as well as all-inclusive
              living accommodations for working professionals. We work with
              landlords to take on their properties on a 3–5-year lease using
              our GUARANTEED RENT model, ensuring that their revenue is safe
              while also effectively managing their asset.
              <br />
              <br />
              Through this model, we also offer serviced accommodation to a wide
              range of guests, from tourists to business people, and those
              looking for somewhere to stay either between house moves or during
              renovations.
            </p>
          </div>
          <Image
            src="/coliving.webp"
            width={550}
            height={400}
            className={style.inner_section_image}
            data-scroll
            data-scroll-speed="0.1"
          />
        </div>
      </section>
      <MobileServices />
    </>
  );
};

export default services;

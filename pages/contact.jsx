"use client";
import { useEffect, useRef } from "react";
import style from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";

const contact = () => {
  const form = useRef();

  const redirectToExternalSite = (url) => {
    window.open(url, "_blank");
  };

  const handleClick = () => {
    redirectToExternalSite("https://calendly.com/aliveassets");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if(window.innerWidth < 1000){
    console.log(window)
    }
  },[])

  return (
    <>
      <Navbar />
      <div className={style.contact_wrapper}>
        <h1 className={style.header}>Contact Us</h1>
        <div className={style.contact_inner_wrapper}>
          <div className={style.left_card}>
            <p>
              We offer a <span>free</span> no obligation consultation call. This
              consultaion will showcase our market insight, knowledge,
              experience and most importantly, how we can help you.
            </p>

            <h3>Book Free 15mins Consultation Call.</h3>
            <button onClick={handleClick}>Book Now</button>

            <div className={style.contact_info}>
              <p>Call us on: +44 (0)330 024 5982</p>
              <p>Email: info@aliveassets.co.uk</p>
            </div>
          </div>

          <div className={style.right_card}>
            <h2>Alternatively, you can fill the form below</h2>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
              <label className={style.label}>Name</label>
              <input className={style.input} type="text" name="user_name" />
              <label className={style.label}>Email</label>
              <input className={style.input} type="email" name="user_email" />
              <label className={style.label}>Message</label>
              <textarea className={style.textarea} name="message" />
              <input className={style.submit} type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

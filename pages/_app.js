"use client";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);
    })();
  }, []);

  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

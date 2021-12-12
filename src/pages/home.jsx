import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import logo from "../assets/logo.jpg";
import WorksAndPrices from "../components/WorksAndPrices";
import s from "./home.module.scss";

export default function Home() {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    if (!logoRef.current) return;
    const tween = gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.75 },
      { opacity: 1, duration: 2, scale: 1 }
    );
    return () => {
      tween.progress(1).kill();
    };
  }, [logoRef.current]);
  return (
    <>
      <img ref={logoRef} src={logo} className={s.logo} />
      <WorksAndPrices />
    </>
  );
}

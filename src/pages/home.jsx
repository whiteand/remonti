import React, { useLayoutEffect, useRef } from "react";
import logo from "../assets/logo.jpg";
import WorksAndPrices from "../components/WorksAndPrices";
import Contacts from "../components/Contacts";
import s from "./home.module.scss";

export default function Home() {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    if (!logoRef.current) return;
    logoRef.current.classList.add(s.visible);
    return () => {
      tween.progress(1).kill();
    };
  }, [logoRef.current]);
  return (
    <>
      <img ref={logoRef} src={logo} className={s.logo} />
      <div className={s.mobileContacts}>
        <Contacts />
      </div>
      <WorksAndPrices />
    </>
  );
}

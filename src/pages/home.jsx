import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.jpg";
import Contacts from "../components/Contacts";
import WorksAndPrices from "../components/WorksAndPrices";
import s from "./home.module.scss";

export default function Home() {
  const logoRef = useRef(null);

  useEffect(() => {
    if (!logoRef.current) return;
    logoRef.current.classList.add(s.visible);
    return () => {
      logoRef.current.classList.remove(s.visible);
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

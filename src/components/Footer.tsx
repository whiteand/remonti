import React from "react";
import s from "./Footer.module.scss";

export default function Footer(): JSX.Element {
  return (
    <footer className={s.footer}>
      Сайт сделал <a href="https://whiteand.github.io/personal">whiteand</a>
    </footer>
  );
}

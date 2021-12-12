import React from "react";
import s from "./Contacts.module.scss";

export default function Contacts(): JSX.Element {
  return (
    <div className={s.wrapper}>
      <h2>Наши Контакты:</h2>
      <div className={s.linksWrapper}>
        <a href="https://www.instagram.com/remonti_horishni_plavni">
          <img
            src="https://cdn.mfidie.com/wp-content/uploads/2020/10/made-in-kings-heath-instagram-facebook-female-photography-png-favpng-rPdTRBWci5EUw6JEQNWffZ8Ca.jpg"
            width="30"
          />
          Instagram
        </a>
        <a href="https://t.me/remonti_horishni_plavni">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png"
            width="30"
          ></img>
          Telegram
        </a>
        <a href="tel:0637383333">
          <img
            src="data:image/png;base64,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"
            width="30"
          ></img>
          063 738 33 33
        </a>
      </div>
    </div>
  );
}

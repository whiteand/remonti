import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import workAndPrice from "./work-and-price.json";
import s from "./WorksAndPrices.module.scss";

function Unit({ unit }: { unit: string }): JSX.Element {
  if (unit === "м2") {
    return (
      <>
        м<sup>2</sup>
      </>
    );
  }
  return <>{unit}</>;
}

function Price({ price }: { price: string }): JSX.Element {
  if (/^\d+-\d+$/.test(price)) {
    return <>{price.split("-").join(" - ")}</>;
  }
  return <>{price}</>;
}

export default function WorksAndPrices(): JSX.Element {
  useEffect(() => {
    const elements: Element[] = [];
    elements.push(...document.querySelectorAll(`.${s.horizontalLine}`));
    elements.push(...document.querySelectorAll(`.${s.row}`));
    elements.push(...document.querySelectorAll(`.${s.typeHeader}`));
    const triggers: { kill(): void }[] = [];
    for (let i = 0; i < elements.length; i++) {
      triggers.push(
        ScrollTrigger.create({
          trigger: elements[i],
          start: "top 99%",
          toggleClass: s.visible,
          once: true,
          fastScrollEnd: true,
        })
      );
    }
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={s.wrapper}>
      {workAndPrice.map((record, ind, records) => (
        <React.Fragment key={record.description}>
          {ind > 0 && records[ind - 1].type === record.type && (
            <div className={s.horizontalLine} />
          )}
          {(ind === 0 || records[ind - 1].type !== record.type) && (
            <h2 className={s.typeHeader}>{record.type}</h2>
          )}
          <div className={s.row}>
            <div className={s.description}>{record.description}</div>
            <div className={s.unit}>
              <Unit unit={record.unit} />
            </div>
            <div className={s.price}>
              <Price price={record.price} />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

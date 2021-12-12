import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { auditTime, fromEvent, map } from "rxjs";
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
  const [search, setSearch] = useState("");

  useEffect(() => {
    const elements: Element[] = [];
    elements.push(...document.querySelectorAll(`.${s.horizontalLine}`));
    elements.push(...document.querySelectorAll(`.${s.row}`));
    elements.push(...document.querySelectorAll(`.${s.typeHeader}`));
    const triggers: ScrollTrigger[] = [];
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
  }, [search]);

  const records = useMemo(() => {
    if (!search.trim()) return workAndPrice;
    return workAndPrice.filter((record) =>
      record.description.trim().toLowerCase().includes(search.toLowerCase())
    );
  }, [search, workAndPrice]);

  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!searchRef.current) return;
    const sub = fromEvent<InputEvent>(searchRef.current, "input")
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        auditTime(500)
      )
      .subscribe((search) => {
        setSearch(search);
      });
    return () => {
      sub.unsubscribe();
    };
  }, [searchRef.current]);

  return (
    <div className={s.wrapper}>
      <h2>Наши Услуги</h2>
      <input
        type="text"
        className={s.search}
        placeholder="Напр: демонтаж ванны..."
        ref={searchRef}
      />
      {records.map((record, ind) => (
        <React.Fragment key={record.description}>
          {ind > 0 && records[ind - 1].type === record.type && (
            <div className={s.horizontalLine} />
          )}
          {(ind === 0 || records[ind - 1].type !== record.type) && (
            <h3 className={s.typeHeader}>{record.type}</h3>
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

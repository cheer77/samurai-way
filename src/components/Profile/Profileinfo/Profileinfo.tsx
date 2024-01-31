import React from "react";
import s from "./Profileinfo.module.scss";

export const Profileinfo = () => {
  return (
    <>
      <div className={s.bg}>
        <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" />
      </div>
      <div className={s.info}>
        <div className={s.info__main}>
          <img
            className={s.info__img}
            src="https://storage.prompt-hunt.workers.dev/clflygqlk000qle08h8l5kgp9_1"
            alt=""
          />

          <div className={s.info__box}>
            <p>Alex.C</p>
            <p>Date of birth: 9 June</p>
            <p>City: Offenburg</p>
            <p>Education: NTU 'KHPI'</p>
            <p>WebSite: google.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

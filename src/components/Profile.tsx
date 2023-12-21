import React from "react";
import s from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.content__bg}>
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

        <div className={s.post}>
          <h2>My post</h2>
          <div className={s.post__new}>
            <input type="text" placeholder="add new post" />
          </div>

          <div className={s.post__others}>
            <div className={s.post__item}>Post 1</div>
            <div className={s.post__item}>Post 2</div>
            <div className={s.post__item}>Post 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

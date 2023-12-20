import React from "react";
import s from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <a href="#" className={s.item}>
            Profile
          </a>
        </li>
        <li>
          <a href="#" className={s.item}>
            Messages
          </a>
        </li>
        <li>
          <a href="#" className={s.item}>
            News
          </a>
        </li>
        <li>
          <a href="#" className={s.item}>
            Music
          </a>
        </li>
        <li>
          <a href="#" className={s.item}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

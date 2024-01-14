import React from "react";
import s from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <a href="#">News</a>
        </li>
        <li className={s.item}>
          <a href="#">Music</a>
        </li>
        <li className={s.item}>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

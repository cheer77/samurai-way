import React from "react";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.header__img}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png"
        alt="logo"
      />
    </header>
  );
};

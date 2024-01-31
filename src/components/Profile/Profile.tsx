import React from "react";
import s from "./Profile.module.scss";
import { MyPosts } from "./MyPosts/MyPosts";
import { Profileinfo } from "./Profileinfo/Profileinfo";

export const Profile = () => {
  return (
    <div className={s.content}>
      <Profileinfo />
      <MyPosts />
    </div>
  );
};

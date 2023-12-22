import React from "react";
import s from "./Post.module.scss";

type postTypeProps = {
  textOfPost: string;
};

export const Post = (props: postTypeProps) => {
  return (
    <div className={s.item}>
      <div className={s.avatar}>
        <img src="" alt="avatar" />
      </div>

      <p>{props.textOfPost}</p>
    </div>
  );
};

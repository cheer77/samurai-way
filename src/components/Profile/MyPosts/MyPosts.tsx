import React from "react";
import s from "./MyPosts.module.scss";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={s.post}>
      <h2>My post</h2>
      <div className={s.post__new}>
        <input type="text" placeholder="add new post" />
      </div>

      <div className={s.post__others}>
        <Post textOfPost={"Post 1"} />
        <Post textOfPost={"Post 2"} />
        <Post textOfPost={"Post 3"} />
      </div>
    </div>
  );
};

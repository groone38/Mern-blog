import React from "react";
import Post from "../Post/Post";
import HeaderPosts from "./../UI/HeaderPosts/HeaderPosts";

const Posts = () => {
  return (
    <div>
      <HeaderPosts />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;

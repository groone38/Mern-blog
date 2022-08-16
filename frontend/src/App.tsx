import React, { useEffect } from "react";
import ModalAuth from "./conmponents/Modal/ModalAuth/ModalAuth";
import ModalRegistr from "./conmponents/Modal/ModalRegistr/ModalRegistr";
import Header from "./conmponents/UI/Header/Header";
import classes from "./App.module.scss";
import HeaderPosts from "./conmponents/UI/HeaderPosts/HeaderPosts";
import Post from "./conmponents/Post/Post";
import About from "./conmponents/About/About";
import { Route, Routes, useNavigate } from "react-router-dom";
import Posts from "./conmponents/Posts/Posts";
import { useAppDispatch, useAppSelector } from './hooks';
import { getMy } from "./redux/action/authAction/authAction";
import CreatePost from './conmponents/CreatePost/CreatePost';

export const App = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.auth)
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getMy())
    if(state.token) {
      navigate('/', { replace: true })
    }
  }, [state.token])
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        <Routes>
          <Route path="/register" element={<ModalRegistr />} />
          <Route path="/login" element={<ModalAuth />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </div>
    </>
  );
};

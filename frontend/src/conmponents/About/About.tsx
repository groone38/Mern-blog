import React, { useState } from "react";
import classes from "./About.module.scss";
import test from "../../image/test.png";
import Post from "../Post/Post";
import { useAppSelector } from "../../hooks";
import AboutUser from "./AboutUser";

const About = () => {
  const [btnActive, setBtnActive] = useState(true);

  const { user } = useAppSelector(state => state.auth)

  return (
    <div className={classes.about}>
      <div className={classes.about__avatar}>
        <img src={`http://localhost:5000/${user.image}`} alt="avatar" />
      </div>
      <div className={classes.about__title}>
        <h2>{user.username}</h2>
      </div>
      <div className={classes.about__category}>
        <button
          className={
            classes.about__btn + " " + (!btnActive && classes.about__btn_active)
          }
          onClick={() => setBtnActive(false)}
        >
          Посты
        </button>
        <button
          className={
            classes.about__btn + " " + (btnActive && classes.about__btn_active)
          }
          onClick={() => setBtnActive(true)}
        >
          О себе
        </button>
      </div>
      {btnActive ? (
        <AboutUser />
      ): (
        <Post />
      )}
    </div>
  );
};

export default About;

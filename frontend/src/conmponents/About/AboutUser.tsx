import React from "react";
import { useAppSelector } from "../../hooks";
import classes from "./About.module.scss";

const AboutUser = () => {
    
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={classes.about__my}>
      <div className={classes.about__info}>
        <h2>про меня</h2>
        <p>{user.about}</p>
      </div>
      <div className={classes.about__info}>
        <h2>город в котором я живу</h2>
        <p>{user.city}</p>
      </div>
      <div className={classes.about__info}>
        <h2>известен тем, что…</h2>
        <p>{user.famous}</p>
      </div>
    </div>
  );
};

export default AboutUser;

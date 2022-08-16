import React from "react";
import classes from "./Post.module.scss";
import test from "../../image/test.png";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const Post = () => {
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <img src={test} alt="avatar" />
        <div className={classes.post__header__name}>
          <h3>Еврейский музей и центр толерантности</h3>
          <span>2 августа 2022, 21:16</span>
        </div>
      </div>
      <div className={classes.post__block}>
        <div className={classes.post__title}>
          <h2>
            Внеклассные чтения: Дарья Блохина читает «1Q84» Харуки Мураками
          </h2>
        </div>
        <p>
          В понедельник, 8 августа, на летней веранде Еврейского музея и центра
          толерантности актриса кино и озвучивания Дарья Блохина в рамках
          очередных «Внеклассных чтений» прочтет отрывок из романа «1Q84»
          («Тысяча невестьсот восемьдесят четыре») классика современной японской
          прозы Харуки Мураками. Книга о поиске психологической опоры в мире
          размытых ориентиров знакомит читателя с двумя героями:
          женщиной-инструктором фитнес-клуба Аомамэ и учителем математики Тэнго.
          Общая фабула произведения строится на темах веры, религии, любви,
          потери себя и духовной пропасти между поколениями отцов и детей.
        </p>
        <img src={test} alt="pictur" />
        <hr />
        <div className={classes.post__footer}>
          <FaHeart />
          <p>0</p>
          <FaHeartBroken />
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

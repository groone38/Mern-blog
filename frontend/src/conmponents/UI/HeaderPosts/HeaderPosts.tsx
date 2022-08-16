import React, { useEffect, useRef, useState } from "react";
import classes from "./HeaderPosts.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const HeaderPosts = () => {
  const [arrow, setArrow] = useState(false);
  const sortRef = useRef(null);

  const handleOutsideClick = (e: any) => {
    if (!e.path.includes(sortRef.current)) {
      setArrow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={classes.block__btn}>
      <div className={classes.block__btn__create}>
        <Link to={'/createPost'}><button>Создать пост</button></Link>
      </div>
      <div className={classes.block__btn__search}>
        <div
          className={
            classes.block__btn__popularity +
            " " +
            (arrow && classes.block__btn_green)
          }
          onClick={() => setArrow(!arrow)}
        >
          <button ref={sortRef}>По популярности</button>
          <IoIosArrowDown
            className={classes.svg + " " + (arrow && classes.svg_active)}
          />
          <div
            className={
              classes.block__btn__categori +
              " " +
              (arrow && classes.block__btn__categori_open)
            }
          >
            <span>За неделю</span>
            <span>За месяц</span>
            <span>За год</span>
            <span>За все время</span>
          </div>
        </div>
        <button className={classes.block__btn_green}>По дате</button>
      </div>
    </div>
  );
};

export default HeaderPosts;

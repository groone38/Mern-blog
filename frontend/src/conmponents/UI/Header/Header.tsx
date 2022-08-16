import React from "react";
import classes from "./Header.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { useAppDispatch } from "./../../../hooks";
import { AuthActionTypes } from "../../../redux/action/actionTypes";

const Header = () => {
  const state = useAppSelector((state) => state.auth);
  const dispacth = useAppDispatch();
  const outHandler = () => {
    dispacth({ type: AuthActionTypes.LOGOUT });
    window.localStorage.removeItem("token");
  };
  
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <AiOutlineMenu />
        <h1>SNOB</h1>
      </div>
      <div className={classes.header__nav}>
        <Search />
        <button className={classes.header__btn}>Создать пост</button>
        <div className={classes.header__user}>
          {state.token && (
            <Link to={"/about"}>
              <img
                src={`http://localhost:5000/${state.user.image}`}
                alt="avatar"
              />
            </Link>
          )}
          <Link to={"/login"}>
            <button
              onClick={outHandler}
              className={classes.header__btn + " " + classes.headder__btn_none}
            >
              {state.token ? "Выйти" : "Войти"}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

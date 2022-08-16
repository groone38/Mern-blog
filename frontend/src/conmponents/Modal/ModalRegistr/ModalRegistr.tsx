import React, { useState } from "react";
import classes from "./ModalRegistr.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./../../../hooks";
import { registrUser } from "../../../redux/action/authAction/authAction";

const ModalRegistr = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    company: "",
    number: "",
    about: "",
    city: "",
    famous: "",
  });

  let file = "";
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.auth);

  const valueChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const imgChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    file = e.target.files[0];
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let data = new FormData();
    for (let i = 0; i <= e.target.length - 2; i++) {
      if (e.target[i].name == "image") {
        data.append(`${e.target[i].name}`, e.target[i].files[0]);
      } else {
        data.append(`${e.target[i].name}`, e.target[i].value);
      }
    }
    try {
      dispatch(registrUser(data));
      setValue({
        username: "",
        password: "",
        number: "",
        company: "",
        about: "",
        city: "",
        famous: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.auth}>
        <div className={classes.auth__title}>
          <h1>SNOB</h1>
        </div>
        <form className={classes.auth__input} onSubmit={onSubmitHandler}>
          <label htmlFor="username">Имя</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={value.username}
            onChange={valueChange}
          />
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            value={value.password}
            onChange={valueChange}
          />
          <label htmlFor="number">Телефон</label>
          <input
            type="text"
            id="number"
            name="number"
            autoComplete="off"
            value={value.number}
            onChange={valueChange}
          />
          <label htmlFor="company">Компания</label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="off"
            value={value.company}
            onChange={valueChange}
          />
          <label htmlFor="company">Город</label>
          <input
            type="text"
            id="city"
            name="city"
            autoComplete="off"
            value={value.city}
            onChange={valueChange}
          />
          <label htmlFor="about">Обо мне</label>
          <textarea
            id="about"
            name="about"
            autoComplete="off"
            value={value.about}
            onChange={valueChange}
          />
          <label htmlFor="about">Чем известен</label>
          <textarea
            id="famous"
            name="famous"
            autoComplete="off"
            value={value.famous}
            onChange={valueChange}
          />
          <input type="file" name="image" id="image" onChange={imgChange} />
          <input type="submit" value="Регистрация" className={classes.btn} />
        </form>
        <div className={classes.auth__btn}>
          <Link to={"/login"}>
            <button className={classes.btn_none + " " + classes.btn}>
              Войти в аккаунт
            </button>
          </Link>
        </div>
        <div>
          <p style={{ color: "#128076", textAlign: "center" }}>
            {state.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalRegistr;

import React, { useState } from "react";
import classes from "./CreatePost.module.scss";

const CreatePost = () => {
  const [value, setValue] = useState({
    title: "",
    text: "",
  });
  let file = "";

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

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="title">
        <b>Заголовок поста:</b>
      </label>
      <input
        type="text"
        id="title"
        name="title"
        autoComplete="off"
        value={value.title}
        onChange={valueChange}
      />
      <label htmlFor="text">
        <b>Текст поста:</b>
      </label>
      <textarea
        id="text"
        name="text"
        autoComplete="off"
        value={value.text}
        onChange={valueChange}
      />
      <input type="file" name="image" id="image" onChange={imgChange}/>
      <input type="submit" value="Создать"/>
    </form>
  );
};

export default CreatePost;

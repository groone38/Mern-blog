import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './ModalAuth.module.scss'
import { useAppDispatch, useAppSelector } from './../../../hooks';
import { authUser } from './../../../redux/action/authAction/authAction';

const ModalAuth = () => {
  const [value, setValue] = useState({})
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.auth)
  const valueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const onSubmitHandler = async () => {
    await dispatch(authUser(value))
    
  }

  return (
    <div className={classes.wrapper}>
        <div className={classes.auth}>
            <div className={classes.auth__title}>
                <h1>SNOB</h1>
            </div>
            <div className={classes.auth__input}>
              <label htmlFor="username">Логин</label>
              <input type="text" id='username' name='username' autoComplete='off' onChange={valueChange}/>
              <label htmlFor="password">Пароль</label>
              <input type="password" id='password' name='password' autoComplete='off' onChange={valueChange}/>
            </div>
            <div className={classes.auth__btn}>
              <button className={classes.btn} onClick={onSubmitHandler}>Войти</button>
              <Link to={'/register'}><button className={classes.btn_none + ' ' + classes.btn}>Зарегистрироваться</button></Link>
            </div>
            <div>
              <p style={{color: '#128076', textAlign: 'center'}}>{state.status}</p>
            </div>
        </div>
    </div>
  )
}

export default ModalAuth
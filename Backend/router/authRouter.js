import Router from "express";
import authControllers from "../Controllers/authControllers.js";
import { check } from 'express-validator';
import { checkAuth } from '../utils/checkAuth.js';
import file from '../utils/file.js'

const routerAuth = new Router()
// const fileUtils = require('../utils/file')
// file.single('image'),
// Register
routerAuth.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль не может быть меньше 10 символов").isLength({min: 2, max: 10}),
],  authControllers.registration)

// Login
routerAuth.post('/login', authControllers.login)

//Get
routerAuth.get('/user', checkAuth, authControllers.getUser)
// routerAuth.get('/user/:id', authControllers.getUser)

export default routerAuth
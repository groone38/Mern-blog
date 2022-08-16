import Router from "express";
import authControllers from "../Controllers/authControllers.js";
import { check } from 'express-validator';
import { checkAuth } from '../utils/checkAuth.js';
import file from '../utils/file.js'
import postControllers from "../Controllers/postControllers.js";

const routerPost = new Router()
// Create post
routerPost.post('/', checkAuth, postControllers.createPost)

export default routerPost
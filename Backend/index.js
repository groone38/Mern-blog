import express from "express";
import mongoose from "mongoose";
import routerAuth from "./router/authRouter.js";
import routerPost from "./router/postRoute.js";
import cors from 'cors'
import fileUpload from 'express-fileupload'

const app = express();

const PORT = process.env.PORT || 5000;
const DB_URL = "mongodb+srv://groone38:123@cluster0.36qcftn.mongodb.net/mern?retryWrites=true&w=majority";

// Middlewear 
app.use(express.json());
app.use(cors())
app.use(fileUpload())
app.use(express.static('uploads'))

// Routes
app.use('/auth', routerAuth);
app.use('/post', routerPost);

async function startServer() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`Server started in PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

startServer()
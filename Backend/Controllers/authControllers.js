import User from "../models/User.js";
import Role from "../models/Role.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import secret from "../config.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  // Registr
  async registration(req, res) {
    const { username, password, company, number, about, city, famous } = req.body;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Ошибка при регистрации",
          errors,
        });
      }

      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({
          message: "Такой пользователь уже зарегестрирован",
        });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });

      if (req.files) {
        let fileName = Date.now().toString() + req.files.image.name;
        const __dirname = dirname(fileURLToPath(import.meta.url));
        req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));
        const user = new User({
          username,
          password: hashPassword,
          roles: [userRole.value],
          company,
          number,
          about,
          city,
          famous,
          image: fileName,
        });
        await user.save();
        const token = generateAccessToken(user._id, user.roles);

        return res.json({
          user,
          token,
          message: "Пользователь был зарегестрирован",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Ошибка при создании пользователя",
      });
    }
  }
  // Login
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({
          message: "Пользователь с таким именем не найден",
        });
      }
      const validationPassword = bcrypt.compareSync(password, user.password);
      if (!validationPassword) {
        return res.status(400).json({
          message: "Пароль не верный",
        });
      }
      const token = generateAccessToken(user._id, user.roles);
      return res.json({
        token: token,
        user: user,
        message: "Вы вошли в систему",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Ошибка про входе",
      });
    }
  }

  async getUsers(req, res) {
    try {
      // const userRole = new Role()
      // const adminRole = new Role({value: "ADMIN"})

      // await userRole.save()
      // await adminRole.save()
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  }
  // Get User
  async getUser(req, res) {
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(400).json({
          message: "Пользователь с таким именем не найден",
        });
      }
      const token = generateAccessToken(user._id, user.roles);
      res.json({
        user,
        token,
      });
    } catch (error) {
      res.json({
        message: "Нет доступа",
      });
    }
  }
}

export default new AuthController();
import jwt from "jsonwebtoken";
import secret from "../config.js";

export const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, secret);
      req.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Нет доступа",
      });
    }
  } else {
    return res.status(400).json({
      message: "Нет доступа",
    });
  }
};

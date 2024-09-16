import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Texme" })
    .then((data) => {
      console.log(`Connected to DB: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

export const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return res.status(code).cookie("texme-token", token, cookieOptions).json({
    success: true,
    message,
    user,
  });
};

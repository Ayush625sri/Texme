import bcrypt from "bcryptjs";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import {ErrorHandler } from '../utils/utility.js'


//create a new user and save it to database and cookie
export const newUser = async (req, res) => {
  try {

    const {name, username, password, bio} = req.body;
    const avatar = {
      public_id: "al;skdj",
      url: "alskd",
    };
    console.log(req.body)

    const user  = await User.create({
      name,
      username ,
      bio,
      password,
      avatar,
    });

    sendToken(res,user, 201, "User Created")

  } catch (error) {
    res.status(500).json({
        message: error.message
    })
    console.log(error);
  }
};

export const login = TryCatch(async(req, res, next) => {
    const {username, password}  = req.body;
    const user = await User.findOne({username}).select("+password")

    if(!user) return next(new ErrorHandler("Invalid Username",404))

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) return next(new ErrorHandler("Invalid Credentials", 404))

    sendToken(res,user,200, `Welcome Back ${user.username}`)
  
});


export const getMyProfile = async(req,res) =>{
  res.status(200).json({
    message:"working fine"
  })
}

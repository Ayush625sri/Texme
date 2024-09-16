import express from 'express'
import { getMyProfile, login, newUser } from '../controllers/user.js';
import { singleAvatar } from '../middlewares/multer.js';
import { isAuthenticated } from '../middlewares/auth.js';

const app  = express.Router()



app.post("/new",singleAvatar, newUser);
app.post("/login", login);

//User must be logged in 
//user Middleware

app.get("/me",isAuthenticated, getMyProfile)

export default app 
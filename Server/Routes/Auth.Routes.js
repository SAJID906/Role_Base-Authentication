import express from "express";
import { Login, Logout, SignUp } from "../Controller/Auth.Controller.js";
const AuthRouter=express.Router()
AuthRouter.post('/SignUp',SignUp)
AuthRouter.post('/Login',Login)
AuthRouter.post('/Logout',Logout)
export default AuthRouter
import express from "express";
import { deleteUser, GetUser } from "../Controller/admin.controller.js";
import { IsAdmin } from "../middleware/varifyToken.js";
const AdminRouter=express.Router()
AdminRouter.get('/admin',IsAdmin, GetUser);
AdminRouter.post('/delete/:id',IsAdmin,deleteUser)
export default AdminRouter
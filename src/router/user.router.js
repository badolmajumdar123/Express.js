import { Router } from "express";
import { userRegister,userGet,userUpdate,userDelete } from "../controller/user.controller.js";


export const userRouter = Router();

userRouter.post("/register",userRegister);
userRouter.get("/get",userGet);
userRouter.put("/update",userUpdate);
userRouter.delete("/delete",userDelete)
import { Router } from "express";
import { userRegister,userGet,userUpdate,userDelete,userLogin,currentUser,userLogout} from "../controller/user.controller.js";


export const userRouter = Router();

userRouter.post("/register",userRegister);
userRouter.get("/get/:name",userGet);
userRouter.put("/update/:name",userUpdate);
userRouter.delete("/delete/:name",userDelete);
userRouter.post("/login",userLogin);
userRouter.get("/current",currentUser);
userRouter.get("/logout",userLogout)
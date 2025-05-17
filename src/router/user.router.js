import { Router } from "express";
import { userRegister,userGet,userUpdate,userDelete,userLogin,currentUser,userLogout} from "../controller/user.controller.js";
import { userMiddlewere } from "../middleware/user.middlewere.js";

export const userRouter = Router();

userRouter.post("/register",userRegister);
userRouter.post("/login",userLogin);
userRouter.get("/get/:name",userMiddlewere,userGet);
userRouter.put("/update/:name",userMiddlewere,userUpdate);
userRouter.delete("/delete/:name",userMiddlewere,userDelete);
userRouter.get("/current",userMiddlewere,currentUser);
userRouter.get("/logout",userMiddlewere,userLogout);
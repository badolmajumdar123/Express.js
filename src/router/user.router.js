import { Router } from "express";
import { userRegister,userGet,userUpdate,userDelete,userLogin,currentUser,userLogout} from "../controller/user.controller.js";
import { userMiddlewere } from "../middleware/user.middlewere.js";

export const userRouter = Router();

userRouter.post("/register",userRegister);
userRouter.post("/login",userLogin);
userRouter.get("/current",userMiddlewere,currentUser);
userRouter.get("/logout",userMiddlewere,userLogout);
userRouter.get("/get/:name",userGet);
userRouter.put("/update/:name",userUpdate);
userRouter.delete("/delete/:name",userDelete);

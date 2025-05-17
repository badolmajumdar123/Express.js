import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./router/user.router.js";
import { DatabaseConfig } from "./config/mongoose.config.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT || 5000


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/user",userRouter);

DatabaseConfig()






app.listen(PORT, () => {
console.log(`SERVER IS RUN ${PORT}`);
});


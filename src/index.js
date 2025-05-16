import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./router/user.router.js";

dotenv.config();
const PORT = process.env.PORT || 5000


const app = express();

app.use(express.json());
app.use("/user",userRouter);







app.listen(PORT, () => {
console.log(`SERVER IS RUN ${PORT}`);
});


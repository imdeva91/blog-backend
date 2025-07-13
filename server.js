import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js ";
import userRouter from "./routes/user.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8010;

app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  connectDb();
  console.log("server run on port", PORT);
});

import express from "express";
import morgan from "morgan";
export const app = express();
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

// MIN 1:57:00 https://youtu.be/NmkY4JgS21A?si=y6_2S0DW_diZA2jF

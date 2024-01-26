import express from "express";
import morgan from "morgan";
export const app = express();
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api", authRoutes);

// MIN 1:17:00 https://youtu.be/NmkY4JgS21A?si=y6_2S0DW_diZA2jF

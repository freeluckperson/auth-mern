import express from "express";
import morgan from "morgan";
export const app = express();
import authRoutes from "./routes/auth.routes.js";

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api", authRoutes);

// MIN 39 https://youtu.be/NmkY4JgS21A?si=y6_2S0DW_diZA2jF

import mongoose from "mongoose";
import { DB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    mongoose.connect(DB_URL);
    console.log("→ DB connected");
  } catch (error) {
    console.log(error);
  }
};

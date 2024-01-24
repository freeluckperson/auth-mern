import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://pomodoro:1one2two@auth.nku4meh.mongodb.net/"
    );
    console.log("→ DB connected");
  } catch (error) {
    console.log(error);
  }
};

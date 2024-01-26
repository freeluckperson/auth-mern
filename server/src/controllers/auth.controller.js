import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  try {
    const { email, password, userName } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: passwordHash, userName });
    await newUser.save();

    jwt.sign(
      { id: newUser._id },
      TOKEN_SECRET,
      { expiresIn: "1h" },
      (error, token) => {
        if (error) console.log(error);
        res.status(200).cookie("token", token).json(newUser);
      }
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFounf = await User.findOne({ email });
    if (!userFounf) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, userFounf.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    jwt.sign(
      { id: userFounf._id },
      TOKEN_SECRET,
      { expiresIn: "1h" },
      (error, token) => {
        if (error) console.log(error);
        res.status(200).cookie("token", token).json(userFounf);
      }
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  return res.status(200).json(userFound);
};

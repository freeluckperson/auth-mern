import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  try {
    const { email, password, userName } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json(["Email already exist"]);

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
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    jwt.sign(
      { id: userFound._id },
      TOKEN_SECRET,
      { expiresIn: "1h" },
      (error, token) => {
        if (error) console.log(error);
        res.status(200).cookie("token", token).json(userFound);
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
  //Controller para ver el usuario logeado
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  return res.status(200).json(userFound);
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(400).json({ message: "Without authorization" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(400).json({ message: "Without authorization" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(400).json({ message: "User not exist" });
    return res.status(201).json(userFound);
  });
};

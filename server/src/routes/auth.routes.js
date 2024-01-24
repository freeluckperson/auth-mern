import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", login);

router.post("/logout", logout);

router.post("/register", register);

export default router;

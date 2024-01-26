import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/login", login);

router.post("/logout", logout);

router.post("/register", register);

//a cada ruta que quiera proteger debo colocar authRequired
router.get("/profile", authRequired, profile);

export default router;

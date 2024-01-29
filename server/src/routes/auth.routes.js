import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";


const router = Router();

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.post("/register", validateSchema(registerSchema), register);

//a cada ruta que quiera proteger debo colocar authRequired
router.get("/profile", authRequired, profile);

export default router;

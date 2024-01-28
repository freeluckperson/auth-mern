import { Router } from "express";
import { getByIdOrAll, createTask, taskDeleted, reBuild } from "../controllers/task.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/tasks", authRequired, getByIdOrAll);

router.post("/tasks", authRequired, createTask);

router.put("/tasks/:taskId", authRequired, reBuild);

router.delete("/tasks/:taskId", authRequired, taskDeleted);

export default router;

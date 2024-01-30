import { Router } from "express";
import { getByIdOrAll, createTask, taskDeleted, reBuild } from "../controllers/task.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";


const router = Router();

router.get("/tasks", authRequired, getByIdOrAll);

router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTask);

router.put("/tasks/:taskId", authRequired, validateSchema(createTaskSchema), reBuild);

router.delete("/tasks/:taskId", authRequired, taskDeleted);

export default router;

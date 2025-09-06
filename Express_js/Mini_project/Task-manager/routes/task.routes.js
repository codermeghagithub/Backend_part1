
import { Router } from "express";
import { authMiddleware } from "../Middleware/auth.middleware.js";
import { getAllTask,createTask } from "../controllers/task.controller.js";
const router = Router();

router.get("/", authMiddleware, getAllTask);

router.post("/", authMiddleware, createTask);

router.put("/:id", authMiddleware, (req, res) => {});
router.delete("/:id", authMiddleware, (req, res) => {});

export default router;

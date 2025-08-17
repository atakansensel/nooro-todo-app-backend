import { Router } from "express";
import { z } from "zod";
import { createTask, deleteTask, listTasks, updateTask,getTask } from "../controllers/tasks.controller";
import { validate } from "../middleware/validate";

const router = Router();

const createSchema = z.object({
  title: z.string().min(1),
  color: z.enum(["red", "blue", "green"]).default("blue"),
});

const updateSchema = z.object({
  title: z.string().min(1).optional(),
  color: z.enum(["red", "blue", "green"]).optional(),
  completed: z.boolean().optional(),
});

router.get("/", listTasks);
router.post("/", createTask);
router.put("/:id", validate(updateSchema), updateTask);
router.delete("/:id", deleteTask);
router.get("/:id", getTask);

export default router;
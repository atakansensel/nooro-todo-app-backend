import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function listTasks(_req: Request, res: Response) {
  const tasks = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
  res.json(tasks);
}

export async function createTask(req: Request, res: Response) {
  const { title, color } = req.body;
  const task = await prisma.task.create({ data: { title, color } });
  res.status(201).json(task);
}

export async function updateTask(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { title, color, completed } = req.body;
  const task = await prisma.task.update({
    where: { id },
    data: { title, color, completed },
  });
  res.json(task);
}

export async function deleteTask(req: Request, res: Response) {
  const id = Number(req.params.id);
  const task = await prisma.task.findUnique({ where: { id } });
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  await prisma.task.delete({ where: { id } });
  res.json({ success: true });
}

export async function getTask(req: Request, res: Response) {
  const id = Number(req.params.id);
  const task = await prisma.task.findUnique({ where: { id } });
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
}
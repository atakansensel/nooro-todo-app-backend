import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks";
import { errorHandler } from "./middleware/error";

const app = express();
app.use(cors({ origin: "http://localhost:3000"}));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/tasks", tasksRouter);
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
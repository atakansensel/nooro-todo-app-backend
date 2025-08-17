import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.task.createMany({
    data: [
      { title: "Buy groceries", color: "green" },
      { title: "Finish test task", color: "blue" },
      { title: "Gym session", color: "red", completed: true },
    ],
  });
}

main().finally(() => prisma.$disconnect());
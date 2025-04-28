"use server";

import { PrismaClient } from "@/prisma/app/generated/prisma/client";
import { TodoFormValues } from "@/schema";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
};
export const createTodoAction = async ({ title, body, completed }: TodoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async ({ id }: { id: string }) => {
  await prisma.todo.delete({ where: { id } });
};

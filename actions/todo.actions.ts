"use server";

import { PrismaClient } from "@/prisma/app/generated/prisma/client";
import { TodoFormValues } from "@/schema";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
};
export const createTodoAction = async ({ title, body }: TodoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
    },
  });
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};

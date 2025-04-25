"use server";

import { PrismaClient } from "@/prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
  return await prisma.todo.findMany();
};
export const createTodoAction = async () => {};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};

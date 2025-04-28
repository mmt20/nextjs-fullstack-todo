import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long" })
    .max(10, { message: "Title must be at most 10 characters long" }),
  body: z.string().max(160, { message: "Short Description must be at most 160 characters long" }).optional(),
  completed: z.boolean().optional(),
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;

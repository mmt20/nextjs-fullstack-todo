import { z } from "zod";

export const todoFormSchema = z.object({
  tittle: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(30, { message: "Title must be at most 30 characters long" }),
  body: z.string().max(160, { message: "Short Description must be at most 160 characters long" }).optional(),
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;

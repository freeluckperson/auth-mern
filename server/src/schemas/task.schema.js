import { z } from "zod";
export const createTaskSchema = z.object({
  title: z.string({ required_error: "Enter a title" }),
  description: z.string({ required_error: "Enter a description" }),
  completed: z.boolean(),
});

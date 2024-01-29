import { z } from "zod";

export const registerSchema = z.object({
  userName: z.string({ required_error: "Username is required" }),

  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "invalid email" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 character" }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "invalid email" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 character" }),
});

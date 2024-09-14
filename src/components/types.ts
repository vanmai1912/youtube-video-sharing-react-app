import { z } from "zod";

// Define the Zod schema for validation
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  first_name: z.string().min(3, "First name must be at least 3 characters"),
  last_name: z.string().min(3, "Last name must be at least 3 characters"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

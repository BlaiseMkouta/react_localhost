import z from "zod";

export const loginSchema = z.object({
  email: z.email("Email est requis"),
  password: z.string().min(8, "minimun characters is 8"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

import z from "zod";

export const registerSchema = z.object({
  first_name: z.string().min(1, "first name is required"),
  last_name: z.string().min(1, "last name is required"),
  email: z.email("invalid email"),
  password: z.string().min(8, "minimun characters is 8"),
  phone_number: z.string().min(9, 'min length is 9')
});


export type RegisterFormData = z.infer<typeof registerSchema>
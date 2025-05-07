import z from 'zod';

export const CreateUserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required")
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
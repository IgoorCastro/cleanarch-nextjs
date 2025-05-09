import z from 'zod';

export const UserSchema = z.object({
    id: z.number().positive().optional(),
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required"),
    createdAt: z.date().optional(),
});

export type User = z.infer<typeof UserSchema>;
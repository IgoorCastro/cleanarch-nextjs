import z from 'zod';

export const ResponseUserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    password: z.string(),
    createdAt: z.date(),
});

export type ResponseUserDto = z.infer<typeof ResponseUserSchema>;
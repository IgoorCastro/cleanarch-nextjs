import z from 'zod';

export const UserAuthenticateScheme = z.object({
    email: z.string().min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
}); 

export type UserAuthenticateDto = z.infer<typeof UserAuthenticateScheme>;
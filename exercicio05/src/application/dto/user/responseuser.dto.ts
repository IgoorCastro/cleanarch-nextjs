import z from 'zod';

export const UserResponseSchema = z.object({
    id: z.number().positive("Id must be positive").optional(),
});

export type UserResponseDto = z.infer<typeof UserResponseSchema>;
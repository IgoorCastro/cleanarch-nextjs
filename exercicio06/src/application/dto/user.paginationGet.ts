import z from 'zod';

export const GetUserPaginationSchema = z.object({
    page: z.number(),
    limit: z.number(),
});

export type GetUserPaginationDto = z.infer<typeof GetUserPaginationSchema>;
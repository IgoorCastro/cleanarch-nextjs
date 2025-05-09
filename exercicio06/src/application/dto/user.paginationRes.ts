import z from 'zod';
import { UserSchema } from './user';

export const ResponseUserPaginationSchema = z.object({
    data: z.array(UserSchema),
    meta: z.object({
        total: z.number(),
        page: z.number(),
        lastPage: z.number(),
    }),
});

export type ResponseUserPaginationDto = z.infer<typeof ResponseUserPaginationSchema>;
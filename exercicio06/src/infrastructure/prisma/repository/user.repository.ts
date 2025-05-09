import { User } from "@/domain/entities/user.entity";
import { IUserRepository, ResPaginationSchema, GetPaginationSchema } from "@/domain/repositories/i.user.repository";
import { prisma } from "../client/prisma.client";

export class UserRepository implements IUserRepository {
    async create(data: User): Promise<User> {
        return prisma.user.create({data: data});
    }

    async getPaginationUsers({page, limit}: GetPaginationSchema): Promise<ResPaginationSchema> {
        // skip para pular os primeiros registro (ex: se page = 2, com limit = 10, ele vai pular os primeiros 10)
        // take define o limite de campos retornado
        const skip = (page - 1) * limit;
        const users = await prisma.user.findMany({
            skip,
            take: limit,
            orderBy: {
                createdAt: 'desc',
            },
        });

        const total = await prisma.user.count(); // util para calcular a ultima pagina
        return { // retornando com 
            data: users,
            meta: {
                total,
                page,
                lastPage: Math.ceil(total / limit),
            }
        }
    }
}
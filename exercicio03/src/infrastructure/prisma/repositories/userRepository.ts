import { User } from "@/domain/entities/user.entity";
import { IUserRepository } from "@/domain/repositories/IUserRepository"; // interface necessaria para o contrato
import { prisma } from "../client/prismaClient";


export class UserRepository implements IUserRepository {
    async create(user: Omit<User, 'id'>): Promise<{id: number}> {
        return await prisma.user.create({
            data: user,
            select: { id: true }
        });
    }

    async findById(id: number): Promise<User | null> {
        return await prisma.user.findUnique({
            where: {id}
        });
    }

    async listAll(): Promise<User[] | null> {
        return await prisma.user.findMany();
    }
}
import { User } from "@/domain/entities/user.entity";
import { IUserRepository } from "@/domain/repositories/IUserRepository"; // interface necessaria para o contrato
import { prisma } from "../client/prismaClient";


export class UserRepository implements IUserRepository {
    async create(user: Omit<User, 'id'>): Promise<User> {
        return await prisma.user.create({
            data: user,
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: {email}
        });
    }

    async listAll(): Promise<User[] | null> {
        return await prisma.user.findMany();
    }
}
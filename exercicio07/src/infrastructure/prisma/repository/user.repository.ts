import { User } from "@/domain/entities/user";
import { CreateUserDto, IUserRepository } from "@/domain/repositories/i.userReposity";
import { prisma } from "../client/prisma-client";



export class UserRepository implements IUserRepository {
    create(data: CreateUserDto): Promise<User> {
        return prisma.user.create({data: data});
    }

    findByEmail(email: string): Promise<User | null> {
        return prisma.user.findUnique({
            where: { email }
        });
    };
}
import { User } from "../entities/user";

export interface CreateUserDto {
    name: string,
    email: string,
    password: string,
}

export interface IUserRepository {
    create(data: CreateUserDto): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
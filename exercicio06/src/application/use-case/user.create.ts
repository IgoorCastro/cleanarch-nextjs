import { IUserRepository } from "@/domain/repositories/i.user.repository";
import { CreateUserDto } from "../dto/user.create";
import { User } from "@/domain/entities/user.entity";

export class CreateUser {
    constructor(private rep: IUserRepository){};

    async execute(data: CreateUserDto): Promise<User> {
        return this.rep.create(data);
    }
}
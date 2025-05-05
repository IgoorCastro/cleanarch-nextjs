import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User } from "@/domain/entities/user.entity";

export class CreateUser {
    constructor(private rep: IUserRepository){}

    async execute(data: User) {
        return this.rep.create(data);
    }
}
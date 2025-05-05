import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { CreateUserDto } from "../dto/user/createuser.dto";

export class CreateUser {
    constructor(private rep: IUserRepository){}

    async execute(data: CreateUserDto) {
        return await this.rep.create(data);
    }
}
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { CreateUserDto } from "../dto/user/createuser.dto";

export class CreateUser {
    constructor(private rep: IUserRepository){}

    async execute(data: CreateUserDto) {
        if(await this.rep.findByEmail(data.email)) throw new Error("Email already in use");
        const user = await this.rep.create(data);
        return {user_id: user.id};
    }
}
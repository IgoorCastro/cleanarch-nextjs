import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User } from "@/domain/entities/user.entity";

export class CreateUser {
    constructor(private rep: IUserRepository){}

    async execute(data: User) {
        if(await this.rep.findByEmail(data.email)) throw new Error("Email already in use");
        const user = await this.rep.create(data);
        return {user_id: user.id};
    }
}
import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { CreateUserDto } from "../dto/user/createuser.dto";
import { UserResponseDto } from "../dto/user/responseuser.dto";

export class CreateUser {
    constructor(private rep: IUserRepository){}

    async execute(data: CreateUserDto): Promise<UserResponseDto> {
        if(await this.rep.findByEmail(data.email)) throw new Error("Email already in use");

        const user = await this.rep.create(data);
        return {id: user.id};
    }
}
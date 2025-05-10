import { CreateUserDto } from "@/application/dto/user-create.dto";
import { ResponseUserDto } from "@/application/dto/user-reponse.dto";
import { IHashService } from "@/domain/repositories/i.hashService";
import { IUserRepository } from "@/domain/repositories/i.userReposity";

export class CreateUser {
    constructor(
        private readonly repo: IUserRepository,
        private readonly bcrypt: IHashService,
    ){};

    async execute(data: CreateUserDto): Promise<ResponseUserDto> {
        if(await this.repo.findByEmail(data.email)) throw new Error("Email already in use");
        data.password = await this.bcrypt.convert(data.password);

        return this.repo.create(data);  
    }
}
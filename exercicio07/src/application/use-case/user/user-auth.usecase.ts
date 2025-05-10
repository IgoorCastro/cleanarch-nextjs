import { UserAuthenticateDto } from "@/application/dto/user-auth.dto";
import { IHashService } from "@/domain/repositories/i.hashService";
import { IJwtService } from "@/domain/repositories/i.jwtService";
import { IUserRepository } from "@/domain/repositories/i.userReposity";

export class UserAuthenticate {
    constructor(
        private readonly userRepo: IUserRepository,
        private readonly jtwServ: IJwtService,
        private readonly bcryptServ: IHashService,
    ) {};

    async execute({email, password}: UserAuthenticateDto): Promise<{ token: string }> {
        const user = await this.userRepo.findByEmail(email);
        if(!user) throw new Error("User not found");

        const validPass = await this.bcryptServ.compare({ hash: user.password, plain: password });
        if(!validPass) throw new Error("Password dont match");

        const token = this.jtwServ.sign({userId: user.id, email: user.email});
        return {token};
    }
}
import { IJwtService, JwtPlayload } from "@/domain/repositories/i.jwtService";
import jwt from 'jsonwebtoken';

export class JwtService implements IJwtService {
        private readonly secret = process.env.JWT_SECRET || "birulabe";
        private readonly expiresTime = '1min';

    sign(payload: JwtPlayload): string {
        return jwt.sign(payload, this.secret, { expiresIn: this.expiresTime }); // retorna um JSON com os dados recebidos
    }
}
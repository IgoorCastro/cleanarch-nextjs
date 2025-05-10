import { CompareParams, IHashService } from '@/domain/repositories/i.hashService';
import bcrypt from 'bcryptjs';

export class BcryptService implements IHashService {
    async compare(params: CompareParams): Promise<boolean> {
        return await bcrypt.compare(params.plain, params.hash);
    }
    async convert(password: string): Promise<string> {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }
}
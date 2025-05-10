export interface JwtPlayload {
    userId: number;
    email: string;
}

export interface IJwtService {
    sign(payload: JwtPlayload): string;
}
import { UserAuthenticateScheme } from "@/application/dto/user-auth.dto";
import { UserAuthenticate } from "@/application/use-case/user/user-auth.usecase";
import { UserRepository } from "@/infrastructure/prisma/repository/user.repository";
import { BcryptService } from "@/infrastructure/services/bcrypt.service";
import { JwtService } from "@/infrastructure/services/jwt.service";

export async function POST(req: Request) {
    try {
        const parse = UserAuthenticateScheme.safeParse(await req.json());
        if (!parse.success) return new Response(JSON.stringify({ success: false, message: "Invalid Data", error: parse.error, status: 400 }), { status: 400 });

        const authenticate = new UserAuthenticate(new UserRepository(), new JwtService(), new BcryptService());

        const token = await authenticate.execute({ email: parse.data.email, password: parse.data.password });
        if (!token) {
            return new Response(JSON.stringify({
                success: false,
                message: "Invalid email or password.",
                error: null,
                status: 401
            }), { status: 401 });
        }

        return new Response(JSON.stringify({ success: true, message: "Authenticated successfully.", data: token }), { status: 200 });
    } catch (err) {
        if (err instanceof Error)
            return new Response(
                JSON.stringify({
                    success: false,
                    message: err.message,
                    status: 500,
                }),
                { status: 500 }
            );
        return new Response(JSON.stringify({ message: "Unexpected error", success: false, error: err }), { status: 500 });
    }
}
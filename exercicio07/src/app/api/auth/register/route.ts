import { CreateUserSchema } from "@/application/dto/user-create.dto";
import { CreateUser } from "@/application/use-case/user/user-create.usecase";
import { UserRepository } from "@/infrastructure/prisma/repository/user.repository";
import { BcryptService } from "@/infrastructure/services/bcrypt.service";

export async function POST(req: Request) {
    try {
        const parse = CreateUserSchema.safeParse(await req.json());
        if (!parse.success) return new Response(JSON.stringify({ success: false, message: "Invalid Data", error: parse.error, status: 400 }), { status: 400 });

        const createUser = new CreateUser(new UserRepository(), new BcryptService());

        const res = await createUser.execute(parse.data);
        return new Response(JSON.stringify({ success: true, res, status: 200 }), { status: 200 });
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
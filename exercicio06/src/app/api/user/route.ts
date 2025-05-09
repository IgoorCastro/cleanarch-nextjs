import { CreateUserSchema } from "@/application/dto/user.create";
import { CreateUser } from "@/application/use-case/user.create";
import { GetUserPagination } from "@/application/use-case/user.pagination";
import { UserRepository } from "@/infrastructure/prisma/repository/user.repository";

export async function POST(req: Request) {
    try {
        const parse = CreateUserSchema.safeParse(await req.json());
        if (!parse.success) return new Response(JSON.stringify({ succes: false, message: "Invalid Data", error: parse.error, status: 400 }), { status: 400 });
        const userRepo = new UserRepository();
        const createUser = new CreateUser(userRepo);

        const res = createUser.execute(parse.data);
        return new Response(JSON.stringify({ succes: true, res, status: 200 }), { status: 200 });
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

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = Number(searchParams.get("page") ?? 1);
        const limit = Number(searchParams.get("limit") ?? 2);

        const userRepo = new UserRepository();
        const createUser = new GetUserPagination(userRepo);

        const res = await createUser.execute(page, limit);
        return new Response(JSON.stringify({ succes: true, res, status: 200 }), { status: 200 });
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
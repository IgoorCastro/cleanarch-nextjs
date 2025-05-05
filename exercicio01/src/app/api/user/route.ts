import { CreateUser } from "@/application/use-cases/createUser";
import { UserRepository } from "@/infrastructure/prisma/repositories/userRepository";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        if (!body.name) return new Response(JSON.stringify({ message: "Invalid Data", success: false }), { status: 400 });
        const repo = new UserRepository(); // repositorio atual para testes
        const createUser = new CreateUser(repo);
        const user = { name: body.name };
        const res = await createUser.execute(user); // caso queria salvar a promise executada
        console.log("Server response: \n", res);
        return new Response(JSON.stringify({ success: true, status: 200 }), { status: 200 });

    } catch (err) {
        console.log("ERR: ", err);
        return new Response(JSON.stringify({ message: "Unexpected error", success: false, error: err }), { status: 500 });
    }
}
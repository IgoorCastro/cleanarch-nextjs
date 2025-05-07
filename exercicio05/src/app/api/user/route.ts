import { CreateUserSchema } from "@/application/dto/user/createuser.dto";
import { CreateUser } from "@/application/use-cases/createuser";
import { UserRepository } from "@/infrastructure/prisma/repositories/userRepository";

export async function POST(req: Request) {
    try {
        const parsed = CreateUserSchema.safeParse(await req.json()); // testar se a requisição atende nosso schema
        if (!parsed.success) return new Response(JSON.stringify({ success: false, message: "Invalid Data", error: parsed.error.flatten() }), { status: 400 });

        const repo = new UserRepository(); // repositorio atual para testes
        const createUser = new CreateUser(repo);

        const res = await createUser.execute(parsed.data); // salvar a promise executada
        return new Response(JSON.stringify({ success: true, status: 200, res }), { status: 200 });
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
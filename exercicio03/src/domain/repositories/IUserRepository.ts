// interface para uso do repositório do usuario
// esse é nosso contrato garantindo todos as funções para quem implementar a interface

import { User } from "../entities/user.entity";

export interface IUserRepository {
    create(user: Omit<User, 'id'>): Promise<{id: number}>; // recebe um usuario 'User' e retorna um Promise de o id cadastrado
    findById(id: number): Promise<User | null>;
    listAll(): Promise<User[] | null>;
    // outras funções para ser usadada no repositorio
}
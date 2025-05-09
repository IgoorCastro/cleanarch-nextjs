import { User } from "../entities/user.entity";

export interface ResPaginationSchema {
    data: User[];
    meta: {
        total: number,
        page: number,
        lastPage: number
    }
}

export interface GetPaginationSchema {
    page: number;
    limit: number;
}

export interface IUserRepository {
    create(data: User): Promise<User>;
    getPaginationUsers(params: GetPaginationSchema): Promise<ResPaginationSchema>;
}
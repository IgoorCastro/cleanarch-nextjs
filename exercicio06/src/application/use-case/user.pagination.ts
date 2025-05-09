import { IUserRepository } from "@/domain/repositories/i.user.repository";
import { ResponseUserPaginationDto } from "../dto/user.paginationRes";

export class GetUserPagination {
    constructor(private rep: IUserRepository){};

    async execute(page: number, limit: number): Promise<ResponseUserPaginationDto> {
        return await this.rep.getPaginationUsers({page, limit});
    }
}
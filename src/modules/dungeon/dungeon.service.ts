import { Injectable } from "@nestjs/common";
import { StartDungeonDto } from "./dto/joinDungeon.dto";
import { User } from "../user/user.entity";

@Injectable()
export class DungeonService {
    async getAllDungeon(user: User): Promise<any> {

    }
    async startDungeon(user: User, startDungeonDto: StartDungeonDto): Promise<any> {
        // Tạo một phiên thám hiểm tàn tích mới
    }
    async updateDungeon(user: User): Promise<any> {
        // Cập nhật trạng thái của phiên thám hiểm tàn tích
    }

    async endDungeon(user: User): Promise<any> {
        // Kết thúc phiên thám hiểm tàn tích
    }
}
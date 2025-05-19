import { Injectable } from "@nestjs/common";

import { User } from "../user/user.entity";
import { StartDungeonDto } from "./dto/startDungeon.dto";
import { Dungeon } from "./dungeon.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

//ERROR CODE: 4XXX
@Injectable()
export class DungeonService {
    constructor(
        @InjectRepository(Dungeon)
        private readonly dungeonRepository: Repository<Dungeon>,
    ) {}
    async createDungeon(user: User): Promise<any> {
        const newDungeon = this.dungeonRepository.create();
        newDungeon.user = user;

        user.dungeon = newDungeon;

        return user;
    }
    async getAllDungeon(user: User): Promise<any> {

    }
    async startDungeon(user: User, startDungeonDto: StartDungeonDto): Promise<any> {
        // Tạo một phiên thám hiểm tàn tích mới

        // Renew phiên
        const dungeon = await this.dungeonRepository.findOne({ where: { user: { id: user.id } } });
        if (!dungeon) {
            return { success: false, message: 'Dungeon not found', errorCode: 4000 };
        }

        

        
    }
    async updateDungeon(user: User): Promise<any> {
        // Cập nhật trạng thái của phiên thám hiểm tàn tích
    }

    async endDungeon(user: User): Promise<any> {
        // Kết thúc phiên thám hiểm tàn tích
    }
}
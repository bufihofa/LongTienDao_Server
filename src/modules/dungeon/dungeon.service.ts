import { Injectable } from "@nestjs/common";

import { User } from "../user/user.entity";
import { StartDungeonDto } from "./dto/startDungeon.dto";
import { Dungeon } from "./dungeon.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DungeonDetails } from "src/common/config/dungeon/dungeonDetails";
import { MonsterDetails } from "src/common/config/monster/monster";
import { Inventory, InventoryItem } from "../inventory/inventory.entity";
import { DungeonType } from "src/common/config/dungeon/dungeonType";

//ERROR CODE: 4XXX
@Injectable()
export class DungeonService {
    constructor(
        @InjectRepository(Dungeon)
        private readonly dungeonRepository: Repository<Dungeon>,
    ) {}
    async createDungeon(user: User): Promise<any> {
        const newDungeon = this.dungeonRepository.create();
        user.dungeon = newDungeon;
    }
    async getAllDungeon(user: User): Promise<any> {
        
       const itemconfig = DungeonDetails[DungeonType.RungUMinh];
       const items = itemconfig.items;
       console.log(items);
       for (const item of items) {
            console.log(item);
            const drop = this.getRandomItem(item);
            console.log(drop);
       }
       
    }
    randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomItem(item: any): InventoryItem {
        let result = new InventoryItem();
        result.type = item.type;
        result.quantity = this.randomInt(item.minQuantity, item.maxQuantity);
        result.quality = item.quality;
        result.data = {};
        for (const key of item.data) {
            result.data[key[0]] = this.randomInt(key[1], key[2]);
        }
        return result;
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
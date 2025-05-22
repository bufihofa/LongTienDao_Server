import { Item } from "../../inventory/items";
import { DungeonType } from "../dungeonType";
import { MonsterType } from "../../monster/monster";

export const DongPhongNhaConfig = {
    id: DungeonType.DongPhongNha,
    name: 'Động Phong Nha',
    image: 'dungeon_dong_phong_nha',
    
    monsters_spawn_rate: 0.5,
    items_drop_rate: 0.5,
    
    monsters: [
        {
            type: MonsterType.Ho,
            level: 0,
            weight: 100,
        },
        {
            type: MonsterType.Soi,
            level: 0,
            weight: 700,
        },
        {
            type: MonsterType.Soi,
            level: 1,
            weight: 50,
        },
        {
            type: MonsterType.Lon,
            level: 0,
            weight: 100,
        },
        {
            type: MonsterType.Tho,
            level: 0,
            weight: 100,
        },
    ],
    items: [
        {
            type: Item.DotPha_CoMocNgungSuong,
            weight: 500,

            minQuantity: 1,
            maxQuantity: 1,

            quality: 1,

            data: [
                ['hp', 400, 600],
                ['thanthuc', 20, 30]
            ]
        }
    ],
    resources: [
        {
            type: 'wood',
            
            minQuantity: 10,
            maxQuantity: 30,
        },
        {
            type: 'stone',
            
            minQuantity: 10,
            maxQuantity: 100,
        },

    ],
}
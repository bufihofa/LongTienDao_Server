import { Item } from "../../inventory/items";
import { MonsterType } from "../../monster/monsterType";
import { DungeonType } from "../dungeonType";

export const RungUMinhConfig = {
    id: DungeonType.RungUMinh,
    name: 'Rừng U Minh',
    image: 'dungeon_rung_u_minh',
    
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
            weight: 100,
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
            type: Item.DotPha_LamDuongThach,
            weight: 500,

            minQuantity: 1,
            maxQuantity: 1,

            quality: 1,

            data: [
                ['hp', 800, 1200],
            ]
        }
    ],
    resources: [
        {
            type: 'wood',
            
            minQuantity: 10,
            maxQuantity: 100,
        },
        {
            type: 'stone',
            
            minQuantity: 10,
            maxQuantity: 30,
        },

    ],
}
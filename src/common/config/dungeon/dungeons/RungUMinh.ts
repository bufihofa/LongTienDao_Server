import { Item } from "../../inventory/items";
import { DungeonType } from "../dungeon";
import { MonsterType } from "../monster";

export const RungUMinhConfig = {
    id: DungeonType.RungUMinh,
    name: 'Rừng U Minh',
    image: 'rung_u_minh',
    
    monsters: [
        {
            type: MonsterType.Ho,
            weight: 500,
        },
        {
            type: MonsterType.Soi,
            weight: 500,
        },
        {
            type: MonsterType.Lon,
            weight: 500,
        },
        {
            type: MonsterType.Tho,
            weight: 500,
        },
    ],
    items: [
        {
            type: Item.DotPha_BichHaiLongLien,
            weight: 500,

            minQuantity: 1,
            maxQuantity: 3,

            minQuality: 0,
            maxQuality: 1,

            data: [
                ['hp', 100, 300],
                ['thanthuc', 1, 3]
            ]
        },
        {
            type: Item.DotPha_LamNgocTuy,
            weight: 500,

            minQuantity: 1,
            maxQuantity: 3,

            minQuality: 0,
            maxQuality: 1,

            data: [
                ['hp', 100, 300],
                ['thanthuc', 1, 3]
            ]
        },
        {
            type: Item.DotPha_LamDuongThach,
            weight: 500,

            minQuantity: 1,
            maxQuantity: 3,

            minQuality: 0,
            maxQuality: 1,

            data: [
                ['hp', 100, 300],
                ['thanthuc', 1, 3]
            ]
        },
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
            maxQuantity: 30,
        },

    ],
}
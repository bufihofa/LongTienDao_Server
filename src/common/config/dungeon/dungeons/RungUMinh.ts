import { Item } from "../../inventory/items";
import { DungeonType } from "../dungeonType";
import { MonsterType } from "../../monster/monster";

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
            maxQuantity: 30,
        },

    ],
}
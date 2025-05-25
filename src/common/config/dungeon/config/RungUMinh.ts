import { Item } from "../../inventory/items";
import { MonsterType } from "../../monster/monsterType";
import { DungeonDetailsConfig } from "../dungeonDetailsConfig";
import { DungeonType } from "../dungeonType";

export const RungUMinhConfig = new DungeonDetailsConfig(
{
    id: DungeonType.RungUMinh,
    name: 'Rừng U Minh',
    image: 'dungeon_rung_u_minh',

    
    monsters_spawn_amount: 5,
    monsters_spawn_rate: 0.9,

    items_drop_amount: 5,
    items_drop_rate: 0.9,

    //////////////////////////////////////////////////////////////
    monsters: [
        {
            type: MonsterType.Ho,
            level: 0,
            weight: 1000,
        },
        {
            type: MonsterType.Soi,
            level: 0,
            weight: 100,
        }
    ],
    //////////////////////////////////////////////////////////////
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
        },
        {
            type: Item.DotPha_LamDuongThach,
            weight: 1000,

            minQuantity: 1,
            maxQuantity: 1,

            quality: 0,

            data: [
                ['hp', 400, 600],
            ]
        },
    ],
    //////////////////////////////////////////////////////////////
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
    ]
});
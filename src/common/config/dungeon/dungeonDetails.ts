import { RungUMinhConfig } from "./dungeons/RungUMinh";
import { DungeonType } from "./dungeonType";

export class DungeonConfig {
    id: DungeonType;
    name: string;
    image: string;
    monsters_spawn_rate: number;
    items_drop_rate: number;
    monsters: any[];
    items: any[];
    resources: any[];

    constructor(data: {
        id: DungeonType;
        name: string;
        image: string;
        monsters_spawn_rate: number;
        items_drop_rate: number;
        monsters: any[];
        items: any[];
        resources: any[];
    }) {
        Object.assign(this, data);
    }

    spawnMonsters(){
        return 1;
    }
}

export const DungeonDetails = {
    [DungeonType.RungUMinh]: RungUMinhConfig,
}
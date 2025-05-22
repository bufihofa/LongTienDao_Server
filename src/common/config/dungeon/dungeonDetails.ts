import { DongPhongNhaConfig } from "./dungeons/DongPhongNha";
import { RungUMinhConfig } from "./dungeons/RungUMinh";
import { DungeonType } from "./dungeonType";



export const DungeonDetails = {
    [DungeonType.RungUMinh]: RungUMinhConfig,
    [DungeonType.DongPhongNha]: DongPhongNhaConfig,
}


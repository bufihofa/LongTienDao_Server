import { Controller } from "@nestjs/common";
import { DungeonService } from "./dungeon.service";

@Controller('dungeon')
export class DungeonController {
    constructor(private readonly dungeonService: DungeonService) {}

    
}

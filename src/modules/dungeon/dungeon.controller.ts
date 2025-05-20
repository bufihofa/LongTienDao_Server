import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { DungeonService } from "./dungeon.service";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('dungeon')
export class DungeonController {
    constructor(private readonly dungeonService: DungeonService) {}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('dungeon')
    @ApiOperation({ summary: 'Get Dungeon' })
    async getInventory(@Request() req) {
        return this.dungeonService.getAllDungeon(req.user);
    }
}

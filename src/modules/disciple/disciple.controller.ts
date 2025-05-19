import { Controller, Get, UseGuards, Request, Post } from "@nestjs/common";
import { DiscipleService } from "./disciple.service";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('disciple')
export class DiscipleController {
    constructor(private readonly discipleService: DiscipleService) {}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('getDisciple')
    @ApiOperation({ summary: 'Get đệ tử' })
    async getInventory(@Request() req) {
        return this.discipleService.getDisciple(req.user);
    }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addDisciple')
    @ApiOperation({ summary: 'Thêm đệ tử' })
    async addDisciple(@Request() req) {
        return this.discipleService.addDiscipleRandom(req.user);
    }

}
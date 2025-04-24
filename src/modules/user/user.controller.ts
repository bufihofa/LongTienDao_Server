import { Controller, Post, UseGuards, Request, Body, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateSectDto } from "./dto/createSect.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('sect')
    @ApiOperation({ summary: 'Tạo tông môn' })
    async createSect(@Request() req, @Body() createSectDto: CreateSectDto) {
        return this.userService.createSect(req.user, createSectDto);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('sect')
    @ApiOperation({ summary: 'Get tông môn' })
    async getSect(@Request() req) {
        return this.userService.getSect(req.user);
    }

}
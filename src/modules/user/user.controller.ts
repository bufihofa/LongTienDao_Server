import { Controller, Post, UseGuards, Request, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { CreateSectDto } from "./dto/createSect.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('user')
    async createSect(@Request() req, @Body() createSectDto: CreateSectDto) {
        return this.userService.createSect(req.user, createSectDto);
    }

}
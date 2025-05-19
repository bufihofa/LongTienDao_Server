import { Controller, Post, UseGuards, Request, Body, Get } from "@nestjs/common";
import { InventoryService } from "./inventory.service";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { Inventory, InventoryItem } from "./inventory.entity";
@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) {}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('inventory')
    @ApiOperation({ summary: 'Get kho đồ' })
    async getInventory(@Request() req) {
        return this.inventoryService.getInventory(req.user);
    }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('inventoryDetails')
    @ApiOperation({ summary: 'Get kho đồ chi tiết' })
    async getInventoryDetails(@Request() req) {
        return this.inventoryService.getInventoryWithDetails(req.user);
    }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('addItem')
    @ApiOperation({ summary: 'Thêm đồ vào kho' })
    async addItem(@Request() req, @Body() item: InventoryItem) {
        return this.inventoryService.addItem(req.user, item);
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { Inventory, InventoryItem } from "./inventory.entity";
import { Repository } from "typeorm";
import { ItemDetails } from "src/common/config/items";


//ERROR CODE: 3XXX
@Injectable()
export class InventoryService {
    constructor(
        @InjectRepository(Inventory)
        private readonly inventoryRepository: Repository<Inventory>,
    ) {}

    async createInventory(u: User): Promise<any> {
        const newInventory = this.inventoryRepository.create();
        u.inventory = newInventory;
    }
    async getInventory(u: User): Promise<any> {
        const inventory = await this.inventoryRepository.findOne({ where: { user: { id: u.id } } });
        if (!inventory) {
            return { success: false, message: 'Inventory not found', errorCode: 3000 };
        }
        return {
            success: true,
            message: 'Inventory retrieved successfully',
            inventory: inventory,
        };
    }
    async getInventoryWithDetails(u: User): Promise<any> {
        const inventory = await this.inventoryRepository.findOne({ where: { user: { id: u.id } } });
        if (!inventory) {
            return { success: false, message: 'Inventory not found', errorCode: 3002 };
        }
        let result: any[] = [];
        for(const item of inventory.items) {
            result.push({
                id: item.id,
                type: item.type,
                data: item.data,
                quantity: item.quantity,
                details: ItemDetails[item.type] || [],
            });
        }
        return {
            success: true,
            message: 'Inventory retrieved successfully',
            inventory: result,
        };
    }
    async addItem(u: User, item: InventoryItem): Promise<any> {
        const inventory = await this.inventoryRepository.findOne({ where: { user: { id: u.id } } });
        if (!inventory) {
            return { success: false, message: 'Inventory not found', errorCode: 3001 };
        }
        if (!inventory.items) {
            inventory.items = [];
        }
        console.log(inventory.items);
        // Check if item already exists
        const existingItem = inventory.items.find(i => i.type == item.type && JSON.stringify(i.data) == JSON.stringify(item.data));
        
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            item.id = inventory.idCount++;
            inventory.items.push(item);
        }

        await this.inventoryRepository.save(inventory);
        return inventory;
    }
    

}
import { InventoryItem } from "src/modules/inventory/inventory.entity";
import { MonsterDetails } from "../monster/monsterDetails";
import { DungeonType } from "./dungeonType";
import { get } from "http";

export class DungeonDetailsConfig {
    id: DungeonType;
    name: string;
    image: string;

    monsters_spawn_amount: number;
    monsters_spawn_rate: number;

    items_drop_amount: number;
    items_drop_rate: number;

    monsters: any[];
    items: any[];
    resources: any[];

    constructor(data: {
        id: DungeonType;
        name: string;
        image: string;
        monsters_spawn_amount: number;
        monsters_spawn_rate: number;
        items_drop_amount: number;
        items_drop_rate: number;
        monsters: any[];
        items: any[];
        resources: any[];
    }) {
        Object.assign(this, data);
    }

    generateMonsters(): any{
        let amount = 0;
        for (let i = 0; i < this.monsters_spawn_amount; i++) {
            if (Math.random() < this.monsters_spawn_rate) {
                amount++;
            }
        }

        // Calculate total weight
        let totalWeight = 0;
        this.monsters.forEach(monster => {
            totalWeight += monster.weight;
        });

        // Generate monsters based on their weights
        const monsters: any[] = [];
        for (let i = 0; i < amount; i++) {
            const randomWeight = Math.floor(Math.random() * totalWeight);
            let cumulativeWeight = 0;

            for (const monster of this.monsters) {
                cumulativeWeight += monster.weight;
                if (cumulativeWeight >= randomWeight) {
                    monsters.push(MonsterDetails[monster.type]);
                    break;
                }
            }
        }

        return monsters;
    }

    generateItems(): any {
        let amount = 0;
        for (let i = 0; i < this.items_drop_amount; i++) {
            if (Math.random() < this.items_drop_rate) {
                amount++;
            }
        }

        // Calculate total weight
        let totalWeight = 0;
        this.items.forEach(item => {
            totalWeight += item.weight;
        });

        // Generate items based on their weights
        const items: any[] = [];
        for (let i = 0; i < amount; i++) {
            const randomWeight = Math.floor(Math.random() * totalWeight);
            let cumulativeWeight = 0;

            for (const item of this.items) {
                cumulativeWeight += item.weight;
                if (cumulativeWeight >= randomWeight) {
                    items.push(this.getRandomItem(item));
                    break;
                }
            }
        }

        return items;
    }
    randomInt(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomItem(item: any): InventoryItem {
        let result = new InventoryItem();
        result.type = item.type;
        result.quantity = this.randomInt(item.minQuantity, item.maxQuantity);
        result.quality = item.quality;
        result.data = {};
        for (const key of item.data) {
            result.data[key[0]] = this.randomInt(key[1], key[2]);
        }
        return result;
    }

}
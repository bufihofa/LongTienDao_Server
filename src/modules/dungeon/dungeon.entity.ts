import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { InventoryItem } from "../inventory/inventory.entity";


@Entity()
export class Dungeon {
    @PrimaryGeneratedColumn('uuid')
    id: string; 
    @OneToOne(() => User, (user) => user.dungeon, { onDelete: "CASCADE" })
    @JoinColumn()
    @Index()
    user: User;

    @Column('jsonb', { default: [] })
    disciples: string[]; // Array of disciple IDs

    @Column('jsonb', { default: [] })
    events: string[];

    @Column({ default: 0 })
    currentTurn: number;

    @Column({ default: 0 })
    difficultyLevel: number;

    @Column('jsonb', { default: [] })
    itemRewards: InventoryItem[]; // Array of rewards for the dungeon
    @Column('jsonb', { default: {} })
    resourcesRewards: {
        spirit: number;
        stone: number;
        wood: number;
        food: number;
    };
}
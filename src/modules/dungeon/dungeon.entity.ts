import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ResourcesList, User } from "../user/user.entity";
import { InventoryItem } from "../inventory/inventory.entity";


@Entity()
export class Dungeon {
    @PrimaryGeneratedColumn('uuid')
    id: string; 
    @OneToOne(() => User, (user) => user.dungeon, { onDelete: "CASCADE" })
    @JoinColumn()
    @Index()
    user: User;

    @Column({ default: 0 })
    dungeonType: number; // Type of dungeon

    @Column({ default: 0 })
    dungeonLevel: number; // Level of dungeon

    @Column({ default: 0 })
    currentTurn: number;

    @Column({ default: 0 })
    currentTurnType: number; // Type of current turn (0: fight, 1: item, 2: event)

    @Column('jsonb', { default: [] })
    disciples: string[]; // Array of disciple IDs

    @Column('jsonb', { default: [] })
    events: string[];

    
    @Column('jsonb', { default: [] })
    itemRewards: InventoryItem[]; // Array of rewards for the dungeon

    @Column('jsonb', { default: new ResourcesList() })
    resourcesRewards: ResourcesList; // Array of resources rewards for the dungeon
}
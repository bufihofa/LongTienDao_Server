import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { InventoryItem } from "./dto/inventoryItem.dto";


@Entity()
export class Inventory {
    [x: string]: {};
    @PrimaryGeneratedColumn('uuid')
    id: string; 
    
    @OneToOne(() => User, (user) => user.inventory, { onDelete: "CASCADE" })
    @JoinColumn()
    @Index()
    user: User; 

    // Gộp item và itemStats vào một cột jsonb duy nhất
    // items sẽ là một mảng các đối tượng InventoryItem
    @Column('jsonb', { default: [] })
    items: InventoryItem[]; 

    @Column({ default: 100000 })
    idCount: number;
}
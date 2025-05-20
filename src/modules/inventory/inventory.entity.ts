import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class InventoryItem {
    id?: number;        // ID của item trong kho
    @ApiProperty({ example: 1 })
    type: string;      // Tham chiếu đến ItemDetails (ví dụ: Item.SWORDTEST)
    @ApiProperty({ example: 5 })
    quantity: number;    // Số lượng của item này
    @ApiProperty({ example: { damage: 5, defense: 2 } })
    data: Record<string,number>;  // Cho phép các stats động khác
}

@Entity()
export class Inventory {
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
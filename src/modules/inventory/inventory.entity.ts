import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class InventoryItem {
    @IsOptional()
    id?: number;        // ID của item trong kho

    @IsNotEmpty({ message: 'Item Type không được để trống' })
    @ApiProperty({ example: 'TEST_ITEM' })
    type: string;      // Tham chiếu đến ItemDetails (ví dụ: Item.SWORDTEST)

    @IsNotEmpty({ message: 'Quantity không được để trống' })
    @ApiProperty({ example: 5 })
    quantity: number;    // Số lượng của item này

    @IsNotEmpty({ message: 'Quality không được để trống' })
    @ApiProperty({ example: 0 })
    quality: number;    //  Phẩm chất của item này (0-4)

    @IsOptional()
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
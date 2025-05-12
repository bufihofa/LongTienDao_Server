import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

export interface InventoryItem {
    itemId: number;      // Tham chiếu đến ItemDetails (ví dụ: Item.SWORDTEST)
    quantity: number;    // Số lượng của item này
    // Các stats khác có thể được thêm vào đây dưới dạng key-value pairs
    // Ví dụ: damage?: number; defense?: number;
    [key: string]: any;  // Cho phép các stats động khác
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
}
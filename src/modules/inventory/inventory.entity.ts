import { Entity, Index, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn('uuid')
    id: string; // ID of the inventory item
    
    @OneToOne(() => User, (user) => user.inventory, { onDelete: "CASCADE" })
    @JoinColumn()
    @Index()
    user: User; // The user who owns this inventory item


}
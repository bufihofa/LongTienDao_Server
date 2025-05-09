import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, Index } from 'typeorm';
import { Disciple } from '../disciple/disciple.entity';
import { Inventory } from '../inventory/inventory.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true }) 
    username: string;

    @Column() 
    password: string; 

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    sectName: string;

    @Column({ default: 'member' })
    role: string; // 'admin' | 'member' | 'guest'
    
    @Column({ default: 0 })
    peoples: number; // Số lượng đệ tử ký danh

    @OneToMany(() => Disciple, (disciple) => disciple.user, { cascade: true })
    disciples: Disciple[]; // The disciples owned by this user

    @OneToOne(() => Inventory, (inventory) => inventory.user, { cascade: true })
    inventory: Inventory; // The inventory owned by this user

    @Column({ type: 'jsonb', nullable: true })
    buildingLevel: {
        main: number; 
        book: number; 
        long: number;
        tien: number;
    };

}

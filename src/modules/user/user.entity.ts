import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, Index } from 'typeorm';
import { Disciple } from '../disciple/disciple.entity';
import { Inventory } from '../inventory/inventory.entity';
import { Dungeon } from '../dungeon/dungeon.entity';

export class BuildingLevel {
    main: number = 1; 
    book: number = 1; 
    long: number = 1;
    tien: number = 1;
}
export class Resources {
    spirit: number = 100;
    stone: number = 100;
    wood: number = 100;
    food: number = 100;
    
    cash: number = 0;
}
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
    
    @Column({nullable: true})
    peoples: number; // Số lượng đệ tử ký danh

    @Column({nullable: true})
    maxDisciples: number; // Số lượng đệ tử nội môn tối đa

    @OneToMany(() => Disciple, (disciple) => disciple.user, { cascade: true })
    disciples: Disciple[]; // The disciples owned by this user

    @OneToOne(() => Inventory, (inventory) => inventory.user, { cascade: true })
    inventory: Inventory; // The inventory owned by this user
    
    @OneToOne(() => Dungeon, (dungeon) => dungeon.user, { cascade: true })
    dungeon: Dungeon; 

    @Column({ type: 'jsonb', nullable: true })
    buildingLevel: BuildingLevel; // Cấp độ của các công trình trong sect
    @Column({ type: 'jsonb', nullable: true })
    resources: Resources; // Tài nguyên của sect
    /*
    toJSON(){
        return{
            id: this.id,
            username: this.username,
            email: this.email,
            role: this.role,
            sectName: this.sectName || null,
            peoples: this.peoples,
            maxDisciples: this.maxDisciples,
            buildingLevel: this.buildingLevel,
            resources: this.resources,
        }
    }
    */

}

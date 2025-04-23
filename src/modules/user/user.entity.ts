import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Disciple } from '../disciple/disciple.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn() 
    id: number;

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

}

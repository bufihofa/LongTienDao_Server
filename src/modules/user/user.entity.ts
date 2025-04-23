// src/users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
    

}

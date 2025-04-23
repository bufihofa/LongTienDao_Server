import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Disciple {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    name: string;

    @Column()
    avatar: number; 

    @Column({ type: 'json' })
    stats: {
        immortalBloodline: number;
        dragonBloodline: number;
        
        immortalLevel: number;
        dragonLevel: number;

        immortalExp: number;
        dragonExp: number;
        immortalMaxExp: number;
        dragonMaxExp: number;

        hp: number;
        mp: number;
        physicalAttack: number;
        magicalAttack: number;
        physicalEnergy: number;
        magicalEnergy: number;
    };

    @ManyToOne(() => User, (user) => user.disciples, { onDelete: 'CASCADE' })
    user: User; // The user who owns this disciple
}

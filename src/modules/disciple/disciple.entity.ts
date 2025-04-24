import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Disciple {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column() 
    name: string;

    @Column()
    avatar: number; 

    @Column({ type: 'jsonb' })
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
    @Index()
    user: User; // The user who owns this disciple
}

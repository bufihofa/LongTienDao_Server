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

    @Column()
    immortalBloodline: number;
    @Column()
    dragonBloodline: number;

    @Column()
    immortalLevel: number;
    @Column()
    dragonLevel: number;

    @Column()
    immortalExp: number;
    @Column()
    dragonExp: number;

    @Column()
    immortalMaxExp: number;
    @Column()
    dragonMaxExp: number;

    @Column()
    hp: number;
    @Column()
    mp: number;

    @Column()
    physicalAttack: number;
    @Column()
    magicalAttack: number;

    @Column()
    physicalEnergy: number;
    @Column()
    magicalEnergy: number;

    @ManyToOne(() => User, (user) => user.disciples, { onDelete: 'CASCADE' })
    user: User; // The user who owns this disciple
}

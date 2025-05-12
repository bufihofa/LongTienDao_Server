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
        hp: number;
        mp: number;
        physicalAttack: number;
        magicalAttack: number;
        physicalEnergy: number;
        magicalEnergy: number;

        age: number; // Tuổi (tính theo ngày)

        thanthuc: number; // Thần thức
        coduyen: number; // Cơ duyên
        miluc: number; // Mị lực
        ngotinh: number; // Ngộ tính
        cancot: number; // Căn cốt

        immortalBloodline: number; //Thiên phú Tiên Đạo  
        immortalLevel: number; // Cảnh giới hiện tại của Tiên Đạo
        immortalSmallLevel: number; // Cảnh giới nhỏ (Tiểu cảnh giới) hiện tại của Tiên Đạo (Sơ Kỳ, Trung Kỳ, Hậu Kỳ, Viên Mãn)
        immortalExp: number; // Kinh nghiệm Tiên Đạo
        immortalMaxExp: number; // Kinh nghiệm cần để đột phá tiểu cảnh giới hiện tại

        immortalExtraLevel: number; // Cấp độ cực hạn hiện tại của Tiên Đạo
        immortalExtraExp: number; // Kinh nghiệm cực hạn
        immortalExtraMaxExp: number; // Kinh nghiệm cần để đột phá cấp độ cực hạn hiện tại

        dragonBloodline: number;
        dragonLevel: number;
        dragonSmallLevel: number;
        dragonExp: number;
        dragonMaxExp: number;

        dragonExtraLevel: number;
        dragonExtraExp: number;
        dragonExtraMaxExp: number;
    }


    @ManyToOne(() => User, (user) => user.disciples, { onDelete: 'CASCADE' })
    @Index()
    user: User; 
}

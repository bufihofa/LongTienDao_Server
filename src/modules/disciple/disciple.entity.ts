import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';
import { User } from '../user/user.entity';
export class DiscipleStats {
    hp: number = 1000;
    mp: number = 1000;
    physicalAttack: number = 10;
    magicalAttack: number = 10;
    physicalEnergy: number = 1000;
    magicalEnergy: number = 1000;

    age: number = 7000; // Tuổi (tính theo ngày)

    thanthuc: number = 3; // Thần thức
    coduyen: number = 3; // Cơ duyên
    miluc: number = 3; // Mị lực
    ngotinh: number = 3; // Ngộ tính
    cancot: number = 3; // Căn cốt

    immortalBloodline: number = 10; //Thiên phú Tiên Đạo  
    immortalLevel: number = 1; // Cảnh giới hiện tại của Tiên Đạo
    immortalSmallLevel: number = 1; // Cảnh giới nhỏ (Tiểu cảnh giới) hiện tại của Tiên Đạo (Sơ Kỳ, Trung Kỳ, Hậu Kỳ, Viên Mãn)
    immortalExp: number = 0; // Kinh nghiệm Tiên Đạo
    immortalMaxExp: number = 100; // Kinh nghiệm cần để đột phá tiểu cảnh giới hiện tại

    immortalExtraLevel: number = 0; // Cấp độ cực hạn hiện tại của Tiên Đạo
    immortalExtraExp: number = 0; // Kinh nghiệm cực hạn
    immortalExtraMaxExp: number = 100; // Kinh nghiệm cần để đột phá cấp độ cực hạn hiện tại

    dragonBloodline: number = 10;
    dragonLevel: number = 1;
    dragonSmallLevel: number = 1;
    dragonExp: number = 0;
    dragonMaxExp: number = 100;

    dragonExtraLevel: number= 0;
    dragonExtraExp: number = 0;
    dragonExtraMaxExp: number = 100;
}
@Entity()
export class Disciple {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: 'Liễu Như Yên', nullable: true }) 
    name: string;

    @Column({ default: 1, nullable: true }) 
    avatar: number; 

    @Column({ type: 'jsonb', nullable: true  })
    stats: DiscipleStats; // Thông tin về chỉ số của đệ tử

    @ManyToOne(() => User, (user) => user.disciples, { onDelete: 'CASCADE' })
    @Index()
    user: User; 
}

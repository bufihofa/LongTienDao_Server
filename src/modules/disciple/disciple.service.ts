import { Injectable } from "@nestjs/common";
import { Disciple } from "./disciple.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../user/user.entity";


//ERROR CODE: 5XXX

@Injectable()
export class DiscipleService {
    constructor(
        @InjectRepository(Disciple)
        private readonly discipleRepository: Repository<Disciple>,
    ) {}
    async getDisciple(u: User): Promise<any> {
        const disciples = await this.discipleRepository.find({ where: { user: { id: u.id } } });
        return {
            success: true,
            message: 'Disciple retrieved successfully',
            disciples: disciples,
        };
    }
    async addDiscipleRandom(u: User): Promise<any> {
        if(u.role != 'admin') {
            return { success: false, message: 'You are not allowed to add disciple', errorCode: 5999 };
        }
        const newDisciple = this.discipleRepository.create();
        console.log(newDisciple);

        
        newDisciple.user = u;

        await this.discipleRepository.save(newDisciple);

        return {
            success: true,
            message: 'Disciple added successfully',
            disciple: newDisciple,
        };
    }
    

}
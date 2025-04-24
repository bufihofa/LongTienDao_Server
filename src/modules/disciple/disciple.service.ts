import { Injectable } from "@nestjs/common";
import { Disciple } from "./disciple.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../user/user.entity";

@Injectable()
export class DiscipleService {
    constructor(
        @InjectRepository(Disciple)
        private readonly discipleRepository: Repository<Disciple>,
    ) {}
    
    async createDisciple(u: User, discipleName: string): Promise<any> {
        
        const newDisciple = this.discipleRepository.create();

        await this.discipleRepository.save(newDisciple);
        return {
            success: true,
            message: 'Disciple created successfully',
            discipleName: discipleName,
        };
    }

    

}
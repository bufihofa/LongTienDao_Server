import { Injectable } from "@nestjs/common";
import { Disciple } from "./disciple.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class DiscipleService {
    constructor(
        @InjectRepository(Disciple)
        private readonly discipleRepository: Repository<Disciple>,
    ) {}
    
}
import { Controller } from "@nestjs/common";
import { DiscipleService } from "./disciple.service";

@Controller('disciple')
export class DiscipleController {
    constructor(private readonly discipleService: DiscipleService) {}
}
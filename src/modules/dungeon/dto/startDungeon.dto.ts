import { ApiProperty } from "@nestjs/swagger";

export class StartDungeonDto {
    @ApiProperty({ example: 'Rừng U Minh' })
    dungeonName: string;

    @ApiProperty({ example: 1 })
    dungeonLevel: number;

    @ApiProperty({ type: [String], example: ['uuid1', 'uuid2'] })
    discipleIds: string[];
}
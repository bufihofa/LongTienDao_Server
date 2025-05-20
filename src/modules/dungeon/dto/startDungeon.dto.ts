import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class StartDungeonDto {
    @IsNumber({}, { message: 'Dungeon Type không hợp lệ' })
    @IsNotEmpty({ message: 'Dungeon Type không được để trống' })
    @ApiProperty({ example: '1000' })
    dungeonType: number;

    @IsNumber({}, { message: 'Dungeon Level không hợp lệ' })
    @IsNotEmpty({ message: 'Dungeon Level không được để trống' })
    @ApiProperty({ example: 1 })
    dungeonLevel: number;

    @IsNotEmpty({ message: 'DiscipleID không hợp lệ' })
    @ApiProperty({ type: [String], example: ['uuid1', 'uuid2'] })
    discipleIds: string[];
}
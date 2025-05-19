import { ApiProperty } from "@nestjs/swagger";

export class StartDungeonDto {
    @ApiProperty({ example: 'Long Tiên Cung' })
    sectName: string;
}
import { ApiProperty } from "@nestjs/swagger";

export class CreateSectDto {
    @ApiProperty({ example: 'Long Tiên Cung' })
    sectName: string;
}
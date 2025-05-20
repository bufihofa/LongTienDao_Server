import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSectDto {
    @IsNotEmpty({ message: 'Tên Tông Môn không được để trống' })
    @ApiProperty({ example: 'Long Tiên Cung' })
    sectName: string;
}
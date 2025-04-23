import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {

    @ApiProperty({ example: 'hoapri123@gmail.com' })
    email?: string;

    @ApiProperty({ example: 'hoapri123' })
    username: string;

    @ApiProperty({ example: 'Password123' })
    password: string;
    
}
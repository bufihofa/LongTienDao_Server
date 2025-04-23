import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    
    @ApiProperty({ example: 'hoapri123' })
    username: string;

    @ApiProperty({ example: 'Password123' })
    password: string;
}

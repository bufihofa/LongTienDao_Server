import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto {
    
    @IsNotEmpty({ message: 'Tên đăng nhập không được để trống' })
    @ApiProperty({ example: 'hoapri123' })
    username: string;

    @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
    @ApiProperty({ example: 'Password123' })
    password: string;
}

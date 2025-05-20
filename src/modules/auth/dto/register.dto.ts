import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class RegisterDto {
    
    @IsOptional()
    @IsEmail({}, { message: 'Email không hợp lệ' })
    @ApiProperty({ example: 'hoapri123@gmail.com' })
    email?: string;

    @IsNotEmpty({ message: 'Tên đăng nhập không được để trống' })
    @ApiProperty({ example: 'hoapri123' })
    username: string;

    @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
    @ApiProperty({ example: 'Password123' })
    password: string;
    
}


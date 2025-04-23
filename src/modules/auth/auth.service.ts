import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { error } from 'console';
@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private cfg: ConfigService,
        @InjectRepository(User)
            private readonly userRepository: Repository<User>,
        
        
    ) {}
    
    
    
    async login(loginDto: LoginDto) {
        const { username, password } = loginDto;

        const user = await this.userRepository.findOne({ where: { username } });
        if (!user){
            return { success: false, message: 'User not found', errorCode: 1001 };
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return { success: false, message: 'Invalid credentials', errorCode: 1002 };
        }

        const payload = { username: user.username, sub: user.id, role: user.role };

        return {
            success: true,
            message: 'Login successful',

            access_token: this.jwtService.sign(payload),
            user,
        };
    }

    async register(registerDto: RegisterDto) {
        const { username, password, email } = registerDto;

        const existingUser = await this.userRepository.findOne({ where: { username } });
        if (existingUser) {
            return { success: false, message: 'Username already exists', errorCode: 1003 };
        }
        const hashedPassword = await bcrypt.hash(password, 3);

        const newUser = this.userRepository.create({ username, password: hashedPassword, email });
        if(newUser.email == this.cfg.get<string>('ADMIN_EMAIL')) {
            newUser.role = 'admin';
        }

        await this.userRepository.save(newUser);

        return {
            success: true,
            message: 'User registered successfully',
            user: newUser,
        }
    }
}

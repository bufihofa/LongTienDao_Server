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


//ERROR CODE: 1XXX

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
       
        // Get user 
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user){
            return { success: false, message: 'User not found', errorCode: 1001 };
        }

        // Check password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return { success: false, message: 'Invalid credentials', errorCode: 1002 };
        }

        // OK
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

        // Check if user exists
        const existingUser = await this.userRepository.findOne({ where: { username } });
        if (existingUser) {
            return { success: false, message: 'Username already exists', errorCode: 1003 };
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 3);

        // Create new user
        const newUser = this.userRepository.create({ username, password: hashedPassword, email });
        if(newUser.email == this.cfg.get<string>('ADMIN_EMAIL')) {
            newUser.role = 'admin';
        }

        // Save user to database
        await this.userRepository.save(newUser);

        // OK
        const payload = { username: newUser.username, sub: newUser.id, role: newUser.role };
        return {
            success: true,
            message: 'User registered successfully',

            access_token: this.jwtService.sign(payload),
            user: newUser,
        }
    }
}

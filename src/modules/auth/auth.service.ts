// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { RegisterDto } from './dto/register.dto';
@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private cfg: ConfigService,
        @InjectRepository(User)
            private readonly userRepository: Repository<User>,
        
        
    ) {}
    /*
    async validateUser(username: string, pass: string) {
        if (!user) throw new UnauthorizedException('User not found');
        const match = await bcrypt.compare(pass, user.password);
        if (!match) throw new UnauthorizedException('Invalid credentials');
        const { password, ...result } = user;
        return result;
    }
    */
    async login(user: any) {
        const payload = { sub: user.id, username: user.username };
        return {
        access_token: this.jwtService.sign(payload),
        };
    }

    async register(registerDto: RegisterDto) {
        const { username, password, email } = registerDto;
        
        const existingUser = await this.userRepository.findOne({ where: { username } });
        if (existingUser) {
            throw new UnauthorizedException('Username already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 3);

        const newUser = this.userRepository.create({ username, password: hashedPassword, email });
        if(newUser.email == this.cfg.get<string>('ADMIN_EMAIL')) {
            newUser.role = 'admin';
        }

        console.log("Created new user: ");
        console.log(newUser);

        return await this.userRepository.save(newUser);
    }
}

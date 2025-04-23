// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSectDto } from './dto/createSect.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createSect(user: User, createSectDto: CreateSectDto): Promise<any> {
    if(user.sectName){
      return { success: false, message: 'Sect already exists', errorCode: 2001 };
    }
    if(!createSectDto.sectName){
      return { success: false, message: 'Sect name is required', errorCode: 2002 };
    }
    
    return this.userRepository.save(user);
  }
  
  
}

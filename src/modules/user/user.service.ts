// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSectDto } from './dto/createSect.dto';
import { InventoryService } from '../inventory/inventory.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly inventoryService: InventoryService,
    
  ) {}

  async createSect(u: User, createSectDto: CreateSectDto): Promise<any> {


    const user = await this.userRepository.findOne({ where: { id: u.id } });
    if (!user) {
      return { success: false, message: 'User not found', errorCode: 2000 };
    }
    if(user.sectName){
      return { success: false, message: 'Sect already exists', errorCode: 2001 };
    }
    if(!createSectDto.sectName){
      return { success: false, message: 'Sect name is required', errorCode: 2002 };
    }

    // OK
    user.sectName = createSectDto.sectName;
    user.buildingLevel = {
      main: 1,
      book: 1,
      long: 1,
      tien: 1,
    }
    user.resources = {
      spirit: 0,
      stone: 0,
      wood: 0,
      food: 0,
      cash: 0,
    }
    user.peoples = 5;

    this.inventoryService.createInventory(user);

    await this.userRepository.save(user);
    return {
      success: true,
      message: 'Sect created successfully',
      sectName: createSectDto.sectName,
    }
  }

  async getSect(u: User): Promise<any> {

    const user = await this.userRepository.findOne({ where: { id: u.id } });

    if (!user) {
      return { success: false, message: 'User not found', errorCode: 2003 };
    }
    if(!user.sectName){
      return { success: false, message: 'Sect not found', errorCode: 2004 };
    }

    
    return {
      success: true,
      message: 'Sect found successfully',
      user
    }
  }
  
  
  
}

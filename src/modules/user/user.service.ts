// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BuildingLevel, ResourcesList, User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSectDto } from './dto/createSect.dto';
import { InventoryService } from '../inventory/inventory.service';
import { DungeonService } from '../dungeon/dungeon.service';

//ERROR CODE: 2XXX
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly inventoryService: InventoryService,
    private readonly dungeonService: DungeonService,
    
  ) {}

  async createSect(u: User, createSectDto: CreateSectDto): Promise<any> {

    // Check if user exists
    const user = await this.userRepository.findOne({ where: { id: u.id } });
    if (!user) {
      return { success: false, message: 'User not found', errorCode: 2000 };
    }
    // Check if user has sect
    if(user.sectName){
      return { success: false, message: 'Sect already exists', errorCode: 2001 };
    }
    // Check if sect name is valid
    if(!createSectDto.sectName){
      return { success: false, message: 'Sect name is required', errorCode: 2002 };
    }

    // OK
    user.sectName = createSectDto.sectName;
    user.buildingLevel = new BuildingLevel();
    user.resources = new ResourcesList();
    
    user.disciples = [];
    this.inventoryService.createInventory(user);
    this.dungeonService.createDungeon(user);

    // Save user
    await this.userRepository.save(user);

    // OK
    return {
      success: true,
      message: 'Sect created successfully',
      user: user
    }
  }

  async getSect(u: User): Promise<any> {
    
    // Check if user exists
    const user = await this.userRepository.findOne({ where: { id: u.id } });
    if (!user) {
      return { success: false, message: 'User not found', errorCode: 2003 };
    }

    // Check if user has sect
    if(!user.sectName){
      return { success: false, message: 'Sect not found', errorCode: 2004 };
    }

    // OK
    return {
      success: true,
      message: 'Sect found successfully',
      user: user
    }
  }
  
  
  
}

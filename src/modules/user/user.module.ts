// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { Inventory } from '../inventory/inventory.entity';
import { InventoryModule } from '../inventory/inventory.module';
import { Dungeon } from '../dungeon/dungeon.entity';
import { DungeonModule } from '../dungeon/dungeon.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Inventory, Dungeon]),
    InventoryModule,
    DungeonModule,
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}

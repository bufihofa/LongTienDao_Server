import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './inventory.entity';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory, User])],
  providers: [InventoryService],
  exports: [InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { DungeonService } from './dungeon.service';
import { DungeonController } from './dungeon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [DungeonService],
  exports: [DungeonService],
  controllers: [DungeonController],
})
export class DungeonModule {}

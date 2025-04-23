// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disciple } from './disciple.entity';
import { DiscipleController } from './disciple.controller';
import { DiscipleService } from './disciple.service';

@Module({
  imports: [TypeOrmModule.forFeature([Disciple])],
  providers: [DiscipleService],
  exports: [DiscipleService],
  controllers: [DiscipleController],
})
export class DiscipleModule {}

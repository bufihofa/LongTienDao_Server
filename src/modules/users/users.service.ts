// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  findOne(username: string): Promise<User|null> {
    return this.repo.findOne({ where: { username } });
  }

  create(username: string, hash: string) {
    const u = this.repo.create({ username, password: hash });
    return this.repo.save(u);
  }
}

import { PrismaService } from '@/prisma-service/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Optional } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async insertUser({
    email,
    name,
    password,
  }: Optional<User, 'id' | 'createdAt'>) {
    return await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
  async findAllUsers() {
    return await this.prisma.user.findMany();
  }
}

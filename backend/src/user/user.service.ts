import { PrismaService } from '@/prisma-service/prisma.service';
import { User } from '@/prismaClient';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}

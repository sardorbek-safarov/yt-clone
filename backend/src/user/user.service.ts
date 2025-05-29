import { PrismaService } from '@/prisma-service/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async findAllUsers() {
    return await this.prisma.user.findMany();
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(data: { name: string; email: string; password: string }) {
    this.prisma.user.create({
      data,
    });
  }
}

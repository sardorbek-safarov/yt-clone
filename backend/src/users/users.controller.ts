import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { TUser } from './dto/users';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers(): TUser[] {
    return this.usersService.getUsers();
  }
}

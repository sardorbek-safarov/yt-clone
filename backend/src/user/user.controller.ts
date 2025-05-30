import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('insert')
  create() {
    return this.userService.insertUser({
      email: 'R2e7M@example.com',
      name: 'John Doe',
      password: 'password',
      avatar: null,
    });
  }
  @Get('/')
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }
}

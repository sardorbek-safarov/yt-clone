import { Injectable } from '@nestjs/common';
import { TUser } from './dto/users';

@Injectable()
export class UsersService {
  getUsers(): TUser[] {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'John Doe' },
    ];
  }
}

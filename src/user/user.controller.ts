import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user,schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() body: any): Promise<User> {
    return await this.userService.createUser(body);
  }
}

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user,schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() body: any): Promise<User> {
    return await this.userService.createUser(body);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any): Promise<User> {
    return await this.userService.updateUser(id, body);
  }
}

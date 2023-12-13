import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos';
import { UserUseCases } from 'src/use-cases/user/user.use-case';

@Controller('/user')
export class UserController {
  constructor(private userUseCase: UserUseCases) {}

  @Get()
  async getAll() {
    return this.userUseCase.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.userUseCase.getUserById(id);
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userUseCase.createUser(userDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userUseCase.updateUser(userId, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return this.userUseCase.deleteUser(userId);
  }
}

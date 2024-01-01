import { Injectable } from '@nestjs/common';
import { AbsDataServices, User } from 'src/core';
import { UserFactoryService } from './user-factory.service';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: AbsDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  async getAllUsers(): Promise<{
    statusCode: number;
    message: string;
    data: User[];
  }> {
    const isExist = await this.dataServices.users.getAll();
    if (isExist.length > 0) {
      return {
        statusCode: 200,
        message: 'Users fetched successfully',
        data: isExist,
      };
    }
  }

  async getUserById(
    id: any,
  ): Promise<{ statusCode: number; message: string; data: User }> {
    const isExist = await this.dataServices.users.get(id);
    if (isExist === null) {
      return {
        statusCode: 404,
        message: 'User not found',
        data: isExist,
      };
    } else {
      return {
        statusCode: 200,
        message: 'User fetched successfully',
        data: isExist,
      };
    }
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<{ statusCode: number; message: string; data: User }> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    const newUser = await this.dataServices.users.create(user);
    return {
      statusCode: 201,
      message: 'User created successfully',
      data: newUser,
    };
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<{ statusCode: number; message: string; data: User }> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    const updatedUser = await this.dataServices.users.update(userId, user);
    if (updatedUser === null) {
      return {
        statusCode: 404,
        message: 'User not found',
        data: updatedUser,
      };
    } else {
      return {
        statusCode: 200,
        message: 'User updated successfully',
        data: user,
      };
    }
  }

  async deleteUser(
    userId: string,
  ): Promise<{ statusCode: number; message: string }> {
    const deletedUser = await this.dataServices.users.delete(userId);
    if (deletedUser === null) {
      return {
        statusCode: 404,
        message: 'User not found',
      };
    } else {
      return {
        statusCode: 200,
        message: 'User deleted successfully',
      };
    }
  }
}

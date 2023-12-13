import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos';
import { User } from 'src/core/entities';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.username = createUserDto.username;
    newUser.password = createUserDto.password;
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.phone = createUserDto.phone;
    newUser.email = createUserDto.email;
    newUser.role = createUserDto.role;
    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User();
    newUser.username = updateUserDto.username;
    newUser.password = updateUserDto.password;
    newUser.firstName = updateUserDto.firstName;
    newUser.lastName = updateUserDto.lastName;
    newUser.phone = updateUserDto.phone;
    newUser.email = updateUserDto.email;
    newUser.role = updateUserDto.role;
    return newUser;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos';
import { User } from 'src/core/entities';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.firstname = createUserDto.firstname;
    newUser.lastname = createUserDto.lastname;
    // check if phone number start with 0
    if (createUserDto.phone.startsWith('0')) {
      // remove 0 from phone number
      const formatPhoneNumber = createUserDto.phone.replace(/^0+/, '');
      // add 62 to phone number
      const newFormatPhoneNumber = `62${formatPhoneNumber}`;
      newUser.phone = newFormatPhoneNumber;
    }
    // check if phone number start with 62
    else if (createUserDto.phone.startsWith('62')) {
      newUser.phone = createUserDto.phone;
    } else {
      const newFormatPhoneNumber = `62${createUserDto.phone}`;
      newUser.phone = newFormatPhoneNumber;
    }
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    newUser.role = createUserDto.role;
    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User();
    newUser.firstname = updateUserDto.firstname;
    newUser.lastname = updateUserDto.lastname;
    if (updateUserDto.phone.startsWith('0')) {
      const formatPhoneNumber = updateUserDto.phone.replace(/^0+/, '');
      const newFormatPhoneNumber = `62${formatPhoneNumber}`;
      newUser.phone = newFormatPhoneNumber;
    } else if (updateUserDto.phone.startsWith('62')) {
      newUser.phone = updateUserDto.phone;
    } else {
      const newFormatPhoneNumber = `62${updateUserDto.phone}`;
      newUser.phone = newFormatPhoneNumber;
    }
    newUser.email = updateUserDto.email;
    newUser.password = updateUserDto.password;
    newUser.role = updateUserDto.role;
    return newUser;
  }
}

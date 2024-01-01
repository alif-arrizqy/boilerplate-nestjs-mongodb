import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AbsDataServices } from 'src/core';
import { UserFactoryService } from '../user/user-factory.service';

@Injectable()
export class AuthUseCase {
  constructor(
    private dataService: AbsDataServices,
    private jwtService: JwtService,
    private userFactoryService: UserFactoryService,
  ) {}

  async findUserByEmail(email: string) {
    const isExist = await this.dataService.users.getOneByQuery({ email });
    return isExist;
  }

  async findUserById(id: string) {
    const isExist = await this.dataService.users.getOneByQuery({ id });
    return isExist;
  }

  async validateUser(email: string, pass: string) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      return null;
    }

    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    // filter item to generate token
    const { firstname, lastname, role } = user;
    const result = { firstname, lastname, email, role };
    return result;
  }

  public async login(user) {
    const token = await this.generateToken(user);
    return {
      statusCode: 200,
      message: 'User logged in successfully',
      data: user,
      token,
    };
  }

  public async create(user) {
    const pass = await this.hashPassword(user.password);
    const userDto = this.userFactoryService.createNewUser({
      ...user,
      password: pass,
    });

    const newUser = await this.dataService.users.create({
      ...userDto,
      password: pass,
    });

    const { firstname, lastname, phone, email, role } = newUser;
    const filterData = { firstname, lastname, phone, email, role };
    return {
      statusCode: 201,
      message: 'User created successfully',
      data: filterData,
    };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}

import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/core/dtos';
import { DoesUserExist } from 'src/core/guards/doesUserExist.guard';
import { AuthUseCase } from 'src/use-cases/auth/auth.use-case';

@Controller('/auth')
export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return await this.authUseCase.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return await this.authUseCase.create(user);
  }
}

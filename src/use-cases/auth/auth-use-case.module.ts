import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { AuthUseCase } from './auth.use-case';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserFactoryService } from '../user/user-factory.service';

@Module({
  imports: [
    DataServicesModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  providers: [UserFactoryService, AuthUseCase, LocalStrategy, JwtStrategy],
  exports: [UserFactoryService, AuthUseCase],
})
export class AuthUseCasesModule {}

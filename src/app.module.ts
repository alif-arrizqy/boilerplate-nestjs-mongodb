import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { UserUseCasesModule } from './use-cases/user/user.use-case.module';
import { UserController } from './controllers/user.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthUseCasesModule } from './use-cases/auth/auth-use-case.module';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DataServicesModule,
    UserUseCasesModule,
    AuthUseCasesModule,
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [],
})
export class AppModule {}

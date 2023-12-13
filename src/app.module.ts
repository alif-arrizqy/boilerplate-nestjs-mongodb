import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { UserUseCasesModule } from './use-cases/user/user.use-case.module';
import { UserController } from './controllers/user.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DataServicesModule,
    UserUseCasesModule,
  ],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}

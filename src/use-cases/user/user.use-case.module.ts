import { Module } from '@nestjs/common';
import { UserFactoryService } from './user-factory.service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { UserUseCases } from './user.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule {}

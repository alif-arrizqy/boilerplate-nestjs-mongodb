import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDataServices } from './mongo-data-services.service';
import { User, UserSchema } from './model';
import { AbsDataServices } from 'src/core';
import { DATA_BASE_CONFIGURATION } from 'src/configuration';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.databaseConnection),
  ],
  providers: [
    {
      provide: AbsDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [AbsDataServices],
})
export class MongoDataServicesModule {}

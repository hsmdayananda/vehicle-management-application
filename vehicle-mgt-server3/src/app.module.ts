import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { VehicleModule } from './vehicle/vehicle.module';
import { DbConfigModule } from './db-config/db-config.module';
import { CsvConsumerService } from './vehicle/csv-consumer.service';

@Module({
  imports: [
    VehicleModule,
    DbConfigModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      cors: {
        origin: '*',
        credentials: true,
      },
    })],
  controllers: [],
  providers: [],
})
export class AppModule { }

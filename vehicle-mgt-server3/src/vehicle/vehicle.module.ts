import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { VehicleResolver } from './vehicle.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entity/vehicle';
import { BullModule } from '@nestjs/bull';
import { CsvConsumerService } from './csv-consumer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle]),
  BullModule.forRoot({
    redis: {
      host: 'localhost',
      port: 6379,
    },
  }),
  BullModule.registerQueue({
    name:'csv-queue'
  }),],
  controllers: [VehicleController],
  providers: [VehicleService, VehicleResolver, CsvConsumerService],
  exports: [VehicleService]
})
export class VehicleModule {}

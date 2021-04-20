import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Vehicle } from 'src/vehicle/entity/vehicle';
import { Repository } from 'typeorm';

@Processor('csv-queue')
export class CsvConsumerService {

    private readonly logger = new Logger(CsvConsumerService.name);

    constructor(
        @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) { }

    @OnQueueActive()
    onActive(job: Job) {
        console.log(
            `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
        );
    }

    /**
     * process csv file
     * @param job 
     * @returns 
     */
    @Process('csv')
    handleCsvFiles(job: Job) {
        this.logger.log(job.name);

        // var csv = require("csvtojson");
        // var vehicleData: Vehicle[];
        // vehicleData = await csv().fromFile(job.data);
        // console.log('consumer service');
        // await this.vehicleRepository.save(vehicleData);

    }


}

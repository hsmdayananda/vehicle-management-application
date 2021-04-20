import { InjectQueue } from '@nestjs/bull';
import { Controller, Logger, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Queue } from 'bull';
import { VehicleService } from './vehicle.service';

@Controller('/api/vehicle')
export class VehicleController {

    private readonly logger = new Logger(VehicleController.name);

    constructor(
        private readonly vehicleService: VehicleService,
        @InjectQueue('csv-queue') private fileQueue: Queue) { }

    /**
     * add files to queue
     * @param file 
     */
    @Post('/upload')
    @UseInterceptors(FileInterceptor("csv", {dest: "./csv"}))
    uploadFiles(@UploadedFile() file){
        this.logger.log('VehicleController');
        this.fileQueue.add({'csv' : file});
        this.logger.log(file);
    }

    /**
     * save csv data without bull queue
     * @param fileName 
     * @returns 
     */
    // @Post('/import')
    // async create(@Body() fileName: CsvFileInput): Promise<any> {
    //     return await this.vehicleService.saveInDb(fileName);
    // }

}

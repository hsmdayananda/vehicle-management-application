import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import { Repository } from 'typeorm';
import { DeleteVehicleInput } from './dto/inputs/delete-vehicle.input';
import { UpdateVehicleInput } from './dto/inputs/update-vehicle.input';
import { Vehicle } from './entity/vehicle';

@Injectable()
export class VehicleService {

    constructor(@InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) { }

    /**
     * Save data into DB
     * @param dto 
     * @returns 
     */
    async saveInDb(data: any): Promise<any> {
        console.log("service invoked")
        var csv = require("csvtojson");
        var vehicleData: Vehicle[];
        vehicleData = await csv().fromFile(data);

        await this.vehicleRepository.save(vehicleData);
        return vehicleData;
    }

    /**
     * get vehicles
     * @returns 
     */
    async getVehicles() {
        return await this.vehicleRepository.find();
    }

    /**
     * update vehicle details
     * @param updateVehicleInput 
     * @returns 
     */
    async updateVehicle(updateVehicleInput: UpdateVehicleInput): Promise<Vehicle> {
        const vehicle = await this.vehicleRepository.findOne(updateVehicleInput.uuid);
        Object.assign(vehicle, updateVehicleInput);
        return vehicle;
    }

    /**
     * delete a vehicle
     * @param deleteVehicleInput 
     */
    async deleteVehicle(deleteVehicleInput: DeleteVehicleInput) {
        await this.vehicleRepository.delete(deleteVehicleInput.uuid);
    }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteVehicleInput } from './dto/inputs/delete-vehicle.input';
import { UpdateVehicleInput } from './dto/inputs/update-vehicle.input';
import { Vehicle } from './entity/vehicle';
import { VehicleService } from './vehicle.service';

@Resolver(() => Vehicle)
export class VehicleResolver {

    constructor(private readonly vehicleService: VehicleService){}

    /**
     * get vehicles resolver
     * @returns vehicles list
     */
    @Query(() => [Vehicle], {name: 'vehicles', nullable: 'items'})
    async getVehicles(): Promise<Vehicle[]>{
        return this.vehicleService.getVehicles();
    }

    /**
     * update a vehicle resolver
     * @param updateVehicleInput 
     * @returns 
     */
    @Mutation(() => Vehicle)
    async updateVehicle(@Args('updateVehicleData') updateVehicleInput : UpdateVehicleInput): Promise<Vehicle>{
        return this.vehicleService.updateVehicle(updateVehicleInput);
    }

    /**
     * delete a vehicle resolver
     * @param deleteVehicleInput 
     */
    @Mutation(() => Vehicle)
    deleteVehicle(@Args('deleteVehicleInput') deleteVehicleInput : DeleteVehicleInput){
        this.vehicleService.deleteVehicle(deleteVehicleInput);
    }
}

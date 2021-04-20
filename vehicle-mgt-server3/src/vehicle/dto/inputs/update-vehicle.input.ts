import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class UpdateVehicleInput{

    @Field()
    @IsNotEmpty()
    uuid: number;

    @Field()
    @IsNotEmpty()
    firstName: string;

    @Field()
    @IsNotEmpty()
    lastName: string;

    @Field()
    @IsNotEmpty()
    email: string;

    @Field()
    @IsNotEmpty()
    carMake: string;

    @Field()
    @IsNotEmpty()
    carModel: string;

    @Field()
    @IsNotEmpty()
    vinNumber: string;

    @Field()
    @IsNotEmpty()
    manufacDate: Date;

}
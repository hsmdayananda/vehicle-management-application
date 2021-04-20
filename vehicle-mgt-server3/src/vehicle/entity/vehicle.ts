import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vehicle')
@ObjectType()
export class Vehicle{

    @PrimaryGeneratedColumn('uuid') uuid;

    @Field()
    @Column('varchar', {length: 500})
    id: string;

    @Field()
    @Column('varchar', { length: 500})
    firstName: string;

    @Field()
    @Column('varchar', { length: 500})
    lastName: string;

    @Field()
    @Column('varchar', { length: 500})
    email: string;

    @Field()
    @Column('varchar', { length: 500})
    carMake: string;

    @Field()
    @Column('varchar', { length: 500})
    carModel: string;

    @Field()
    @Column('varchar', { length: 500})
    vinNumber: string;
    
    @Field()
    @Column('varchar', { length: 500})
    manufacturedDate: Date;

}
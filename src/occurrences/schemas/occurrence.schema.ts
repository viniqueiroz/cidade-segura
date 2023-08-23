import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OcurrenceDocument = HydratedDocument<Occurrence>;

@Schema()
export class Occurrence {
    @Prop()
    name: string;
  
    @Prop({required: true})
    age: number;
  
    @Prop()
    breed: string;
}


export const OccurrenceSchema = SchemaFactory.createForClass(Occurrence);

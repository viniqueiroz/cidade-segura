import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOccurrenceDto {
    @IsNotEmpty()
    @IsNumber()
    age: number
}

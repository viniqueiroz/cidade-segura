import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { UpdateOccurrenceDto } from './dto/update-occurrence.dto';
import { Occurrence } from './schemas/occurrence.schema';

@Injectable()
export class OccurrencesService {
  constructor(@InjectModel(Occurrence.name) private occurrenceModel: Model<Occurrence>) {}

  create(createOccurrenceDto: CreateOccurrenceDto) : Promise<Occurrence> {
    const createdOccurence = new this.occurrenceModel(createOccurrenceDto);
    return createdOccurence.save();
  }

  findAll(): Promise<Occurrence[]> {
    return this.occurrenceModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} occurrence`;
  }

  update(id: number, updateOccurrenceDto: UpdateOccurrenceDto) {
    return `This action updates a #${id} occurrence`;
  }

  remove(id: number) {
    return `This action removes a #${id} occurrence`;
  }
}

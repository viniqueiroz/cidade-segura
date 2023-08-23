import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OccurrencesService } from './occurrences.service';
import { OccurrencesController } from './occurrences.controller';
import { Occurrence, OccurrenceSchema } from './schemas/occurrence.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Occurrence.name, schema: OccurrenceSchema }])],
  controllers: [OccurrencesController],
  providers: [OccurrencesService],
})
export class OccurrencesModule {}

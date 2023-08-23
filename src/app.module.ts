import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OccurrencesModule } from './occurrences/occurrences.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URL), UsersModule, OccurrencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

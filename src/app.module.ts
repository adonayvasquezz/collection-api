import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackerModule } from './tracker/tracker.module';

@Module({
  imports: [
    TrackerModule,
    MongooseModule.forRoot('mongodb://localhost/collection-tracker'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

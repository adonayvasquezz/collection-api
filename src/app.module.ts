import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackerModule } from './tracker/tracker.module';
//MongooseModule.forRoot('mongodb://localhost/collection-tracker'),
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bdd_usuario:ePKdySsTnGIv5K2h@cluster0.wtzw7.mongodb.net/trackerdb?retryWrites=true&w=majority'
    ),
    TrackerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AircraftModule } from './aircraft/aircraft.module';
import { SuparbikeModule } from './module/suparbike/suparbike.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    CarModule,
    AircraftModule,
    SuparbikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

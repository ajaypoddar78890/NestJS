import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuparbikeService } from './suparbike.service';
import { SuparbikeController } from './suparbike.controller';
import {
  Suparbike,
  SuparbikesSchema,
} from './schema/superbike.schema/superbike.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Suparbike.name, schema: SuparbikesSchema },
    ]),
  ],
  providers: [SuparbikeService],
  controllers: [SuparbikeController],
})
export class SuparbikeModule {}

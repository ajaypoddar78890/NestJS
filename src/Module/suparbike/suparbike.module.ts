import { Module } from '@nestjs/common';
import { SuparbikeService } from './suparbike.service';
import { SuparbikeController } from './suparbike.controller';

@Module({
  providers: [SuparbikeService],
  controllers: [SuparbikeController]
})
export class SuparbikeModule {}

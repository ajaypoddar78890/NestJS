import { Controller, Post, Get, Body } from '@nestjs/common';
import { SuparbikeService } from './suparbike.service';
import { CreateSuparbikeDto } from './dto/create-suparbike.dto';
import { Suparbike } from './schema/superbike.schema/superbike.schema';

@Controller('superbikes') // This defines the route prefix: /superbikes
export class SuparbikeController {
  constructor(private readonly suparbikeService: SuparbikeService) {}

  // POST /superbikes
  @Post()
  create(@Body() createSuparbikeDto: CreateSuparbikeDto): Promise<Suparbike> {
    return this.suparbikeService.create(createSuparbikeDto);
  }

  // GET /superbikes
  @Get()
  findAll(): Promise<Suparbike[]> {
    return this.suparbikeService.findAll();
  }
}

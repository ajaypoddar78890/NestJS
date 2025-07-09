import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Suparbike } from './schema/superbike.schema/superbike.schema';
import { Model } from 'mongoose';
import { CreateSuparbikeDto } from './dto/create-suparbike.dto';

@Injectable()
export class SuparbikeService {
  constructor(
    @InjectModel(Suparbike.name) private suparbikeModel: Model<Suparbike>,
  ) {}

  async create(data: CreateSuparbikeDto): Promise<Suparbike> {
    const createdSuparbike = new this.suparbikeModel(data);
    return createdSuparbike.save();
  }

  async findAll(): Promise<Suparbike[]> {
    return this.suparbikeModel.find().exec();
  }
}

import { Schema, Prop } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Car {
  @Prop({ required: true })
  make: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  year: number;
}

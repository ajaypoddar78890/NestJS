import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'car' }) // <-- force collection name
export class Car extends Document {
  @Prop() company: string;
  // @Prop() carmodel: string;
  @Prop() year: number;
  @Prop() power: string;
  @Prop() speed: number;
  @Prop() tork: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);

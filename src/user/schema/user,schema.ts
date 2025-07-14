import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  salary: number;

  @Prop({ required: true, default: false })
  isBillionair: boolean;

  @Prop({ required: true, default: false })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

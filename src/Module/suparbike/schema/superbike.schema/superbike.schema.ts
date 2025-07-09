import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type Suparbikedocument = Suparbike & Document;

@Schema()
export class Suparbike {
  @Prop({ required: true })
  name: string;

  @Prop()
  model: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  power: string;
  @Prop({ required: true })
  speed: number;
  @Prop({ required: true })
  tork: number;
  @Prop({ required: true })
  price: number;
}

export const SuparbikesSchema = SchemaFactory.createForClass(Suparbike);

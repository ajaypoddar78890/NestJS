import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; // ✅ Correct import

export type TeamDocument = Team & Document;

@Schema({ collection: 'teams' })
export class Team {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: false })
  isActive: boolean;

  @Prop({ required: true, default: false })
  isPublic: boolean;

  @Prop({ required: true, type: [String] })
  members: string[];

  @Prop({ required: true })
  createdBy: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);

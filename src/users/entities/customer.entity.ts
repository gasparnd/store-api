import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Skill, SkillSchema } from './skills.entity';

@Schema()
export class Customer extends Document {
  @Prop({ type: 'string', required: true })
  name: string;

  @Prop({ type: 'string', required: true })
  lastName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({
    type: [SkillSchema],
    required: true,
  })
  skills: Types.Array<Skill>;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

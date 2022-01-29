import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Category extends Document {
  @Prop({ type: 'string', required: true })
  name: string;

  @Prop({ required: false })
  image: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number })
  stock: number;

  @Prop({ required: false })
  image: string;
}

export const ProductShcema = SchemaFactory.createForClass(Product);

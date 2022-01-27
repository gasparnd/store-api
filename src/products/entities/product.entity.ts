import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ type: Number, required: true, index: true })
  price: number;

  @Prop({ type: Number })
  stock: number;

  @Prop({ required: false })
  image: string;

  @Prop(raw({ name: { type: String }, image: { type: String } }))
  category: Record<string, any>;
}

export const ProductShcema = SchemaFactory.createForClass(Product);
ProductShcema.index({ price: 1, stock: -1 });

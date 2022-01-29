import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Brand } from './brand.entity';

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

  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId;
}

export const ProductShcema = SchemaFactory.createForClass(Product);
ProductShcema.index({ price: 1, stock: -1 });

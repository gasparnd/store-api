import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  user: User;

  @Prop({ required: true })
  products: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);

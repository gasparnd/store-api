import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Customer {
  @Prop({ type: 'string', required: true })
  name: string;

  @Prop({ type: 'string', required: true })
  lastName: string;

  @Prop({ required: true })
  phone: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

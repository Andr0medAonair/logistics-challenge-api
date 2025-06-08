import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  orderId: number;

  @Prop({ required: true })
  prodId: number;

  @Prop({ required: true })
  value: number;

  @Prop({ required: true })
  date: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

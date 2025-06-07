import { Order } from './order.interface';

export interface OrderInput extends Omit<Order, 'total'> {
  total: number;
}

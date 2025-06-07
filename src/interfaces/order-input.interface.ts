import { OrderInterface } from './order.interface';

export interface OrderInputInterface extends Omit<OrderInterface, 'total'> {
  total: number;
}

import { OrderInterface } from './order.interface';

export interface UserDataInterface {
  user_id: number;
  name: string;
  orders: OrderInterface[];
}

import { Order } from './order.interface';

export interface UserData {
  user_id: number;
  name: string;
  orders: Order[];
}

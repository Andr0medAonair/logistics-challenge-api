import { Order } from './order.entity';

export class UserData {
  user_id: number;
  name: string;
  orders: Order[];
}

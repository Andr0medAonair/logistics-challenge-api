import { CreateOrderDto } from 'src/validators/create-order.dto';
import { UserDataEntryInterface } from './user-data-entry.interface';

export interface OrderRepositoryInterface {
  findAllOrders(): Promise<UserDataEntryInterface[]>;
  getOrdersByUserId(userId: number): Promise<UserDataEntryInterface[]>;
  createOrder(order: CreateOrderDto[]): Promise<UserDataEntryInterface[]>;
}

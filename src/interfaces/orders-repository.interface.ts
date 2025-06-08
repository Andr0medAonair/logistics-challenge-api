import { CreateOrderDto } from 'src/validators/create-order.dto';
import { UserDataEntryInterface } from './user-data-entry.interface';

export interface OrderRepositoryInterface {
  findAllOrders(): Promise<UserDataEntryInterface[]>;
  getOrdersByUserId(userId: number): Promise<UserDataEntryInterface[]>;
  createOrders(order: CreateOrderDto[]): Promise<UserDataEntryInterface[]>;
}

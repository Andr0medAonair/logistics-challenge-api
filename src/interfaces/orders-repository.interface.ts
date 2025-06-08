import { CreateOrderDto } from 'src/dtos/create-order.dto';
import { UserDataEntryInterface } from './user-data-entry.interface';
import { NumericDateQueryDto } from 'src/dtos/numeric-date-query.dto';

export interface OrderRepositoryInterface {
  findAllOrders(query: NumericDateQueryDto): Promise<UserDataEntryInterface[]>;
  getOrdersByUserId(userId: number): Promise<UserDataEntryInterface[]>;
  createOrders(order: CreateOrderDto[]): Promise<UserDataEntryInterface[]>;
}

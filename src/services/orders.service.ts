import { Injectable, Logger } from '@nestjs/common';
import { stringToJsonConverter } from 'src/helpers/stringToJsonConverter.helper';
import { outputPayloadBuilder } from 'src/helpers/outputPayloadBuilder.helper';
import { formatDate } from 'src/utils/formatDate.utils';
import { OrderRepository } from '../repositories/orders.repository';
import { CreateOrderDto } from 'src/validators/create-order.dto';
import { UserDataInterface } from 'src/interfaces/user-data.interface';
import { UserDataEntryInterface } from 'src/interfaces/user-data-entry.interface';

@Injectable()
export class OrdersService {
  private className = 'OrderService';

  constructor(private readonly orderRepository: OrderRepository) {}

  async create(rawPayload: string): Promise<UserDataEntryInterface[]> {
    Logger.log(
      `${this.className} - ${this.create.name}`,
      `Creating a new order with data: ${rawPayload}`,
    );
    const parsed: CreateOrderDto[] = stringToJsonConverter(rawPayload);
    await this.orderRepository.createOrder(parsed);
    return parsed;
  }

  async findAllOrders(): Promise<UserDataInterface> {
    Logger.log(
      `${this.className} - ${this.findAllOrders.name}`,
      'Retrieving all orders',
    );

    const payload = await this.orderRepository.findAllOrders();

    return outputPayloadBuilder(payload, formatDate);
  }

  async findOrdersByUserId(id: number): Promise<UserDataInterface> {
    Logger.log(
      `${this.className} - ${this.findOrdersByUserId.name}`,
      `Retrieving orders for user with ID: ${id}`,
    );

    const payload = await this.orderRepository.getOrdersByUserId(id);

    return outputPayloadBuilder(payload, formatDate);
  }
}

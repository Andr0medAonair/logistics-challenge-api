import { Injectable, Logger } from '@nestjs/common';
import { stringToJsonConverter } from 'src/helpers/stringToJsonConverter.helper';
import { outputPayloadBuilder } from 'src/helpers/outputPayloadBuilder.helper';
import { formatDate } from 'src/utils/formatDate.utils';
import { OrdersRepository } from '../repositories/orders.repository';
import { CreateOrderDto } from 'src/validators/create-order.dto';
import { UserDataInterface } from 'src/interfaces/user-data.interface';

@Injectable()
export class OrdersService {
  private className = 'OrderService';

  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrders(rawPayload: string): Promise<UserDataInterface[]> {
    Logger.log(
      `${this.className} - ${this.createOrders.name}`,
      `Creating a new order with data: ${rawPayload}`,
    );
    const parsed: CreateOrderDto[] = stringToJsonConverter(rawPayload);
    const payload = await this.ordersRepository.createOrders(parsed);
    return outputPayloadBuilder(payload, formatDate);
  }

  async findAllOrders(): Promise<UserDataInterface[]> {
    Logger.log(
      `${this.className} - ${this.findAllOrders.name}`,
      'Retrieving all orders',
    );

    const payload = await this.ordersRepository.findAllOrders();

    return outputPayloadBuilder(payload, formatDate);
  }

  async findOrdersByUserId(id: number): Promise<UserDataInterface> {
    Logger.log(
      `${this.className} - ${this.findOrdersByUserId.name}`,
      `Retrieving orders for user with ID: ${id}`,
    );

    const payload = await this.ordersRepository.getOrdersByUserId(id);
    const [orders] = outputPayloadBuilder(payload, formatDate);

    return orders;
  }
}

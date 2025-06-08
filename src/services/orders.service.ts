import { Injectable, Logger } from '@nestjs/common';
import { stringToJsonConverter } from 'src/helpers/stringToJsonConverter.helper';
import { outputPayloadBuilder } from 'src/helpers/outputPayloadBuilder.helper';
import { formatDate } from 'src/utils/format-date.utils';
import { OrdersRepository } from '../repositories/orders.repository';
import { CreateOrderDto } from 'src/validators/create-order.dto';
import { UserDataInterface } from 'src/interfaces/user-data.interface';
import { DateQueryDto } from 'src/validators/date-query.dto';
import { transformDateStringToNumeric } from 'src/utils/transform-date-string-to-numeric.utils';

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

  async findAllOrders(
    queryDto: DateQueryDto = new DateQueryDto(),
  ): Promise<UserDataInterface[]> {
    Logger.log(
      `${this.className} - ${this.findAllOrders.name}`,
      'Retrieving all orders',
    );

    const numericQuery = transformDateStringToNumeric(queryDto);

    const payload = await this.ordersRepository.findAllOrders(numericQuery);

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

import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { stringToJsonConverter } from 'src/helpers/string-to-json-converter.helper';
import { outputPayloadBuilder } from 'src/helpers/output-payload-builder.helper';
import { formatDate } from 'src/utils/format-date.utils';
import { OrdersRepository } from '../repositories/orders.repository';
import { CreateOrderDto } from 'src/dtos/create-order.dto';
import { UserDataInterface } from 'src/interfaces/user-data.interface';
import { DateQueryDto } from 'src/dtos/date-query.dto';
import { transformDateStringToNumeric } from 'src/utils/transform-date-string-to-numeric.utils';

@Injectable()
export class OrdersService {
  private className = 'OrderService';

  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrders(rawPayload: string): Promise<UserDataInterface[]> {
    Logger.log(
      `${this.className} - ${this.createOrders.name}`,
      `Criando pedidos com o payload: ${rawPayload}`,
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
      `Buscando pedidos. Data de início: ${queryDto.startDate}, Data de fim: ${queryDto.endDate}`,
    );

    const numericQuery = transformDateStringToNumeric(queryDto);

    const payload = await this.ordersRepository.findAllOrders(numericQuery);

    return outputPayloadBuilder(payload, formatDate);
  }

  async findOrdersByUserId(id: number): Promise<UserDataInterface> {
    Logger.log(
      `${this.className} - ${this.findOrdersByUserId.name}`,
      `Buscando pedido do usuário ${id}`,
    );

    const payload = await this.ordersRepository.getOrdersByUserId(id);

    if (payload.length === 0) {
      Logger.error(
        `${this.className} - ${this.findOrdersByUserId.name}`,
        `Pedidos do usuário ${id} não encontrados.`,
      );
      throw new NotFoundException(`Pedidos do usuário ${id} não encontrados.`);
    }

    const [orders] = outputPayloadBuilder(payload, formatDate);

    return orders;
  }
}

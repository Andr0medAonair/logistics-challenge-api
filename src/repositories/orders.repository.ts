import { Injectable, Inject, Logger } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { UserDataEntry } from '../entities/user-data-entry.entity';
import { OrderRepositoryInterface } from 'src/interfaces/orders-repository.interface';
import { UserDataEntryInterface } from 'src/interfaces/user-data-entry.interface';
import { OrderDocument } from 'src/schemas/order.schema';
import { NumericDateQueryDto } from 'src/dtos/numeric-date-query.dto';

@Injectable()
export class OrdersRepository implements OrderRepositoryInterface {
  private className = 'OrdersRepository';

  constructor(
    @Inject('ORDER_MODEL')
    private orderModel: Model<OrderDocument>,
  ) {}

  async findAllOrders(
    query: NumericDateQueryDto,
  ): Promise<UserDataEntryInterface[]> {
    const { startDate, endDate } = query;

    const filter: FilterQuery<OrderDocument> = {};

    if (startDate || endDate) {
      filter.date = {
        ...(startDate && { $gte: startDate }),
        ...(endDate && { $lte: endDate }),
      };
    }

    const payload = await this.orderModel
      .find(filter)
      .sort({ date: -1 })
      .exec();

    Logger.log(
      `${this.className} - ${this.findAllOrders.name}`,
      `Payload retrieved: ${JSON.stringify(payload)}`,
    );

    return payload;
  }

  async getOrdersByUserId(userId: number): Promise<UserDataEntryInterface[]> {
    const payload: UserDataEntry[] = await this.orderModel.find({ userId });

    Logger.log(
      `${this.className} - ${this.getOrdersByUserId.name}`,
      `Orders retrieved: ${JSON.stringify(payload)}`,
    );

    return payload;
  }

  async createOrders(
    order: CreateOrderDto[],
  ): Promise<UserDataEntryInterface[]> {
    Logger.log(
      `order = ${JSON.stringify(order)}`,
      `${this.className} - ${this.createOrders.name}`,
    );

    const createdOrder = await this.orderModel.insertMany(order, {
      ordered: true,
    });

    Logger.log(
      `order = ${JSON.stringify(order)}`,
      `${this.className} - Order created successfully}`,
    );

    return createdOrder;
  }
}

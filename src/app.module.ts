import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { databaseProvider } from './database/database.provider';
import { orderProvider } from './database/order.provider';
import { OrdersRepository } from './repositories/orders.repository';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrdersRepository,
    ConfigService,
    ...databaseProvider,
    ...orderProvider,
  ],
  exports: [...databaseProvider],
})
export class AppModule {}

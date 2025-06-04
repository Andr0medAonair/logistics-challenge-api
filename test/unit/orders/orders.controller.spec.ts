import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from '../../../src/orders/orders.controller';
import { OrdersService } from '../../../src/orders/orders.service';
import { mockOrders, mockOrder, mockId } from './mocks';

describe('OrdersController', () => {
  let controller: OrdersController;
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of orders with user data in find all method', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValueOnce(mockOrders);

    const result = await controller.findAll();
    expect(result).toEqual(mockOrders);
  });

  it('should return the exact order with user data in find by id method', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(mockOrder);

    const result = await controller.findOne(mockId);
    expect(result).toEqual(mockOrder);
  });
});

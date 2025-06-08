import { Test, TestingModule } from '@nestjs/testing';
import { mockOrders, mockOrder, mockId, createMockFiles } from '../mocks';
import { OrdersController } from 'src/controllers/orders.controller';
import { OrdersService } from 'src/services/orders.service';
import { OrdersRepository } from 'src/repositories/orders.repository';
import { ConfigService } from '@nestjs/config';

describe('OrdersController', () => {
  let controller: OrdersController;
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        OrdersService,
        {
          provide: OrdersRepository,
          useValue: {},
        },
        {
          provide: ConfigService,
          useValue: {},
        },
        {
          provide: 'DATABASE_CONNECTION',
          useValue: {},
        },
        {
          provide: 'ORDER_MODEL',
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of orders with user data in find all method', async () => {
    jest.spyOn(service, 'findAllOrders').mockResolvedValueOnce(mockOrders);

    const result = await controller.findAll();
    expect(result).toEqual(mockOrders);
  });

  it('should return an array of orders with user data in find all with query method', async () => {
    jest.spyOn(service, 'findAllOrders').mockResolvedValueOnce([mockOrder]);

    const result = await controller.findAll({
      startDate: '2020-12-01',
      endDate: '2020-12-02',
    });
    expect(result).toEqual([mockOrder]);
  });

  it('should return the exact order with user data in find by id method', async () => {
    jest.spyOn(service, 'findOrdersByUserId').mockResolvedValueOnce(mockOrder);

    const result = await controller.findOne(mockId);
    expect(result).toEqual(mockOrder);
  });

  it('should return the correct payload with the create order method', async () => {
    jest.spyOn(service, 'createOrders').mockResolvedValueOnce(mockOrders);

    const result = await controller.create(createMockFiles);
    expect(result).toEqual(mockOrders);
  });
});

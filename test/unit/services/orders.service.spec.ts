import { Test, TestingModule } from '@nestjs/testing';
import {
  mockOrders,
  mockId,
  mockOrder,
  databaseMockOutput,
  databaseMockSingleOutput,
  createMockPayload,
} from '../mocks';
import { OrdersService } from 'src/services/orders.service';
import { OrdersRepository } from 'src/repositories/orders.repository';
import { ConfigService } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('OrdersService', () => {
  let service: OrdersService;
  let repository: OrdersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        OrdersRepository,
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

    service = module.get<OrdersService>(OrdersService);
    repository = module.get<OrdersRepository>(OrdersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return correct value on findAll method', async () => {
    jest
      .spyOn(repository, 'findAllOrders')
      .mockResolvedValueOnce(databaseMockOutput);

    const response = await service.findAllOrders();
    expect(response).toStrictEqual(mockOrders);
  });

  it('should return correct value on findOrdersByUserId method', async () => {
    jest
      .spyOn(repository, 'getOrdersByUserId')
      .mockResolvedValueOnce(databaseMockSingleOutput);

    const response = await service.findOrdersByUserId(mockId);
    expect(response).toStrictEqual(mockOrder);
  });

  it('should return correct value on findOrdersByUserId method', async () => {
    jest.spyOn(repository, 'getOrdersByUserId').mockResolvedValueOnce([]);

    await expect(service.findOrdersByUserId(mockId)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should return correct value on create orders method', async () => {
    jest
      .spyOn(repository, 'createOrders')
      .mockResolvedValueOnce(databaseMockOutput);

    const response = await service.createOrders(createMockPayload);
    expect(response).toStrictEqual(mockOrders);
  });
});

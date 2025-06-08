import { Test, TestingModule } from '@nestjs/testing';
import {
  mockId,
  databaseMockOutput,
  databaseMockSingleOutput,
  createDatabaseMockInput,
} from '../mocks';
import { OrdersRepository } from 'src/repositories/orders.repository';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { UserDataEntryInterface } from 'src/interfaces/user-data-entry.interface';

describe('OrdersRepository', () => {
  let repository: OrdersRepository;
  let mockOrderModel: Model<UserDataEntryInterface>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
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
          useValue: {
            find: () => {},
            insertMany: () => {},
          },
        },
      ],
    }).compile();

    repository = module.get<OrdersRepository>(OrdersRepository);
    mockOrderModel = module.get<Model<UserDataEntryInterface>>('ORDER_MODEL');
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should return correct value on findAllOrders method', async () => {
    jest.spyOn(mockOrderModel, 'find').mockResolvedValue(databaseMockOutput);

    const response = await repository.findAllOrders();
    expect(response).toStrictEqual(databaseMockOutput);
  });

  it('should return correct value on getOrdersByUserId method', async () => {
    jest
      .spyOn(mockOrderModel, 'find')
      .mockResolvedValue(databaseMockSingleOutput);

    const response = await repository.getOrdersByUserId(mockId);
    expect(response).toStrictEqual(databaseMockSingleOutput);
  });

  it('should return correct value on createOrders method', async () => {
    jest
      .spyOn(mockOrderModel, 'insertMany')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .mockResolvedValueOnce(databaseMockOutput as any);

    const response = await repository.createOrders(createDatabaseMockInput);
    expect(response).toStrictEqual(databaseMockOutput);
  });
});

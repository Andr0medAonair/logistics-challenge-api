import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { OrderDocument } from 'src/schemas/order.schema';
import { NumericDateQueryDto } from 'src/validators/numeric-date-query.dto';
import { OrdersRepository } from 'src/repositories/orders.repository';
import { createDatabaseMockInput, databaseMockOutput } from '../mocks';

const mockOrderModel = {
  find: jest.fn(),
  insertMany: jest.fn(),
};

describe('OrdersRepository', () => {
  let repository: OrdersRepository;
  let model: Model<OrderDocument>;

  let findSpy: jest.SpyInstance;
  let insertManySpy: jest.SpyInstance;
  let loggerSpy: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersRepository,
        {
          provide: 'ORDER_MODEL',
          useValue: mockOrderModel,
        },
      ],
    }).compile();

    repository = module.get<OrdersRepository>(OrdersRepository);
    model = module.get<Model<OrderDocument>>('ORDER_MODEL');

    findSpy = jest.spyOn(model, 'find');
    insertManySpy = jest.spyOn(model, 'insertMany');
    loggerSpy = jest.spyOn(Logger, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should filter by start and end date when both are provided', async () => {
    const query: NumericDateQueryDto = {
      startDate: 20250601,
      endDate: 20250608,
    };
    const expectedFilter: FilterQuery<OrderDocument> = {
      date: { $gte: 20250601, $lte: 20250608 },
    };

    findSpy.mockReturnValue({
      sort: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(databaseMockOutput),
    } as any);

    const result = await repository.findAllOrders(query);

    expect(findSpy).toHaveBeenCalledWith(expectedFilter);
    expect(result).toEqual(databaseMockOutput);
    expect(loggerSpy).toHaveBeenCalled();
  });

  it('should use an empty filter when no dates are provided', async () => {
    const query: NumericDateQueryDto = {};
    findSpy.mockReturnValue({
      sort: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(databaseMockOutput),
    } as any);

    await repository.findAllOrders(query);

    expect(findSpy).toHaveBeenCalledWith({});
  });

  it('should find orders by a given user ID', async () => {
    const userId = 123;
    const expectedFilter: FilterQuery<OrderDocument> = { userId };
    findSpy.mockResolvedValue(databaseMockOutput as any);

    const result = await repository.getOrdersByUserId(userId);

    expect(findSpy).toHaveBeenCalledWith(expectedFilter);
    expect(result).toEqual(databaseMockOutput);
    expect(loggerSpy).toHaveBeenCalled();
  });

  it('should call insertMany with the provided orders', async () => {
    insertManySpy.mockResolvedValue(databaseMockOutput as any);

    const result = await repository.createOrders(createDatabaseMockInput);

    expect(insertManySpy).toHaveBeenCalledWith(createDatabaseMockInput, {
      ordered: true,
    });
    expect(result).toEqual(databaseMockOutput);
    expect(loggerSpy).toHaveBeenCalledTimes(2);
  });
});

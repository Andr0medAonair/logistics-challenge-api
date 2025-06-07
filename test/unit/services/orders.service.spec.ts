import { Test, TestingModule } from '@nestjs/testing';
import { mockOrders, mockId, mockOrder } from '../mocks';
import { OrdersService } from 'src/services/orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return correct value on findAll method', async () => {
    const response = await service.findAllOrders();
    expect(response).toStrictEqual(mockOrders);
  });

  it('should return correct value on findOrdersByUserId method', async () => {
    const response = await service.findOrdersByUserId(mockId);
    expect(response).toStrictEqual(mockOrder);
  });
});

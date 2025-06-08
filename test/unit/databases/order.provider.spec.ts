import { Connection } from 'mongoose';
import { orderProvider } from 'src/database/order.provider';
import { OrderSchema } from 'src/schemas/order.schema';

describe('orderProvider', () => {
  const provider = orderProvider[0];

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should have the correct injection token', () => {
    expect(provider.provide).toBe('ORDER_MODEL');
  });

  it('should inject the DATABASE_CONNECTION', () => {
    expect(provider.inject).toEqual(['DATABASE_CONNECTION']);
  });

  describe('useFactory', () => {
    it('should call connection.model with the correct name and schema', () => {
      const mockConnection = {
        model: jest.fn(),
      };
      const factory = provider.useFactory;

      factory(mockConnection as unknown as Connection);

      expect(mockConnection.model).toHaveBeenCalledTimes(1);
      expect(mockConnection.model).toHaveBeenCalledWith('Order', OrderSchema);
    });
  });
});

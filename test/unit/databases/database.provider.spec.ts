import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { databaseProvider } from 'src/database/database.provider';

jest.mock('mongoose', () => ({
  connect: jest.fn(),
}));

const mockedMongooseConnect = mongoose.connect as jest.Mock;

describe('databaseProvider', () => {
  const provider = databaseProvider[0];

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('useFactory', () => {
    it('should call mongoose.connect with the URL from ConfigService', async () => {
      const dbUrlFromConfig = 'mongodb://url-from-config:27017/testdb';
      const mockConfigService = {
        get: jest.fn().mockReturnValue(dbUrlFromConfig),
      };
      const factory = provider.useFactory;

      await factory(mockConfigService as unknown as ConfigService);

      expect(mockConfigService.get).toHaveBeenCalledWith('DB_CONNECTION_URL');
      expect(mockConfigService.get).toHaveBeenCalledTimes(1);
      expect(mockedMongooseConnect).toHaveBeenCalledWith(dbUrlFromConfig);
      expect(mockedMongooseConnect).toHaveBeenCalledTimes(1);
    });

    it('should call mongoose.connect with the fallback URL if ConfigService returns nothing', async () => {
      const fallbackUrl = 'mongodb://localhost:27017/mydatabase';
      const mockConfigService = {
        get: jest.fn().mockReturnValue(undefined),
      };
      const factory = provider.useFactory;

      await factory(mockConfigService as unknown as ConfigService);

      expect(mockConfigService.get).toHaveBeenCalledWith('DB_CONNECTION_URL');
      expect(mockedMongooseConnect).toHaveBeenCalledWith(fallbackUrl);
      expect(mockedMongooseConnect).toHaveBeenCalledTimes(1);
    });
  });
});

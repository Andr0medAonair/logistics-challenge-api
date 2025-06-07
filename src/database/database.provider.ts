import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: async (
      configService: ConfigService,
    ): Promise<typeof mongoose> => {
      const connectionUrl = configService.get<string>('DB_CONNECTION_URL');

      return mongoose.connect(
        connectionUrl ?? 'mongodb://localhost:27017/mydatabase',
      );
    },
  },
];

import { Connection } from 'mongoose';
import { OrderSchema } from 'src/schemas/order.schema';

export const orderProvider = [
  {
    provide: 'ORDER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Order', OrderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

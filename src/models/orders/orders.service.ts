import { Injectable, Logger } from '@nestjs/common';
import { stringToJsonConverter } from 'src/common/helpers/stringToJsonConverter.helper';

@Injectable()
export class OrdersService {
  create(rawPayload: string) {
    Logger.log('Creating a new order with data:', rawPayload);
    const parsed = stringToJsonConverter(rawPayload);
    return parsed;
  }

  async findAll() {
    Logger.log(`Retrieving orders`);
    const mockOrders = [
      {
        user_id: 1,
        name: 'Zarelli',
        orders: [
          {
            order_id: 123,
            total: '1024.48',
            date: '2021-12-01',
            products: [
              {
                product_id: 111,
                value: '512.24',
              },
              {
                product_id: 122,
                value: '512.24',
              },
            ],
          },
        ],
      },
      {
        user_id: 2,
        name: 'Medeiros',
        orders: [
          {
            order_id: 12345,
            total: '512.48',
            date: '2020-12-01',
            products: [
              {
                product_id: 111,
                value: '256.24',
              },
              {
                product_id: 122,
                value: '256.24',
              },
            ],
          },
        ],
      },
    ];

    // eslint-disable-next-line @typescript-eslint/await-thenable
    return await mockOrders;
  }

  async findOne(id: number) {
    Logger.log(`Retrieving order for user with ID: ${id}`);
    const mockOrder = {
      user_id: 2,
      name: 'Medeiros',
      orders: [
        {
          order_id: 12345,
          total: '512.48',
          date: '2020-12-01',
          products: [
            {
              product_id: 111,
              value: '256.24',
            },
            {
              product_id: 122,
              value: '256.24',
            },
          ],
        },
      ],
    };

    // eslint-disable-next-line @typescript-eslint/await-thenable
    return await mockOrder;
  }
}

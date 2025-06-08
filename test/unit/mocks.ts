import { MemoryStorageFile } from '@blazity/nest-file-fastify';
import { UserDataEntryInterface } from 'src/interfaces/user-data-entry.interface';
import { UserDataInterface } from 'src/interfaces/user-data.interface';

export const createMockPayload: string = `[
  "0000000001Zarelli                              0000000123 0000000111 512.24    20211201",
  "0000000001Zarelli                              0000000123 0000000122 512.24    20211201",
  "0000000002Medeiros                             0000012345 0000000111 256.24    20201201",
  "0000000002Medeiros                             0000012345 0000000122 256.24    20201201"
]`;

export const createMockFiles = {
  file1: [
    {
      buffer: Buffer.from(`
        0000000001Zarelli                              0000000123 0000000111 512.24    20211201,
        0000000001Zarelli                              0000000123 0000000122 512.24    20211201,
      `),
    } as MemoryStorageFile,
  ],
  file2: [
    {
      buffer: Buffer.from(`
        0000000002Medeiros                             0000012345 0000000111 256.24    20201201
        0000000002Medeiros                             0000012345 0000000122 256.24    20201201
      `),
    } as MemoryStorageFile,
  ],
};

export const databaseMockOutput: UserDataEntryInterface[] = [
  {
    userId: 1,
    userName: 'Zarelli',
    orderId: 123,
    prodId: 111,
    value: 512.24,
    date: 20211201,
  },
  {
    userId: 1,
    userName: 'Zarelli',
    orderId: 123,
    prodId: 122,
    value: 512.24,
    date: 20211201,
  },
  {
    userId: 2,
    userName: 'Medeiros',
    orderId: 12345,
    prodId: 111,
    value: 256.24,
    date: 20201201,
  },
  {
    userId: 2,
    userName: 'Medeiros',
    orderId: 12345,
    prodId: 122,
    value: 256.24,
    date: 20201201,
  },
];

export const mockOrders: UserDataInterface[] = [
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

export const mockId: number = 2;

export const databaseMockSingleOutput: UserDataEntryInterface[] = [
  {
    userId: 2,
    userName: 'Medeiros',
    orderId: 12345,
    prodId: 111,
    value: 256.24,
    date: 20201201,
  },
  {
    userId: 2,
    userName: 'Medeiros',
    orderId: 12345,
    prodId: 122,
    value: 256.24,
    date: 20201201,
  },
];

export const mockOrder: UserDataInterface = {
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

import { OrderInputInterface } from 'src/interfaces/order-input.interface';
import { OrderInterface } from 'src/interfaces/order.interface';
import { UserDataEntryInterface } from 'src/interfaces/user-data-entry.interface';
import { UserDataInterface } from 'src/interfaces/user-data.interface';

export const unparsedOrdersMock: UserDataEntryInterface[] = [
  {
    userId: 22,
    userName: 'Carter Armstrong',
    orderId: 204,
    prodId: 5,
    value: 1368.43,
    date: 20210816,
  },
  {
    userId: 22,
    userName: 'Carter Armstrong',
    orderId: 206,
    prodId: 2,
    value: 448.22,
    date: 20210807,
  },
  {
    userId: 22,
    userName: 'Carter Armstrong',
    orderId: 207,
    prodId: 6,
    value: 1128.28,
    date: 20210908,
  },
  {
    userId: 22,
    userName: 'Carter Armstrong',
    orderId: 204,
    prodId: 3,
    value: 1822.77,
    date: 20210816,
  },
  {
    userId: 22,
    userName: 'Carter Armstrong',
    orderId: 207,
    prodId: 2,
    value: 560.11,
    date: 20210908,
  },
  {
    userId: 22,
    userName: 'Carter Armstrong',
    orderId: 207,
    prodId: 3,
    value: 1471.32,
    date: 20210908,
  },
  {
    userId: 22,
    userName: 'Carter Armstrong',
    orderId: 206,
    prodId: 4,
    value: 1201.43,
    date: 20210807,
  },

  {
    userId: 22,
    userName: 'Carter Armstrong',
    orderId: 204,
    prodId: 2,
    value: 469.32,
    date: 20210816,
  },
];

export const finalizeOrderInputInterfacePayloadMock = [
  {
    order_id: 204,
    date: '2021-08-16',
    total: 3660.52,
    products: [
      { product_id: 5, value: '1368.43' },
      { product_id: 3, value: '1822.77' },
      { product_id: 2, value: '469.32' },
    ],
  },
  {
    order_id: 206,
    date: '2021-08-07',
    total: 1649.65,
    products: [
      { product_id: 2, value: '448.22' },
      { product_id: 4, value: '1201.43' },
    ],
  },
  {
    order_id: 207,
    date: '2021-09-08',
    total: 3159.71,
    products: [
      { product_id: 6, value: '1128.28' },
      { product_id: 2, value: '560.11' },
      { product_id: 3, value: '1471.32' },
    ],
  },
];

export const finalizeOrderOutputPayloadMock = [
  {
    order_id: 204,
    date: '2021-08-16',
    total: '3660.52',
    products: [
      { product_id: 2, value: '469.32' },
      { product_id: 3, value: '1822.77' },
      { product_id: 5, value: '1368.43' },
    ],
  },
  {
    order_id: 206,
    date: '2021-08-07',
    total: '1649.65',
    products: [
      { product_id: 2, value: '448.22' },
      { product_id: 4, value: '1201.43' },
    ],
  },
  {
    order_id: 207,
    date: '2021-09-08',
    total: '3159.71',
    products: [
      { product_id: 2, value: '560.11' },
      { product_id: 3, value: '1471.32' },
      { product_id: 6, value: '1128.28' },
    ],
  },
];

export const groupedResponseOutputMock: Record<number, OrderInputInterface> = {
  '204': {
    date: '2021-08-16',
    order_id: 204,
    products: [
      { product_id: 5, value: '1368.43' },
      { product_id: 3, value: '1822.77' },
      { product_id: 2, value: '469.32' },
    ],
    total: 3660.52,
  },
  '206': {
    date: '2021-08-07',
    order_id: 206,
    products: [
      { product_id: 2, value: '448.22' },
      { product_id: 4, value: '1201.43' },
    ],
    total: 1649.65,
  },
  '207': {
    date: '2021-09-08',
    order_id: 207,
    products: [
      { product_id: 6, value: '1128.28' },
      { product_id: 2, value: '560.11' },
      { product_id: 3, value: '1471.32' },
    ],
    total: 3159.71,
  },
};

export const userPayloadMock: UserDataInterface[] = [
  {
    user_id: 22,
    name: 'Carter Armstrong',
    orders: [
      {
        order_id: 204,
        total: '3660.52',
        date: '2021-08-16',
        products: [
          {
            product_id: 2,
            value: '469.32',
          },
          {
            product_id: 3,
            value: '1822.77',
          },
          {
            product_id: 5,
            value: '1368.43',
          },
        ],
      },
      {
        order_id: 206,
        total: '1649.65',
        date: '2021-08-07',
        products: [
          {
            product_id: 2,
            value: '448.22',
          },
          {
            product_id: 4,
            value: '1201.43',
          },
        ],
      },
      {
        order_id: 207,
        total: '3159.71',
        date: '2021-09-08',
        products: [
          {
            product_id: 2,
            value: '560.11',
          },
          {
            product_id: 3,
            value: '1471.32',
          },
          {
            product_id: 6,
            value: '1128.28',
          },
        ],
      },
    ],
  },
];

export const singleOrderFinalizeOrderOutputPayloadMock: OrderInterface = {
  order_id: 12345,
  date: '2020-12-01',
  total: '512.48',
  products: [
    { product_id: 111, value: '256.24' },
    { product_id: 112, value: '256.24' },
  ],
};

export const emptyPayloadResponseMock: UserDataInterface[] = [
  { user_id: 0, name: '', orders: [] },
];

export const singleOrderMock: UserDataEntryInterface[] = [
  {
    userId: 2,
    userName: 'Medeiros',
    orderId: 12345,
    prodId: 112,
    value: 256.24,
    date: 20201201,
  },
  {
    userId: 2,
    userName: 'Medeiros',
    orderId: 12345,
    prodId: 111,
    value: 256.24,
    date: 20201201,
  },
];

export const singleOrderGroupedMock: Record<number, OrderInputInterface> = {
  '12345': {
    date: '2020-12-01',
    order_id: 12345,
    products: [
      { product_id: 112, value: '256.24' },
      { product_id: 111, value: '256.24' },
    ],
    total: 512.48,
  },
};

export const singleOrderFinalizeInputPayloadMock = [
  {
    order_id: 12345,
    date: '2020-12-01',
    total: 512.48,
    products: [
      { product_id: 112, value: '256.24' },
      { product_id: 111, value: '256.24' },
    ],
  },
];

export const singleOrderOutputMock: UserDataInterface[] = [
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
            product_id: 112,
            value: '256.24',
          },
        ],
      },
    ],
  },
];

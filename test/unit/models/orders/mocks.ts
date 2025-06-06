export const mockOrders = [
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

export const mockId = 2;

export const mockOrder = {
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

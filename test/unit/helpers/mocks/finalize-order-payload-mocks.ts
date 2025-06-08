import { OrderInputInterface } from 'src/interfaces/order-input.interface';
import { OrderInterface } from 'src/interfaces/order.interface';

export const inputPayloadMock: OrderInputInterface = {
  order_id: 208,
  date: '2021-05-23',
  total: 3195.5,
  products: [
    { product_id: 1, value: '741.07' },
    { product_id: 3, value: '276.78' },
    { product_id: 2, value: '1196.35' },
    { product_id: 6, value: '981.30' },
  ],
};

export const firstProduct = { product_id: 1, value: '741.07' };
export const secondProduct = { product_id: 2, value: '1196.35' };
export const thirdProduct = { product_id: 3, value: '276.78' };
export const fourthProduct = { product_id: 6, value: '981.30' };

export const outputPayloadMock: OrderInterface = {
  order_id: 208,
  date: '2021-05-23',
  total: '3195.50',
  products: [firstProduct, secondProduct, thirdProduct, fourthProduct],
};

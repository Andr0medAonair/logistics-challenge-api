import { ProductInterface } from './product.interface';

export interface OrderInterface {
  order_id: number;
  date: string;
  total: string;
  products: ProductInterface[];
}

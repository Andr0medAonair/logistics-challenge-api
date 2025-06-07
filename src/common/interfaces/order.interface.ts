import { Product } from './product.interface';

export interface Order {
  order_id: number;
  date: string;
  total: string;
  products: Product[];
}

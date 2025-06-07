import { Product } from './product.entity';

export class Order {
  order_id: number;
  total: string;
  date: string;
  products: Product[];
}

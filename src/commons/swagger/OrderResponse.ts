import { ApiProperty } from '@nestjs/swagger';
import { ProductResponse } from './ProductResponse';

export class OrderResponse {
  @ApiProperty()
  order_id: number;

  @ApiProperty()
  total: string;

  @ApiProperty()
  date: string;

  @ApiProperty({ type: [ProductResponse] })
  products: ProductResponse[];
}

import { ApiProperty } from '@nestjs/swagger';
import { OrderResponse } from './OrderResponse';

export class UserDataResponse {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [OrderResponse] })
  orders: OrderResponse[];
}

import { ApiProperty } from '@nestjs/swagger';

export class ProductResponse {
  @ApiProperty()
  product_id: number;

  @ApiProperty()
  value: string;
}

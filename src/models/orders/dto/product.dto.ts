import { IsDefined, IsNumber, IsString } from '@nestjs/class-validator';

export class ProductDto {
  @IsDefined()
  @IsNumber()
  product_id: number;

  @IsDefined()
  @IsString()
  value: string;
}

import { Type } from '@nestjs/class-transformer';
import {
  IsDefined,
  IsNumber,
  IsString,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from '@nestjs/class-validator';
import { ProductDto } from './product.dto';

export class OrderDto {
  @IsDefined()
  @IsNumber()
  order_id: number;

  @IsDefined()
  @IsString()
  total: string;

  @IsDefined()
  @IsString()
  date: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => ProductDto)
  products: ProductDto[];
}

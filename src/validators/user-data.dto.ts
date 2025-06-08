import { Type } from '@nestjs/class-transformer';
import {
  IsDefined,
  IsNumber,
  IsString,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from '@nestjs/class-validator';
import { OrderDto } from './order.dto';

export class UserDataDto {
  @IsDefined()
  @IsNumber()
  user_id: number;

  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => OrderDto)
  orders: OrderDto[];
}

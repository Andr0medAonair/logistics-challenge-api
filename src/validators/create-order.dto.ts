import { IsDefined, IsNumber, IsString } from '@nestjs/class-validator';

export class CreateOrderDto {
  @IsDefined()
  @IsNumber()
  userId: number;

  @IsDefined()
  @IsString()
  userName: string;

  @IsDefined()
  @IsNumber()
  orderId: number;

  @IsDefined()
  @IsNumber()
  prodId: number;

  @IsDefined()
  @IsNumber()
  value: number;

  @IsDefined()
  @IsNumber()
  date: number;
}

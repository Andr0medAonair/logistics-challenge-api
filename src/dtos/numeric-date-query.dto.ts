import { IsOptional, IsNumber } from '@nestjs/class-validator';

export class NumericDateQueryDto {
  @IsOptional()
  @IsNumber()
  startDate?: number;

  @IsOptional()
  @IsNumber()
  endDate?: number;
}

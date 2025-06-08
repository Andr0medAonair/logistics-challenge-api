import { IsOptional, IsDateString } from '@nestjs/class-validator';
import { IsBefore } from './is-before.validator';

export class DateQueryDto {
  @IsOptional()
  @IsDateString(
    {},
    { message: 'A data de início deve estar no formato ISO 8601 (YYYY-MM-DD)' },
  )
  @IsBefore('endDate', {
    message: 'A data de início deve ser anterior à data de fim.',
  })
  startDate?: string;

  @IsOptional()
  @IsDateString(
    {},
    { message: 'A data de fim deve estar no formato ISO 8601 (YYYY-MM-DD)' },
  )
  endDate?: string;
}

import { DateQueryDto } from 'src/validators/date-query.dto';
import { NumericDateQueryDto } from 'src/validators/numeric-date-query.dto';
import { convertDateStringToNumericDate } from './convert-string-date-to-numeric-date.utils';

export function transformDateStringToNumeric(
  dateDto: DateQueryDto,
): NumericDateQueryDto {
  const numericDto: NumericDateQueryDto = {};

  if (dateDto.startDate) {
    numericDto.startDate = convertDateStringToNumericDate(dateDto.startDate);
  }

  if (dateDto.endDate) {
    numericDto.endDate = convertDateStringToNumericDate(dateDto.endDate);
  }

  return numericDto;
}

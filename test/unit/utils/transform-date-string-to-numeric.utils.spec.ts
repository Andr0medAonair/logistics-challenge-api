import { DateQueryDto } from 'src/validators/date-query.dto';
import { NumericDateQueryDto } from 'src/validators/numeric-date-query.dto';
import { transformDateStringToNumeric } from 'src/utils/transform-date-string-to-numeric.utils';

import * as dateConverterUtils from 'src/utils/convert-string-date-to-numeric-date.utils';

describe('transformDateStringToNumeric', () => {
  let convertDateSpy: jest.SpyInstance;

  beforeEach(() => {
    convertDateSpy = jest.spyOn(
      dateConverterUtils,
      'convertDateStringToNumericDate',
    );
  });

  afterEach(() => {
    convertDateSpy.mockRestore();
  });

  it('should transform both startDate and endDate when both are provided', () => {
    const dateDto: DateQueryDto = {
      startDate: '2025-06-08',
      endDate: '2025-06-10',
    };

    convertDateSpy.mockReturnValueOnce(20250608).mockReturnValueOnce(20250610);

    const result: NumericDateQueryDto = transformDateStringToNumeric(dateDto);

    expect(result).toEqual({
      startDate: 20250608,
      endDate: 20250610,
    });
    expect(convertDateSpy).toHaveBeenCalledTimes(2);
    expect(convertDateSpy).toHaveBeenCalledWith('2025-06-08');
    expect(convertDateSpy).toHaveBeenCalledWith('2025-06-10');
  });

  it('should transform only startDate when only it is provided', () => {
    const dateDto: DateQueryDto = {
      startDate: '2025-01-01',
    };
    convertDateSpy.mockReturnValueOnce(20250101);

    const result = transformDateStringToNumeric(dateDto);

    expect(result).toEqual({
      startDate: 20250101,
    });
    expect(convertDateSpy).toHaveBeenCalledTimes(1);
    expect(convertDateSpy).toHaveBeenCalledWith('2025-01-01');
  });

  it('should transform only endDate when only it is provided', () => {
    const dateDto: DateQueryDto = {
      endDate: '2025-12-31',
    };
    convertDateSpy.mockReturnValueOnce(20251231);

    const result = transformDateStringToNumeric(dateDto);

    expect(result).toEqual({
      endDate: 20251231,
    });
    expect(convertDateSpy).toHaveBeenCalledTimes(1);
  });

  it('should return an empty object when no dates are provided', () => {
    const dateDto: DateQueryDto = {};
    const result = transformDateStringToNumeric(dateDto);

    expect(result).toEqual({});
    expect(convertDateSpy).not.toHaveBeenCalled();
  });
});

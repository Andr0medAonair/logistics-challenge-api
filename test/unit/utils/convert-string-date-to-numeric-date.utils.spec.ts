import { convertDateStringToNumericDate } from 'src/utils/convert-string-date-to-numeric-date.utils';

describe('convertDateStringToNumericDate', () => {
  test.each([
    { input: '2021-03-08', output: 20210308 },
    { input: '2021-11-23', output: 20211123 },
    { input: '2021-07-24', output: 20210724 },
  ])(
    'should convert string date value to number %s',
    ({ input, output }): void => {
      expect(convertDateStringToNumericDate(input)).toEqual(output);
    },
  );
});

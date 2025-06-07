import { formatDate } from 'src/common/utils/formatDate.utils';

describe('formatDate', () => {
  test.each([
    { input: '20210308', output: '2021-03-08' },
    { input: '20211123', output: '2021-11-23' },
    { input: '20210724', output: '2021-07-24' },
  ])('should format date value %s', ({ input, output }): void => {
    expect(formatDate(input)).toEqual(output);
  });
});

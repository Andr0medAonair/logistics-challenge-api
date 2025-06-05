import { formatDate } from 'src/common/utils/formatDate.utils';

describe('formatDate', () => {
  test.each([
    { input: '20210308', output: '2021-08-03' },
    { input: '20211123', output: '2021-23-11' },
    { input: '20210724', output: '2021-24-07' },
  ])('should format date value %s', ({ input, output }): void => {
    expect(formatDate(input)).toEqual(output);
  });

  // test('should throw an error for invalid inputs', () => {
  //   expect(() => formatDate('')).toThrow();
  //   expect(() => formatDate('invalid')).toThrow();
  //   // expect(() => formatDate('724.620210906')).toThrow();
  // });
});

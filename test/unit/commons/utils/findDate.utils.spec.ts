import { findDate } from 'src/common/utils/findDate.utils';

describe('findDate', () => {
  test.each([
    { input: '1836.7420210308', output: 20210308 },
    { input: '1013.5420211123', output: 20211123 },
    { input: '1050.8920210724', output: 20210724 },
  ])('should validate date value %s', ({ input, output }): void => {
    expect(findDate(input)).toEqual(output);
  });

  test('should throw an error for invalid inputs', () => {
    expect(() => findDate('')).toThrow();
    expect(() => findDate('invalid')).toThrow();
    expect(() => findDate('724.620210906')).toThrow();
  });
});

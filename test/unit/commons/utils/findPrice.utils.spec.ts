import { findPrice } from 'src/common/utils/findPrice.utils';

describe('findPrice', () => {
  test.each([
    { input: '1836.7420210308', output: 1836.74 },
    { input: '1836.7520210308', output: 1836.75 },
    { input: '1050.8920210724', output: 1050.89 },
  ])('should validate price value %s', ({ input, output }): void => {
    expect(findPrice(input)).toEqual(output);
  });

  test('should throw an error for invalid inputs', () => {
    expect(() => findPrice('')).toThrow();
    expect(() => findPrice('invalid')).toThrow();
    expect(() => findPrice('724.620210906')).toThrow();
  });
});

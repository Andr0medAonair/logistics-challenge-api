import { adjustPrice } from 'src/common/utils/adjustPrice.utils';

describe('adjustPrice', () => {
  test.each([
    { input: 1836.7460210308, output: 1836.75 },
    { input: 1836.7550210308, output: 1836.76 },
    { input: 1836.7440210308, output: 1836.74 },
  ])('should validate adjusted price %s', ({ input, output }): void => {
    expect(adjustPrice(input)).toEqual(output);
  });
});

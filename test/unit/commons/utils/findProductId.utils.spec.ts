import { findProductId } from 'src/common/utils/findProductId.utils';

describe('findProductId', () => {
  test.each([
    {
      input: 'Miss Freida Rippin00000012620000000002',
      output: '0000000002',
    },
    {
      input: 'Marcos Stanton00000018390000000004',
      output: '0000000004',
    },
    { input: '00000016320000000002', output: '' },
  ])('should separate and return product id %s', ({ input, output }): void => {
    expect(findProductId(input)).toEqual(output);
  });
});

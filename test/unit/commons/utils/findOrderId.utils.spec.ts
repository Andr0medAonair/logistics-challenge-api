import { findOrderId } from 'src/common/utils/findOrderId.utils';

describe('findOrderId', () => {
  test.each([
    {
      input: 'Palmer Prosacco00000007530000000003',
      output: '0000000753',
    },
    {
      input: 'Ken Wintheiser00000005230000000003',
      output: '0000000523',
    },
    { input: '00000016320000000002', output: '' },
  ])('should separate and return order id %s', ({ input, output }): void => {
    expect(findOrderId(input)).toEqual(output);
  });
});

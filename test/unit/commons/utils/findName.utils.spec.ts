import { findName } from 'src/common/utils/findName.utils';

describe('findName', () => {
  test.each([
    { input: 'Palmer Prosacco00000007530000000003', output: 'Palmer Prosacco' },
    { input: 'Ken Wintheiser00000005230000000003', output: 'Ken Wintheiser' },
    { input: '00000016320000000002', output: '' },
  ])('should separate and return client name %s', ({ input, output }): void => {
    expect(findName(input)).toEqual(output);
  });
});

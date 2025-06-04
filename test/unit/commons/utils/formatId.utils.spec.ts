import { formatId } from 'src/common/utils/formatId.utils';

describe('formatId', () => {
  test.each([
    { input: '0000000070', output: 70 },
    { input: '0000000000', output: 0 },
  ])('should format id correctly %s', ({ input, output }): void => {
    expect(formatId(input)).toEqual(output);
  });
});

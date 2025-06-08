import { groupEntriesByOrder } from 'src/helpers/group-entries-by-order.helper';
import { unparsedOrdersMock } from './mocks/output-payload-builder-mocks';
import { groupedResponseMock } from './mocks/group-entries-by-order-mocks';

describe('groupEntriesByOrder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should sort items by the correct order', () => {
    const mockDateFormatter = jest.fn(
      (input: string) =>
        `${input.substring(0, 4)}-${input.substring(4, 6)}-${input.substring(6, 8)}`,
    );
    const response = groupEntriesByOrder(unparsedOrdersMock, mockDateFormatter);

    expect(response).toEqual(groupedResponseMock);
  });
});

import { groupEntriesByOrder } from 'src/helpers/groupEntriesByOrder.helper';
import { unparsedOrdersMock } from './mocks/outputPayloadBuilderMocks';
import { groupedResponseMock } from './mocks/groupEntriesByOrderMocks';

describe('groupEntriesByOrder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should sort items by the correct order', () => {
    const mockDateFormatter = jest.fn(
      (input: string) =>
        `${input.substring(0, 4)}-${input.substring(4, 6)}-${input.substring(6, 8)}`,
    );
    const response = groupEntriesByOrder(unparsedOrdersMock, mockDateFormatter);

    expect(response).toEqual(groupedResponseMock);
  });
});

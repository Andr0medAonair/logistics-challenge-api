import { outputPayloadBuilder } from 'src/helpers/output-payload-builder.helper';
import {
  emptyPayloadResponseMock,
  finalizeOrderOutputPayloadMock,
  singleOrderFinalizeInputPayloadMock,
  singleOrderFinalizeOrderOutputPayloadMock,
  singleOrderGroupedMock,
  singleOrderMock,
  singleOrderOutputMock,
  unparsedOrdersMock,
  userPayloadMock,
} from './mocks/output-payload-builder-mocks';
import { groupedResponseMock } from './mocks/group-entries-by-order-mocks';
import { groupEntriesByOrder } from 'src/helpers/group-entries-by-order.helper';
import { DateFormatter } from 'src/dtos/types';
import { finalizeOrder } from 'src/helpers/finalize-order-payload.helper';

jest.mock('src/helpers/group-entries-by-order.helper');
jest.mock('src/helpers/finalize-order-payload.helper');

describe('outputPayloadBuilder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should build output payload correctly', () => {
    const mockDateFormatter: DateFormatter = jest.fn();
    (groupEntriesByOrder as jest.Mock).mockReturnValueOnce(
      singleOrderGroupedMock,
    );
    (finalizeOrder as jest.Mock).mockReturnValueOnce(
      singleOrderFinalizeOrderOutputPayloadMock,
    );

    const result = outputPayloadBuilder(singleOrderMock, mockDateFormatter);

    expect(groupEntriesByOrder).toHaveBeenCalledTimes(1);
    expect(groupEntriesByOrder).toHaveBeenCalledWith(
      singleOrderMock,
      mockDateFormatter,
    );

    expect(finalizeOrder).toHaveBeenCalledTimes(1);
    expect(finalizeOrder).toHaveBeenCalledWith(
      singleOrderFinalizeInputPayloadMock[0],
      0,
      singleOrderFinalizeInputPayloadMock,
    );
    expect(result).toEqual(singleOrderOutputMock);
    expect(result).toHaveLength(1);
    expect(result[0].user_id).toBe(2);
    expect(result[0].name).toBe('Medeiros');
  });

  it('should build output payload correctly for a larger file', () => {
    const mockDateFormatter = jest.fn(
      (input: string) =>
        `${input.substring(0, 4)}-${input.substring(4, 6)}-${input.substring(6, 8)}`,
    );

    (groupEntriesByOrder as jest.Mock).mockReturnValue(groupedResponseMock);
    (finalizeOrder as jest.Mock)
      .mockReturnValueOnce(finalizeOrderOutputPayloadMock[0])
      .mockReturnValueOnce(finalizeOrderOutputPayloadMock[1])
      .mockReturnValueOnce(finalizeOrderOutputPayloadMock[2]);

    const result = outputPayloadBuilder(unparsedOrdersMock, mockDateFormatter);

    expect(result).toEqual(userPayloadMock);
  });

  it('should return correct response with empty array payload', () => {
    const mockDateFormatter = jest.fn();

    const result = outputPayloadBuilder([], mockDateFormatter);

    expect(result).toEqual(emptyPayloadResponseMock);
  });
});

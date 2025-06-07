import { finalizeOrder } from 'src/helpers/finalizeOrderPayload.helper';
import {
  firstProduct,
  fourthProduct,
  inputPayloadMock,
  outputPayloadMock,
  secondProduct,
  thirdProduct,
} from './mocks/finalizeOrderPayloadMocks';

describe('finalizeOrder', () => {
  test('should format and sort order payload correctly', () => {
    const response = finalizeOrder(inputPayloadMock);

    expect(response).toEqual(outputPayloadMock);
    expect(typeof response.total).toBe('string');
    expect(response.total).not.toBe(3195.5);
    expect(response.products[0]).toEqual(firstProduct);
    expect(response.products[1]).toEqual(secondProduct);
    expect(response.products[2]).toEqual(thirdProduct);
    expect(response.products[3]).toEqual(fourthProduct);
  });
});

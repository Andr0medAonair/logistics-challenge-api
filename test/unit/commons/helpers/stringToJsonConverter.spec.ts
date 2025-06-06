import { stringToJsonConverter } from 'src/common/helpers/stringToJsonConverter.helper';
import { parsedResponseMock, rawPayloadMock } from './mocks';

describe('stringToJsonConverter', () => {
  test('should convert string to json correctly', () => {
    const response = stringToJsonConverter(rawPayloadMock);
    expect(response).toEqual(parsedResponseMock);
  });
});

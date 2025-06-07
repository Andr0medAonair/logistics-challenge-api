import { stringToJsonConverter } from 'src/common/helpers/stringToJsonConverter.helper';
import {
  rawPayloadMock,
  parsedResponseMock,
} from './mocks/stringToJsonConverterMocks';

describe('stringToJsonConverter', () => {
  test('should convert string to json correctly', () => {
    const response = stringToJsonConverter(rawPayloadMock);
    expect(response).toEqual(parsedResponseMock);
  });
});

import { stringToJsonConverter } from 'src/helpers/stringToJsonConverter.helper';
import {
  rawPayloadMock,
  parsedResponseMock,
} from './mocks/stringToJsonConverterMocks';

describe('stringToJsonConverter', () => {
  it('should convert string to json correctly', () => {
    const response = stringToJsonConverter(rawPayloadMock);
    expect(response).toEqual(parsedResponseMock);
  });
});

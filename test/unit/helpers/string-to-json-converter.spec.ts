import { stringToJsonConverter } from 'src/helpers/string-to-json-converter.helper';
import {
  rawPayloadMock,
  parsedResponseMock,
} from './mocks/string-to-json-converter-mocks';

describe('stringToJsonConverter', () => {
  it('should convert string to json correctly', () => {
    const response = stringToJsonConverter(rawPayloadMock);
    expect(response).toEqual(parsedResponseMock);
  });
});

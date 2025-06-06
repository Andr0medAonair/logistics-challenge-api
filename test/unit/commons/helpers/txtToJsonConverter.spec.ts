import { txtToJsonConverter } from 'src/common/helpers/txtToJsonConverter.helper';
import { parsedResponseMock, rawPayloadMock } from './mocks';

describe('txtToJsonConverter', () => {
  test('should convert txt to json correctly', () => {
    const response = txtToJsonConverter(rawPayloadMock);
    expect(response).toEqual(parsedResponseMock);
  });
});

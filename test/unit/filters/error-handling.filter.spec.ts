/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpException, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/error-handling.filter';

const createMockArgumentsHost = () => {
  const mockResponse = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  };

  const mockRequest = {
    url: '/test-path',
  };

  const mockHttpArgumentsHost = {
    getResponse: jest.fn().mockReturnValue(mockResponse),
    getRequest: jest.fn().mockReturnValue(mockRequest),
  };

  return {
    switchToHttp: jest.fn().mockReturnValue(mockHttpArgumentsHost),
  } as unknown as ArgumentsHost;
};

describe('HttpExceptionFilter', () => {
  let filter: HttpExceptionFilter;
  let mockHost: ArgumentsHost;

  beforeEach(() => {
    filter = new HttpExceptionFilter();
    mockHost = createMockArgumentsHost();
  });

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2025-06-08T04:30:00.000Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be defined', () => {
    expect(filter).toBeDefined();
  });

  describe('catch', () => {
    it('should handle HttpException with a string response', () => {
      const errorMessage = 'Resource not found';
      const status = HttpStatus.NOT_FOUND;
      const exception = new HttpException(errorMessage, status);

      filter.catch(exception, mockHost);

      const response = mockHost.switchToHttp().getResponse();
      expect(response.status).toHaveBeenCalledWith(status);
      expect(response.send).toHaveBeenCalledWith({
        statusCode: status,
        timestamp: '2025-06-08T04:30:00.000Z',
        path: '/test-path',
        message: errorMessage,
      });
    });

    it('should handle HttpException with an object response (from ValidationPipe)', () => {
      const errorObject = {
        statusCode: 400,
        message: ['productName should not be empty'],
        error: 'Bad Request',
      };
      const status = HttpStatus.BAD_REQUEST;
      const exception = new HttpException(errorObject, status);

      filter.catch(exception, mockHost);

      const response = mockHost.switchToHttp().getResponse();
      expect(response.status).toHaveBeenCalledWith(status);
      expect(response.send).toHaveBeenCalledWith({
        statusCode: status,
        timestamp: '2025-06-08T04:30:00.000Z',
        path: '/test-path',
        message: errorObject.message,
      });
    });

    it('should handle HttpException with an object response that has no message property', () => {
      const errorObject = { error: 'Some weird error' };
      const status = HttpStatus.INTERNAL_SERVER_ERROR;
      const exception = new HttpException(errorObject, status);

      filter.catch(exception, mockHost);

      const response = mockHost.switchToHttp().getResponse();
      expect(response.status).toHaveBeenCalledWith(status);
      expect(response.send).toHaveBeenCalledWith({
        statusCode: status,
        timestamp: '2025-06-08T04:30:00.000Z',
        path: '/test-path',
        message: undefined,
      });
    });
  });
});

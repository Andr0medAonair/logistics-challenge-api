import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      message:
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (exceptionResponse as any).message,
    };

    response.status(status).send(errorResponse);
  }
}

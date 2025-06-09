import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import fastyfyMultipart from '@fastify/multipart';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { HttpExceptionFilter } from './filters/error-handling.filter';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  app.setGlobalPrefix(process.env.GLOBAL_PREFIX ?? 'api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Desafio API Logística')
    .setDescription('Desafio técnico')
    .setVersion('1.0')
    .addTag('logística')
    .build();

  await app.register(fastyfyMultipart);

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(
    `${process.env.GLOBAL_PREFIX}/docs`,
    app,
    documentFactory,
  );

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

void bootstrap();

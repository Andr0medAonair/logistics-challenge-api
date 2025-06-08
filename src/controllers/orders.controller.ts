import {
  Controller,
  Get,
  Post,
  Param,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { UserData } from '../entities/user-data.entity';
import {
  MemoryStorageFile,
  UploadedFiles,
  FileFieldsInterceptor,
} from '@blazity/nest-file-fastify';
import { DateQueryDto } from 'src/dtos/date-query.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ErrorResponse } from 'src/commons/swagger/ErrorResponse';
import { UserDataResponse } from 'src/commons/swagger/UserDataResponse';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Salvar pedidos' })
  @ApiCreatedResponse({
    type: UserDataResponse,
    description: 'Salvar pedidos',
  })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'file1', maxCount: 1 },
      { name: 'file2', maxCount: 1 },
    ]),
  )
  async create(
    @UploadedFiles()
    files: {
      file1: MemoryStorageFile[];
      file2: MemoryStorageFile[];
    },
  ) {
    const bufferFile1 = files.file1[0].buffer.toString('utf8');
    const bufferFile2 = files.file2[0].buffer.toString('utf8');
    const composedString = bufferFile1 + bufferFile2;

    return await this.ordersService.createOrders(composedString);
  }

  @Get()
  @ApiOperation({
    summary: 'Buscar pedidos para todos os usuários filtrados ou não por data',
  })
  @ApiOkResponse({
    type: UserDataResponse,
    description: 'Pedidos Encontrados',
  })
  async findAll(@Query() queryDto?: DateQueryDto): Promise<UserData[]> {
    return await this.ordersService.findAllOrders(queryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar pedidos para determinado usuário' })
  @ApiOkResponse({
    type: UserDataResponse,
    description: 'Pedidos Encontrados',
  })
  @ApiNotFoundResponse({
    type: ErrorResponse,
    description: 'Not Found',
  })
  async findOne(@Param('id') id: number): Promise<UserData> {
    return await this.ordersService.findOrdersByUserId(+id);
  }
}

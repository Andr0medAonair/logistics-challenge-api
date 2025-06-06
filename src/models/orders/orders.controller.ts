import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UserData } from './entities/user-data.entity';
import {
  MemoryStorageFile,
  UploadedFiles,
  FileFieldsInterceptor,
} from '@blazity/nest-file-fastify';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
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
    console.log(files.file2);

    const bufferFile1 = files.file1[0].buffer.toString('utf8');
    const bufferFile2 = files.file2[0].buffer.toString('utf8');
    const composedString = bufferFile1 + bufferFile2;

    // eslint-disable-next-line @typescript-eslint/await-thenable
    return await this.ordersService.create(composedString);
  }

  @Get()
  async findAll(): Promise<UserData[]> {
    return await this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserData> {
    return await this.ordersService.findOne(+id);
  }
}

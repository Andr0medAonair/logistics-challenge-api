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
  UploadedFile,
  FileInterceptor,
} from '@blazity/nest-file-fastify';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: MemoryStorageFile) {
    const buffer = file.buffer.toString('utf8');
    // eslint-disable-next-line @typescript-eslint/await-thenable
    return await this.ordersService.create(buffer);
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
